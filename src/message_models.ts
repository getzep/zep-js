import { MessageType } from "@langchain/core/messages";

export type RoleType =
   | "UserRole"
   | "AssistantRole"
   | "SystemRole"
   | "FunctionRole";

/**
 * IMessage interface for providing input to create a Message instance.
 */
export interface IMessage {
   uuid?: string;
   created_at?: string;
   role: string;
   roleType: RoleType;
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

   roleType: RoleType;

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
      this.roleType = data.roleType;
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
         roleType: this.roleType,
         content: this.content,
         token_count: this.token_count,
         metadata: this.metadata,
      };
   }
}

// export type MessageType = "human" | "ai" | "generic" | "system" | "function" | "tool";

export const getZepMessageRoleType = (role: MessageType): RoleType => {
   switch (role) {
      case "human":
         return "UserRole";
      case "ai":
         return "AssistantRole";
      case "system":
         return "SystemRole";
      case "function":
         return "FunctionRole";
      default:
         return "SystemRole";
   }
};
