// zep-memory.ts
import { ZepClient } from "@getzep/zep-cloud";
import { RoleType } from "@getzep/zep-cloud/dist/api";
import { BaseMessage, AIMessage, HumanMessage, SystemMessage } from "@langchain/core/messages";
import { v4 as uuidv4 } from "uuid";

/**
 * ZepMemory adapter for LangGraph
 * This class provides memory persistence for LangGraph using Zep
 */
export class ZepMemory {
  private client: ZepClient;
  private sessionId: string;
  private initialized: boolean = false;
  private userId?: string;

  /**
   * Create a new ZepMemory instance
   * @param apiKey - Zep API key
   * @param sessionId - Optional session ID, will generate a new one if not provided
   * @param userId - Optional user ID to associate with the session
   */
  constructor(apiKey: string, sessionId?: string, userId?: string) {
    this.client = new ZepClient({
      apiKey,
    });
    this.sessionId = sessionId || uuidv4();
    this.userId = userId;
  }

  /**
   * Initialize the memory session
   * @param userId - Optional user ID to associate with the session
   */
  async initialize(userId?: string): Promise<void> {
    if (this.initialized) return;

    try {
      // Use provided userId or the one from constructor or generate a new one
      const userIdToUse = userId || this.userId || `user-${uuidv4()}`;
      this.userId = userIdToUse;

      // Check if user exists, create if not
      let userExists = false;
      try {
        console.log("userIdToUse", userIdToUse);
        await this.client.user.get(userIdToUse);
        userExists = true;
        console.log(`Using existing user: ${userIdToUse}`);
      } catch (error) {
        console.log(error.constructor.name);
        if (error.constructor.name === "NotFoundError") {
          // User doesn't exist, we'll create it
          console.log(`User ${userIdToUse} not found, will create`);
        } else {
          // For other errors, log and rethrow
          console.error(`Error checking if user exists: ${userIdToUse}:`, error);
          throw error;
        }
      }

      // Create user if it doesn't exist
      if (!userExists) {
        try {
          await this.client.user.add({
            userId: userIdToUse,
            firstName: 'Sarah',
            lastName: 'Smith',
            email: `${userIdToUse}@example.com`, // Placeholder email
          });
          console.log(`Created new user: ${userIdToUse}`);
        } catch (error) {
          console.error(`Failed to create user ${userIdToUse}:`, error);
          throw error;
        }
      }

      // Check if session exists
      let sessionExists = false;
      try {
        await this.client.memory.getSession(this.sessionId);
        sessionExists = true;
        console.log(`Using existing session: ${this.sessionId}`);
      } catch (error) {
        if (error.constructor.name === "NotFoundError") {
          // Session doesn't exist, we'll create it
          console.log(`Session ${this.sessionId} not found, will create`);
        } else {
          // For other errors, log and rethrow
          console.error(`Error checking if session exists ${this.sessionId}:`, error);
          throw error;
        }
      }

      // Create session if it doesn't exist
      if (!sessionExists) {
        try {
          await this.client.memory.addSession({
            sessionId: this.sessionId,
            userId: userIdToUse,
          });
          console.log(`Created new session: ${this.sessionId}`);
        } catch (error) {
          console.error(`Failed to create session ${this.sessionId}:`, error);
          throw error;
        }
      }

      this.initialized = true;
    } catch (error) {
      console.error("Failed to initialize Zep memory:", error);
      throw error;
    }
  }

  /**
   * Add a message to memory
   * @param message - LangChain message to add
   * @param withContext - Whether to return the Zep context string from memory
   */
  async addMessage(message: BaseMessage, withContext: boolean = false): Promise<string | undefined> {
    if (!this.initialized) {
      throw new Error("Memory not initialized");
    }

    try {
      // Convert LangChain message to Zep message format
      const zepMessage = this.convertToZepMessage(message);
      
      // Add message to Zep memory
      const response = await this.client.memory.add(this.sessionId, {
        messages: [zepMessage],
        returnContext: withContext
      });

      return response.context;
    } catch (error) {
      console.error("Failed to add message to Zep memory:", error);
      throw error;
    }
  }

  /**
   * Add multiple messages to memory
   * @param messages - Array of LangChain messages to add
   */
  async addMessages(messages: BaseMessage[]): Promise<void> {
    if (!this.initialized) {
      throw new Error("Memory not initialized");
    }

    try {
      // Convert LangChain messages to Zep message format
      const zepMessages = messages.map(msg => this.convertToZepMessage(msg));
      
      // Add messages to Zep memory
      await this.client.memory.add(this.sessionId, {
        messages: zepMessages,
      });
    } catch (error) {
      console.error("Failed to add messages to Zep memory:", error);
      throw error;
    }
  }

  /**
   * Get messages from memory
   * @param limit - Maximum number of messages to retrieve
   */
  async getMessages(limit: number = 10): Promise<BaseMessage[]> {
    if (!this.initialized) {
      throw new Error("Memory not initialized");
    }

    try {
      const response = await this.client.memory.getSessionMessages(this.sessionId, {
        limit,
      });

      // Convert Zep messages to LangChain messages
      return (response.messages || []).map(msg => this.convertToLangChainMessage(msg));
    } catch (error) {
      console.error("Failed to get messages from Zep memory:", error);
      throw error;
    }
  }

  /**
   * Get memory with context for the current session
   * This retrieves messages along with any context
   */
  async getMemoryWithContext(): Promise<{ messages: BaseMessage[], context?: string }> {
    if (!this.initialized) {
        throw new Error("Memory not initialized");
    }

    try {
      const memory = await this.client.memory.get(this.sessionId);
      
      // Convert messages to LangChain format
      const messages = (memory.messages || []).map(msg => this.convertToLangChainMessage(msg));
      
      return {
        messages,
        context: memory.context,
      };
    } catch (error) {
      console.error("Failed to get memory with context:", error);
      throw error;
    }
  }

  /**
   * Get the session ID
   */
  getSessionId(): string {
    return this.sessionId;
  }

  /**
   * Get the user ID
   */
  getUserId(): string | undefined {
    return this.userId;
  }

  /**
   * Convert a LangChain message to a Zep message
   * @param message - LangChain message to convert
   */
  private convertToZepMessage(message: BaseMessage) {
    let roleType: RoleType;
    let role = "";

    if (message instanceof AIMessage) {
      roleType = "assistant" as RoleType;
    } else if (message instanceof HumanMessage) {
      roleType = "user" as RoleType;
    } else if (message instanceof SystemMessage) {
      roleType = "system" as RoleType;
    } else {
      // Handle other message types (FunctionMessage, ToolMessage, etc.)
      roleType = "function" as RoleType;
    }

    return {
      content: message.content as string,
      roleType,
      role,
    };
  }

  /**
   * Convert a Zep message to a LangChain message
   * @param message - Zep message to convert
   */
  private convertToLangChainMessage(message: any): BaseMessage {
    const { content, roleType } = message;

    if (roleType === "assistant") {
      return new AIMessage(content);
    } else if (roleType === "user") {
      return new HumanMessage(content);
    } else if (roleType === "system") {
      return new SystemMessage(content);
    } else {
      // Default to HumanMessage for other types
      return new HumanMessage(content);
    }
  }
} 