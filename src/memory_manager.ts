import {
   Memory,
   MemorySearchPayload,
   MemorySearchResult,
   Message,
   Session,
} from "./memory_models";
import { IZepClient } from "./interfaces";
import { API_BASEURL, handleRequest } from "./utils";

export default class MemoryManager {
   client: IZepClient;

   constructor(client: IZepClient) {
      this.client = client;
   }

   /**
    * Constructs the full URL for an API endpoint.
    * @param {string} endpoint - The endpoint of the API.
    * @returns {string} The full URL.
    */
   getFullUrl(endpoint: string): string {
      return `${this.client.baseURL}${API_BASEURL}${endpoint}`;
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
      if (!sessionId || sessionId.trim() === "") {
         throw new Error("sessionId must be provided");
      }

      const response = await handleRequest(
         fetch(this.getFullUrl(`/sessions/${sessionId}`), {
            headers: this.client.headers,
         }),
         `No session found for session ${sessionId}`
      );

      const responseData = await response.json();

      return new Session(responseData);
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
      if (!session) {
         throw new Error("session must be provided");
      }

      if (!session.session_id || session.session_id.trim() === "") {
         throw new Error("session.session_id must be provided");
      }

      const response = await handleRequest(
         fetch(this.getFullUrl(`/sessions/${session.session_id}`), {
            method: "POST",
            headers: {
               ...this.client.headers,
               "Content-Type": "application/json",
            },
            body: JSON.stringify(session.toDict()),
         }),
         `Failed to add session ${session.session_id}`
      );

      return response.text();
   }

   /**
    * Retrieves memory for a specific session.
    * @param {string} sessionID - The ID of the session to retrieve memory for.
    * @param {number} [lastn] - Optional. The number of most recent memories to retrieve.
    * @returns {Promise<Array<Memory>>} - A promise that returns a Memory object.
    */
   async getMemory(sessionID: string, lastn?: number): Promise<Memory | null> {
      const url = this.getFullUrl(`/sessions/${sessionID}/memory`);
      const params = lastn !== undefined ? `?lastn=${lastn}` : "";

      const response: Response = await handleRequest(
         fetch(`${url}${params}`, {
            headers: this.client.headers,
         })
      );

      const data = await response.json();

      if (data.messages) {
         return new Memory({
            messages: data.messages.map((message: any) => {
               return new Message(message);
            }),
            summary: data.summary,
         });
      }
      return null;
   }

   /**
    * Adds a new memory to a specific session.
    * @param {string} sessionID - The ID of the session to add the memory to.
    * @param {Memory} memory - The memory object to add to the session.
    * @returns {Promise<Memory>} A promise that resolves to the added memory.
    */
   async addMemory(sessionID: string, memory: Memory): Promise<string> {
      const url = this.getFullUrl(`/sessions/${sessionID}/memory`);

      const response: Response = await handleRequest(
         fetch(url, {
            method: "POST",
            headers: {
               ...this.client.headers,
               "Content-Type": "application/json",
            },
            body: JSON.stringify(memory.toDict()),
         }),
         `Memory not found for session ${sessionID}.`
      );

      return response.text();
   }

   /**
    * Deletes the memory of a specific session.
    * @param {string} sessionID - The ID of the session for which the memory
    *                             should be deleted.
    * @returns {Promise<string>} - Promise message indicating the memory has
    *                              been deleted.
    */
   async deleteMemory(sessionID: string): Promise<string> {
      const url = this.getFullUrl(`/sessions/${sessionID}/memory`);

      const response: Response = await handleRequest(
         fetch(url, {
            method: "DELETE",
            headers: this.client.headers,
         }),
         `No session found for sessionID: ${sessionID}`
      );

      return response.text();
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
      const url = this.getFullUrl(`/sessions/${sessionID}/search`);
      const params = limit !== undefined ? `?limit=${limit}` : "";

      const response: Response = await handleRequest(
         fetch(`${url}${params}`, {
            method: "POST",
            headers: {
               ...this.client.headers,
               "Content-Type": "application/json",
            },
            body: JSON.stringify(searchPayload),
         })
      );

      const data = await response.json();

      return data.map(
         (searchResult: any) => new MemorySearchResult(searchResult)
      );
   }
}
