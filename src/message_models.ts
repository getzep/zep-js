import { MessageType } from "@langchain/core/messages";

export type RoleType = "user" | "assistant" | "system" | "function" | "tool";

/**
 * IMessage interface for providing input to create a Message instance.
 */
export interface IMessage {
   uuid?: string;
   created_at?: string;
   role: string;
   role_type: RoleType;
   content: string;
   token_count?: number;
   metadata?: Record<string, any>;
}

/**
 * Represents a message in the memory.
 */
export class Message {
   uuid?: string;

   created_at?: string;

   role: string;

   role_type: RoleType;

   content: string;

   token_count?: number;

   metadata?: Record<string, any>;

   /**
    * Constructs a new Message instance.
    * @param {IMessage} data - The data to create a message instance.
    */
   constructor(data: IMessage) {
      this.uuid = data.uuid;
      this.created_at = data.created_at;
      this.role = data.role;
      this.role_type = data.role_type;
      this.content = data.content;
      this.token_count = data.token_count;
      this.metadata = data.metadata;
   }

   /**
    * Converts the Message instance to a dictionary.
    * @returns {IMessage} A dictionary representation of Message instance.
    */
   toDict(): IMessage {
      return {
         uuid: this.uuid,
         created_at: this.created_at,
         role: this.role,
         role_type: this.role_type,
         content: this.content,
         token_count: this.token_count,
         metadata: this.metadata,
      };
   }
}

export const getZepMessageRoleType = (role: MessageType): RoleType => {
   switch (role) {
      case "human":
         return "user";
      case "ai":
         return "assistant";
      case "system":
         return "system";
      case "function":
         return "function";
      case "tool":
         return "tool";
      default:
         return "system";
   }
};
