/**
 * MessageData interface for providing input to create a Message instance.
 */
export interface MessageData {
   uuid?: string;
   created_at?: string;
   role: string;
   content: string;
   token_count?: number;
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
export interface SearchPayloadData {
   meta: Record<string, any>;
   text: string;
}

/**
 * Represents the payload for a memory search.
 */
export class SearchPayload {
   meta: Record<string, any>;

   text: string;

   /**
    * Constructs a new SearchPayload instance.
    * @param {SearchPayloadData} data - The data to create a Search Payload.
    */
   constructor(data: SearchPayloadData) {
      this.meta = data.meta;
      this.text = data.text;
   }
}

/**
 * SearchResultData interface for providing input to create a SearchResult.
 */
export interface SearchResultData {
   message?: MessageData;

   meta?: Record<string, any>;

   score?: number;

   summary?: string;

   dist?: number;
}

/**
 * Represents a search result from a memory search.
 */
export class SearchResult {
   message?: Message;

   meta: Record<string, any>;

   score?: number;

   summary?: string;

   dist?: number;

   /**
    * Constructs a new SearchResult instance.
    * @param {SearchResultData} data - The data to create a search result instance.
    */
   constructor(data: SearchResultData = {}) {
      this.message = data.message ? new Message(data.message) : undefined;
      this.meta = data.meta || {};
      this.score = data.score;
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
