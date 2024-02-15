import {
   BaseMemory,
   InputValues,
   OutputValues,
   getInputValue,
   getOutputValue,
} from "@langchain/core/memory";
import {
   BaseChatMessageHistory,
   BaseListChatMessageHistory,
} from "@langchain/core/chat_history";
import { BaseMessage } from "@langchain/core/messages";

/**
 * Class for storing chat message history in-memory. It extends the
 * BaseListChatMessageHistory class and provides methods to get, add, and
 * clear messages.
 */
export class ChatMessageHistory extends BaseListChatMessageHistory {
   lc_namespace = ["langchain", "stores", "message", "in_memory"];

   private messages: BaseMessage[] = [];

   constructor(messages?: BaseMessage[]) {
      // eslint-disable-next-line prefer-rest-params
      super(...arguments);
      this.messages = messages ?? [];
   }

   /**
    * Method to get all the messages stored in the ChatMessageHistory
    * instance.
    * @returns Array of stored BaseMessage instances.
    */
   async getMessages(): Promise<BaseMessage[]> {
      return this.messages;
   }

   /**
    * Method to add a new message to the ChatMessageHistory instance.
    * @param message The BaseMessage instance to add.
    * @returns A promise that resolves when the message has been added.
    */
   async addMessage(message: BaseMessage) {
      this.messages.push(message);
   }

   /**
    * Method to clear all the messages from the ChatMessageHistory instance.
    * @returns A promise that resolves when all messages have been cleared.
    */
   async clear() {
      this.messages = [];
   }
}

/**
 * Interface for the input parameters of the BaseChatMemory class.
 */
export interface BaseChatMemoryInput {
   chatHistory?: BaseChatMessageHistory;
   returnMessages?: boolean;
   inputKey?: string;
   outputKey?: string;
}

export abstract class BaseChatMemory extends BaseMemory {
   chatHistory: BaseChatMessageHistory;

   returnMessages = false;

   inputKey?: string;

   outputKey?: string;

   constructor(fields?: BaseChatMemoryInput) {
      super();
      this.chatHistory = fields?.chatHistory ?? new ChatMessageHistory();
      this.returnMessages = fields?.returnMessages ?? this.returnMessages;
      this.inputKey = fields?.inputKey ?? this.inputKey;
      this.outputKey = fields?.outputKey ?? this.outputKey;
   }

   /**
    * Method to add user and AI messages to the chat history in sequence.
    * @param inputValues The input values from the user.
    * @param outputValues The output values from the AI.
    * @returns Promise that resolves when the context has been saved.
    */
   async saveContext(
      inputValues: InputValues,
      outputValues: OutputValues,
   ): Promise<void> {
      // this is purposefully done in sequence so they're saved in order
      await this.chatHistory.addUserMessage(
         getInputValue(inputValues, this.inputKey),
      );
      await this.chatHistory.addAIChatMessage(
         getOutputValue(outputValues, this.outputKey),
      );
   }

   /**
    * Method to clear the chat history.
    * @returns Promise that resolves when the chat history has been cleared.
    */
   async clear(): Promise<void> {
      await this.chatHistory.clear();
   }
}
