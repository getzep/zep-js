/**
 * Interface for Session data.
 */
export interface SessionData {
   uuid?: string;
   created_at?: string;
   updated_at?: string;
   deleted_at?: string;
   session_id: string;
   metadata: Record<string, any>;
}

/**
 * Represents a session object with a unique identifier, metadata, and other attributes.
 */
export class Session {
   uuid?: string;

   created_at?: string;

   updated_at?: string;

   deleted_at?: string;

   session_id: string;

   metadata: Record<string, any>;

   /**
    * Constructs a new Session instance.
    * @param {SessionData} data - The data to create a Session instance.
    */
   constructor(data: SessionData) {
      this.uuid = data.uuid;
      this.created_at = data.created_at;
      this.updated_at = data.updated_at;
      this.deleted_at = data.deleted_at;
      this.session_id = data.session_id;
      this.metadata = data.metadata;
   }

   /**
    * Converts the Session instance to a dictionary.
    * @returns {SessionData} A dictionary representation of Session instance.
    */
   toDict(): SessionData {
      return {
         uuid: this.uuid,
         created_at: this.created_at,
         updated_at: this.updated_at,
         deleted_at: this.deleted_at,
         session_id: this.session_id,
         metadata: this.metadata,
      };
   }
}

/**
 * MessageData interface for providing input to create a Message instance.
 */
export interface MessageData {
   uuid?: string;
   created_at?: string;
   role: string;
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

   content: string;

   token_count?: number;

   metadata?: Record<string, any>;

   /**
    * Constructs a new Message instance.
    * @param {MessageData} data - The data to create a message instance.
    */
   constructor(data: MessageData) {
      this.uuid = data.uuid;
      this.created_at = data.created_at;
      this.role = data.role;
      this.content = data.content;
      this.token_count = data.token_count;
      this.metadata = data.metadata;
   }

   /**
    * Converts the Message instance to a dictionary.
    * @returns {MessageData} A dictionary representation of Message instance.
    */
   toDict(): MessageData {
      return {
         uuid: this.uuid,
         created_at: this.created_at,
         role: this.role,
         content: this.content,
         token_count: this.token_count,
         metadata: this.metadata,
      };
   }
}

/**
 * SummaryData interface for providing input to create a Summary instance.
 */
export interface SummaryData {
   uuid: string;

   created_at: string;

   content: string;

   recent_message_uuid: string;

   token_count: number;
}

/**
 * Represents a summary of a memory.
 */
export class Summary {
   uuid: string;

   created_at: string;

   content: string;

   recent_message_uuid: string;

   token_count: number;

   /**
    * Constructs a new Summary instance.
    * @param {SummaryData} data - The data to create a summary instance.
    */
   constructor(data: SummaryData) {
      this.uuid = data.uuid;
      this.created_at = data.created_at;
      this.content = data.content;
      this.recent_message_uuid = data.recent_message_uuid;
      this.token_count = data.token_count;
   }

   /**
    * Converts the Summary instance to a dictionary.
    * @returns {SummaryData} A dictionary representation of Summary instance.
    */
   toDict(): SummaryData {
      return {
         uuid: this.uuid,
         created_at: this.created_at,
         content: this.content,
         recent_message_uuid: this.recent_message_uuid,
         token_count: this.token_count,
      };
   }
}

/**
 * MemoryData interface for providing input to create a Memory instance.
 */
export interface MemoryData {
   messages?: MessageData[];

   metadata?: Record<string, any>;

   summary?: SummaryData;

   uuid?: string;

   created_at?: string;

   token_count?: number;
}

/**
 * Represents a memory containing messages, metadata, and a summary.
 */
export class Memory {
   messages: Message[];

   metadata: Record<string, any>;

   summary?: Summary;

   uuid?: string;

   created_at?: string;

   token_count?: number;

   /**
    * Constructs a new Memory instance.
    * @param {MemoryData} data - The data to create a memory instance.
    */
   constructor(data: MemoryData = {}) {
      this.messages = (data.messages || []).map(
         (messageData) => new Message(messageData)
      );
      this.metadata = data.metadata || {};
      this.summary = data.summary ? new Summary(data.summary) : undefined;
      this.uuid = data.uuid;
      this.created_at = data.created_at;
      this.token_count = data.token_count;
   }

   /**
    * Converts the Memory instance to a dictionary.
    * @returns {MemoryData} A dictionary representation of the Memory instance.
    */
   toDict(): MemoryData {
      return {
         messages: this.messages.map((message) => message.toDict()),
         metadata: this.metadata,
         summary: this.summary?.toDict(),
         uuid: this.uuid,
         created_at: this.created_at,
         token_count: this.token_count,
      };
   }
}

/**
 * SearchPayloadData interface for providing input to create SearchPayload.
 */
export interface MemorySearchPayloadData {
   metadata: Record<string, any>;
   text: string;
}

/**
 * Represents the payload for a memory search.
 */
export class MemorySearchPayload {
   metadata: Record<string, any>;

   text: string;

   /**
    * Constructs a new SearchPayload instance.
    * @param {MemorySearchPayloadData} data - The data to create a Search Payload.
    */
   constructor(data: MemorySearchPayloadData) {
      this.metadata = data.metadata;
      this.text = data.text;
   }
}

/**
 * SearchResultData interface for providing input to create a SearchResult.
 */
export interface MemorySearchResultData {
   message?: MessageData;

   metadata?: Record<string, any>;

   summary?: string;

   dist?: number;
}

/**
 * Represents a search result from a memory search.
 */
export class MemorySearchResult {
   message?: Message;

   metadata: Record<string, any>;

   summary?: string;

   dist?: number;

   /**
    * Constructs a new SearchResult instance.
    * @param {MemorySearchResultData} data - The data to create a search result instance.
    */
   constructor(data: MemorySearchResultData = {}) {
      this.message = data.message ? new Message(data.message) : undefined;
      this.metadata = data.metadata || {};
      this.summary = data.summary;
      this.dist = data.dist;
   }
}

/**
 * Represents an error received from the API.
 */
export class APIError {
   code: number;

   message: string;

   /**
    * Constructs a new APIError instance.
    * @param {number} code - The error code.
    * @param {string} message - The error message.
    */
   constructor(code: number, message: string) {
      this.code = code;
      this.message = message;
   }
}
