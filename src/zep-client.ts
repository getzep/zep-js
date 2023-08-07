import {
   Memory,
   MemorySearchPayload,
   MemorySearchResult,
   Session,
} from "./memory_models";
import DocumentManager from "./document_manager";

import {
   API_BASEURL,
   isVersionGreaterOrEqual,
   MIN_SERVER_WARNING_MESSAGE,
   SERVER_ERROR_MESSAGE,
   warnDeprecation,
} from "./utils";
import MemoryManager from "./memory_manager";

/**
 * ZepClient is a Typescript class for interacting with the Zep.
 */
export default class ZepClient {
   private static constructing: boolean = false;

   baseURL: string;

   headers: any;

   memory: MemoryManager;

   document: DocumentManager;

   /**
    * Constructs a new ZepClient instance.
    * @param {string} baseURL - The base URL of the Zep API.
    * @param {string} [apiKey] - Optional. The API key to use for authentication.
    */
   constructor(baseURL: string, apiKey?: string) {
      if (!ZepClient.constructing) {
         warnDeprecation(
            "Please use ZepClient.init(). Calling the ZepClient constructor directly"
         );
      }
      this.baseURL = baseURL;
      this.headers = apiKey
         ? {
              Authorization: `Bearer ${apiKey}`,
           }
         : {};

      this.memory = new MemoryManager(this);
      this.document = new DocumentManager(this);
   }

   /**
    * Asynchronously initializes a new instance of the ZepClient class.
    *
    * @param {string} baseURL - The base URL of the Zep API.
    * @param {string} [apiKey] - Optional. The API key to use for authentication.
    * @returns {Promise<ZepClient>} A promise that resolves to a new ZepClient instance.
    * @throws {Error} Throws an error if the server is not running.
    */
   static async init(baseURL: string, apiKey?: string): Promise<ZepClient> {
      ZepClient.constructing = true;
      const client = new ZepClient(baseURL, apiKey);
      ZepClient.constructing = false;

      const isRunning = await client.checkServer();
      if (!isRunning) {
         throw new Error(SERVER_ERROR_MESSAGE);
      }
      return client;
   }

   /**
    * Constructs the full URL for an API endpoint.
    * @param {string} endpoint - The endpoint of the API.
    * @returns {string} The full URL.
    */
   getFullUrl(endpoint: string): string {
      return `${this.baseURL}${API_BASEURL}${endpoint}`;
   }

   /**
    * Retrieves a session with the specified ID.
    *
    * @param {string} sessionId - The ID of the session to retrieve.
    * @returns {Promise<Session>} A promise that resolves to the Session object.
    * @throws {Error} Will throw an error if the sessionId is not provided.
    * @throws {Error} Will throw an error if the fetch request fails.
    */
   async getSession(sessionId: string): Promise<Session> {
      warnDeprecation("Please use ZepClient.memory.getSession(). getSession()");

      return this.memory.getSession(sessionId);
   }

   /**
    * Adds or updates a session.
    *
    * @param {Session} session - The Session object to add or update.
    * @returns {Promise<string>} A promise that resolves to the response text from the server.
    * @throws {Error} Will throw an error if the session is not provided.
    * @throws {Error} Will throw an error if the session.session_id is not provided.
    * @throws {Error} Will throw an error if the fetch request fails.
    */
   async addSession(session: Session): Promise<string> {
      warnDeprecation("Please use ZepClient.memory.addSession(). addSession()");

      return this.memory.addSession(session);
   }

   /**
    * Retrieves memory for a specific session.
    * @param {string} sessionID - The ID of the session to retrieve memory for.
    * @param {number} [lastn] - Optional. The number of most recent memories to retrieve.
    * @returns {Promise<Array<Memory>>} - A promise that returns a Memory object.
    */
   async getMemory(sessionID: string, lastn?: number): Promise<Memory | null> {
      warnDeprecation("Please use ZepClient.memory.getMemory(). getMemory()");
      return this.memory.getMemory(sessionID, lastn);
   }

   /**
    * Adds a new memory to a specific session.
    * @param {string} sessionID - The ID of the session to add the memory to.
    * @param {Memory} memory - The memory object to add to the session.
    * @returns {Promise<Memory>} A promise that resolves to the added memory.
    */
   async addMemory(sessionID: string, memory: Memory): Promise<string> {
      warnDeprecation("Please use ZepClient.memory.addMemory(). addMemory()");
      return this.memory.addMemory(sessionID, memory);
   }

   /**
    * Deletes the memory of a specific session.
    * @param {string} sessionID - The ID of the session for which the memory
    *                             should be deleted.
    * @returns {Promise<string>} - Promise message indicating the memory has
    *                              been deleted.
    */
   async deleteMemory(sessionID: string): Promise<string> {
      warnDeprecation(
         "Please use ZepClient.memory.deleteMemory(). deleteMemory()"
      );
      return this.memory.deleteMemory(sessionID);
   }

   /**
    * Searches memory of a specific session based on search payload provided.
    * @param {string} sessionID - ID of the session for which the memory should be searched.
    * @param {MemorySearchPayload} searchPayload - The search payload containing
    * the search criteria.
    * @param {number} [limit] - Optional limit on the number of search results returned.
    * @returns {Promise<Array<MemorySearchResult>>} - Promise that resolves to array of search
    * results.
    */
   async searchMemory(
      sessionID: string,
      searchPayload: MemorySearchPayload,
      limit?: number
   ): Promise<Array<MemorySearchResult>> {
      warnDeprecation(
         "Please use ZepClient.memory.searchMemory(). searchMemory()"
      );
      return this.memory.searchMemory(sessionID, searchPayload, limit);
   }

   private async checkServer(): Promise<boolean> {
      const healthCheck = "/healthz";
      const healthCheckURL = `${this.baseURL}${healthCheck}`;

      const response = await fetch(healthCheckURL, { headers: this.headers });

      const zepServerVersion = response.headers.get("X-Zep-Version");

      if (!isVersionGreaterOrEqual(zepServerVersion)) {
         console.warn(MIN_SERVER_WARNING_MESSAGE);
      }

      return response.status === 200;
   }
}
