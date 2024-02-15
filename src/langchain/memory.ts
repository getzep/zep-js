import {
   getInputValue,
   getOutputValue,
   InputValues,
   MemoryVariables,
   OutputValues,
} from "@langchain/core/memory";
import {
   AIMessage,
   BaseMessage,
   ChatMessage,
   getBufferString,
   HumanMessage,
   SystemMessage,
} from "@langchain/core/messages";
import { BaseChatMessageHistory } from "@langchain/core/chat_history";
import ZepClient from "../zep-client";
import { Memory } from "../memory_models";
import { NotFoundError } from "../errors";
import { Message } from "../message_models";
import { BaseChatMemory } from "./base_memory";

/**
 * Interface for the input parameters of the BaseChatMemory class.
 */
export interface BaseChatMemoryInput {
   chatHistory?: BaseChatMessageHistory;
   returnMessages?: boolean;
   inputKey?: string;
   outputKey?: string;
}

export interface ZepMemoryInput extends BaseChatMemoryInput {
   humanPrefix?: string;

   aiPrefix?: string;

   memoryKey?: string;

   baseURL?: string;

   sessionId: string;

   apiKey: string;
}

/**
 * Class used to manage the memory of a chat session, including loading
 * and saving the chat history, and clearing the memory when needed. It
 * uses the ZepClient to interact with the Zep service for managing the
 * chat session's memory.
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
export class ZepMemory extends BaseChatMemory implements ZepMemoryInput {
   humanPrefix = "Human";

   aiPrefix = "AI";

   memoryKey = "history";

   apiKey: string;

   sessionId: string;

   zepClientPromise: Promise<ZepClient>;

   private readonly zepInitFailMsg = "ZepClient is not initialized";

   constructor(fields: ZepMemoryInput) {
      super({
         returnMessages: fields?.returnMessages ?? false,
         inputKey: fields?.inputKey,
         outputKey: fields?.outputKey,
      });

      this.humanPrefix = fields.humanPrefix ?? this.humanPrefix;
      this.aiPrefix = fields.aiPrefix ?? this.aiPrefix;
      this.memoryKey = fields.memoryKey ?? this.memoryKey;
      this.apiKey = fields.apiKey;
      this.sessionId = fields.sessionId;
      this.zepClientPromise = ZepClient.init(fields.apiKey, fields.baseURL);
   }

   get memoryKeys() {
      return [this.memoryKey];
   }

   /**
    * Method that retrieves the chat history from the Zep service and formats
    * it into a list of messages.
    * @param values Input values for the method.
    * @returns Promise that resolves with the chat history formatted into a list of messages.
    */
   async loadMemoryVariables(values: InputValues): Promise<MemoryVariables> {
      // use either lastN provided by developer or undefined to use the
      // server preset.

      // Wait for ZepClient to be initialized
      const zepClient = await this.zepClientPromise;
      if (!zepClient) {
         throw new Error(this.zepInitFailMsg);
      }

      const memoryType = values.memoryType ?? "perpetual";
      let memory: Memory | null = null;
      try {
         memory = await zepClient.memory.getMemory(this.sessionId, memoryType);
      } catch (error) {
         if (error instanceof NotFoundError) {
            return this.returnMessages
               ? { [this.memoryKey]: [] }
               : { [this.memoryKey]: "" };
         }
         throw error;
      }

      let messages: BaseMessage[] =
         memory && memory.summary?.content
            ? [new SystemMessage(memory.summary.content)]
            : [];

      if (memory) {
         messages = messages.concat(
            memory.messages.map((message) => {
               const { content, role } = message;
               if (role === this.humanPrefix) {
                  return new HumanMessage(content);
               }
               if (role === this.aiPrefix) {
                  return new AIMessage(content);
               }
               // default to generic ChatMessage
               return new ChatMessage(content, role);
            }),
         );
      }

      if (this.returnMessages) {
         return {
            [this.memoryKey]: messages,
         };
      }
      return {
         [this.memoryKey]: getBufferString(
            messages,
            this.humanPrefix,
            this.aiPrefix,
         ),
      };
   }

   /**
    * Method that saves the input and output messages to the Zep service.
    * @param inputValues Input messages to be saved.
    * @param outputValues Output messages to be saved.
    * @returns Promise that resolves when the messages have been saved.
    */
   async saveContext(
      inputValues: InputValues,
      outputValues: OutputValues,
   ): Promise<void> {
      const input = getInputValue(inputValues, this.inputKey);
      const output = getOutputValue(outputValues, this.outputKey);

      // Create new Memory and Message instances
      const memory = new Memory({
         messages: [
            new Message({
               role: this.humanPrefix,
               content: `${input}`,
            }),
            new Message({
               role: this.aiPrefix,
               content: `${output}`,
            }),
         ],
      });

      // Wait for ZepClient to be initialized
      const zepClient = await this.zepClientPromise;
      if (!zepClient) {
         throw new Error(this.zepInitFailMsg);
      }

      // Add the new memory to the session using the ZepClient
      if (this.sessionId) {
         try {
            await zepClient.memory.addMemory(this.sessionId, memory);
         } catch (error) {
            console.error("Error adding memory: ", error);
         }
      }

      // Call the superclass's saveContext method
      await super.saveContext(inputValues, outputValues);
   }

   /**
    * Method that deletes the chat history from the Zep service.
    * @returns Promise that resolves when the chat history has been deleted.
    */
   async clear(): Promise<void> {
      // Wait for ZepClient to be initialized
      const zepClient = await this.zepClientPromise;
      if (!zepClient) {
         throw new Error(this.zepInitFailMsg);
      }

      try {
         await zepClient.memory.deleteMemory(this.sessionId);
      } catch (error) {
         console.error("Error deleting session: ", error);
      }

      // Clear the superclass's chat history
      await super.clear();
   }
}
