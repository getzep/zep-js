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
import { getZepMessageRoleType, Message, RoleType } from "../message_models";
import type { MemoryType } from "../interfaces";

/**
 * Interface defining the structure of the input data for the ZepMemory
 * class. It includes properties like humanPrefix, aiPrefix, memoryKey,
 * baseURL, sessionId, and apiKey.
 */
interface ZepMemoryInput {
   sessionId: string;
   client: ZepClient;
   memoryType: MemoryType;
   humanPrefix?: string;
   aiPrefix?: string;
}

/**
 * Class used to manage the memory of a chat session, including loading
 * and saving the chat history, and clearing the memory when needed. It
 * uses the ZepClient to interact with the Zep service for managing the
 * chat session's memory.
 *
 */
export class ZepChatMessageHistory
   extends BaseChatMessageHistory
   implements ZepMemoryInput
{
   lc_namespace: string[] = [];

   sessionId: string;

   client: ZepClient;

   memoryType: MemoryType;

   humanPrefix = "human";

   aiPrefix = "ai";

   constructor(fields: ZepMemoryInput) {
      super();
      this.sessionId = fields.sessionId;
      this.memoryType = fields.memoryType;
      this.client = fields.client;
      if (fields.humanPrefix) {
         this.humanPrefix = fields.humanPrefix;
      }
      if (fields.aiPrefix) {
         this.aiPrefix = fields.aiPrefix;
      }
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

      // Extract facts
      messages.push(new SystemMessage(memory.facts.join("\n")));

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

               if (msg.role_type === ("assistant" as RoleType)) {
                  return new AIMessage(msg.content, metadata);
               }
               return new HumanMessage(msg.content, metadata);
            }),
         );
      }

      return messages;
   }

   async addAIChatMessage(message: string, metadata?: any): Promise<void> {
      await this.addMessage(new AIMessage({ content: message }), metadata);
   }

   async addMessage(message: BaseMessage, metadata?: any): Promise<void> {
      const messageToSave = message;
      if (message._getType() === "ai") {
         messageToSave.name = this.aiPrefix;
      } else if (message._getType() === "human") {
         messageToSave.name = this.humanPrefix;
      }
      if (message.content === null) {
         throw new Error("Message content cannot be null");
      }

      if (Array.isArray(message.content)) {
         throw new Error("Message content cannot be a list");
      }

      const zepMessage = new Message({
         content: message.content,
         role: message.name ?? message._getType(),
         role_type: getZepMessageRoleType(message._getType()),
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
