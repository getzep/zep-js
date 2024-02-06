/* eslint import/no-extraneous-dependencies: 0 */

import {
   AIMessage,
   BaseMessage,
   HumanMessage,
   SystemMessage,
} from "@langchain/core/messages";
import { BaseChatMessageHistory } from "@langchain/core/chat_history";
import ZepClient from "../zep-client";
import { Memory } from "../memory_models";
import { NotFoundError } from "../errors";
import { Message } from "../message_models";
import type { MemoryType } from "../interfaces";

/**
 * Interface defining the structure of the input data for the ZepMemory
 * class. It includes properties like humanPrefix, aiPrefix, memoryKey,
 * baseURL, sessionId, and apiKey.
 */
export interface ZepMemoryInput {
   sessionId: string;
   client: ZepClient;
   memoryType: MemoryType;
}

/**
 * Class used to manage the memory of a chat session, including loading
 * and saving the chat history, and clearing the memory when needed. It
 * uses the ZepClient to interact with the Zep service for managing the
 * chat session's memory.
 *
 * @example
 * ```typescript
 * const sessionId = randomUUID();
 * const zepURL = "http://your-zep-url";
 *
 * // Initialize ZepMemory with session ID, base URL, and API key
 * const memory = new ZepMemory({
 *   sessionId,
 *   baseURL: zepURL,
 *   apiKey: "change_this_key",
 * });
 *
 * // Create a ChatOpenAI model instance with specific parameters
 * const model = new ChatOpenAI({
 *   modelName: "gpt-3.5-turbo",
 *   temperature: 0,
 * });
 *
 * // Create a ConversationChain with the model and memory
 * const chain = new ConversationChain({ llm: model, memory });
 *
 * // Example of calling the chain with an input
 * const res1 = await chain.call({ input: "Hi! I'm Jim." });
 * console.log({ res1 });
 *
 * // Follow-up call to the chain to demonstrate memory usage
 * const res2 = await chain.call({ input: "What did I just say my name was?" });
 * console.log({ res2 });
 *
 * // Output the session ID and the current state of memory
 * console.log("Session ID: ", sessionId);
 * console.log("Memory: ", await memory.loadMemoryVariables({}));
 *
 * ```
 */
export class ZepChatMessageHistory
   extends BaseChatMessageHistory
   implements ZepMemoryInput
{
   lc_namespace: string[] = [];

   sessionId: string;

   client: ZepClient;

   memoryType: MemoryType;

   constructor(fields: ZepMemoryInput) {
      super();
      this.sessionId = fields.sessionId;
      this.memoryType = fields.memoryType;
      this.client = fields.client;
   }

   private async getMemory(): Promise<Memory | null> {
      try {
         return this.client.memory.getMemory(this.sessionId, this.memoryType);
      } catch (error) {
         if (error instanceof NotFoundError) {
            console.warn(
               `Session ${this.sessionId} not found in Zep. Returning None`,
            );
         } else {
            console.error("Error getting memory: ", error);
         }
         return null;
      }
   }

   async getMessages(): Promise<BaseMessage[]> {
      const memory = await this.getMemory();
      if (!memory) {
         return [];
      }

      const messages: BaseMessage[] = [];

      // Extract summary, if present, and messages
      if (memory.summary && memory.summary.content.length > 0) {
         messages.push(new SystemMessage(memory.summary.content));
      }

      if (memory.messages) {
         messages.push(
            ...memory.messages.map((msg) => {
               const metadata = {
                  uuid: msg.uuid,
                  created_at: msg.created_at,
                  token_count: msg.token_count,
                  metadata: msg.metadata,
               };
               if (msg.role === "ai") {
                  return new AIMessage(msg.content, metadata);
               }
               return new HumanMessage(msg.content, metadata);
            }),
         );
      }

      return messages;
   }

   // @ts-ignore
   async addAIChatMessage(message: string, metadata?: any): Promise<void> {
      await this.addMessage(new AIMessage({ content: message }), metadata);
   }

   // @ts-ignore
   async addMessage(message: BaseMessage, metadata?: any): Promise<void> {
      if (message.content === null) {
         throw new Error("Message content cannot be null");
      }

      if (Array.isArray(message.content)) {
         throw new Error("Message content cannot be a list");
      }

      const zepMessage = new Message({
         content: message.content,
         // eslint-disable-next-line no-underscore-dangle
         role: message._getType(),
         metadata,
      });

      const zepMemory = new Memory({ messages: [zepMessage] });

      await this.client.memory.addMemory(this.sessionId, zepMemory);
   }

   async addUserMessage(message: string, metadata?: any): Promise<void> {
      await this.addMessage(new HumanMessage({ content: message }, metadata));
   }

   clear(): Promise<void> {
      console.warn("Clearing memory", this.sessionId);
      return Promise.resolve(undefined);
   }
}
