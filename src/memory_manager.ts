import {
   Memory,
   MemorySearchPayload,
   MemorySearchResult,
   Question,
   Session,
} from "./memory_models";

import { Message } from "./message_models";

import { IZepClient, MemoryType } from "./interfaces";
import { handleRequest } from "./utils";

export default class MemoryManager {
   client: IZepClient;

   constructor(client: IZepClient) {
      this.client = client;
   }

   /**
    * Retrieves a session with the specified ID.
    *
    * @param {string} sessionId - The ID of the session to retrieve.
    * @returns {Promise<Session>} A promise that resolves to the Session object.
    * @throws {Error} Will throw an error if the sessionId is not provided.
    * @throws {APIError} Will throw an error if the fetch request fails.
    * @throws {NotFoundError} Will throw an error if the session is not found.
    */
   async getSession(sessionId: string): Promise<Session> {
      if (!sessionId || sessionId.trim() === "") {
         throw new Error("sessionId must be provided");
      }

      const response = await handleRequest(
         fetch(this.client.getFullUrl(`/sessions/${sessionId}`), {
            headers: this.client.headers,
         }),
         `No session found for session ${sessionId}`,
      );

      const responseData = await response.json();

      return new Session(responseData);
   }

   async synthesizeQuestion(
      sessionId: string,
      lastN: number = 3,
   ): Promise<string> {
      if (sessionId === null || sessionId.trim() === "") {
         throw new Error("sessionId must be provided");
      }

      const response = await handleRequest(
         fetch(
            `${this.client.getFullUrl(
               `/sessions/${sessionId}/synthesize_question`,
            )}?lastNMessages=${lastN}`,
            {
               headers: this.client.headers,
            },
         ),
         `No session found for session ${sessionId}`,
      );
      const responseData = (await response.json()) as Question;
      return responseData.question;
   }

   /**
    * Adds a session.
    *
    * @param {Session} session - The session to add.
    * @returns {Promise<Session>} The added session.
    * @throws {Error} Will throw an error if the session is not provided.
    * @throws {Error} Will throw an error if the session.session_id is not provided.
    * @throws {APIError} Will throw an error if the fetch request fails.
    */
   async addSession(session: Session): Promise<Session> {
      if (!session) {
         throw new Error("session must be provided");
      }

      if (!session.session_id || session.session_id.trim() === "") {
         throw new Error("session.session_id must be provided");
      }

      const response = await handleRequest(
         fetch(this.client.getFullUrl(`/sessions`), {
            method: "POST",
            headers: {
               ...this.client.headers,
               "Content-Type": "application/json",
            },
            body: JSON.stringify(session.toDict()),
         }),
         `Failed to add session ${session.session_id}`,
      );

      const responseData = await response.json();

      return new Session(responseData);
   }

   /**
    * Updates the specified session.
    *
    * @param {Session} session - The session data to update.
    * @returns {Promise<Session>} The updated session.
    * @throws {Error} Will throw an error if the session is not provided.
    * @throws {Error} Will throw an error if the session.session_id is not provided.
    * @throws {APIError} Will throw an error if the fetch request fails.
    * @throws {NotFoundError} Will throw an error if the session is not found.
    */
   async updateSession(session: Session): Promise<Session> {
      if (!session) {
         throw new Error("session must be provided");
      }

      if (!session.session_id || session.session_id.trim() === "") {
         throw new Error("session.session_id must be provided");
      }

      const response = await handleRequest(
         fetch(this.client.getFullUrl(`/sessions/${session.session_id}`), {
            method: "PATCH",
            headers: {
               ...this.client.headers,
               "Content-Type": "application/json",
            },
            body: JSON.stringify(session.toDict()),
         }),
         `Failed to update session ${session.session_id}`,
      );

      const responseData = await response.json();

      return new Session(responseData);
   }

   /**
    * Asynchronously retrieve a list of paginated sessions.
    *
    * @param {number} [limit] - Limit the number of results returned.
    * @param {number} [cursor] - Cursor for pagination.
    * @returns {Promise<Array<Session>>} A list of all sessions paginated.
    * @throws {APIError} If the API response format is unexpected.
    */
   async listSessions(
      limit?: number,
      cursor?: number,
   ): Promise<Array<Session>> {
      const params = new URLSearchParams();
      if (limit !== undefined) params.append("limit", limit.toString());
      if (cursor !== undefined) params.append("cursor", cursor.toString());

      const response = await handleRequest(
         fetch(`${this.client.getFullUrl("/sessions")}?${params.toString()}`, {
            headers: this.client.headers,
         }),
         `Failed to get sessions`,
      );

      const responseData = await response.json();

      return responseData.map((session: any) => new Session(session));
   }

   /**
    * Retrieve all sessions, handling pagination automatically.
    * Yields a generator of lists of sessions.
    *
    * @param {number} [chunkSize=100] - The number of sessions to retrieve at a time.
    * @returns {AsyncGenerator<Array<Session>, void, unknown>}
    *    The next chunk of sessions from the server.
    * @throws {APIError} If the API response format is unexpected.
    * @throws {ConnectionError} If the connection to the server fails.
    */
   async *listSessionsChunked(
      chunkSize: number = 100,
   ): AsyncGenerator<Array<Session>, void, unknown> {
      let cursor: number | undefined;

      while (true) {
         // eslint-disable-next-line no-await-in-loop
         const sessions = await this.listSessions(chunkSize, cursor);

         if (sessions.length === 0) {
            // We've reached the last page
            break;
         }

         yield sessions;

         if (cursor === undefined) {
            cursor = 0;
         }
         cursor += chunkSize;
      }
   }

   /**
    * Retrieves memory for a specific session.
    * @param {string} sessionID - The ID of the session to retrieve memory for.
    * @param {MemoryType} [type] - Optional. The type of memory to retrieve.
    * @param {number} [lastn] - Optional. The number of most recent memories to retrieve.
    * @returns {Promise<Array<Memory>>} - A promise that returns a Memory object.
    * @throws {APIError} - If the request fails.
    * @throws {NotFoundError} - If the session is not found.
    */
   async getMemory(
      sessionID: string,
      type?: MemoryType,
      lastn?: number,
   ): Promise<Memory | null> {
      const url = this.client.getFullUrl(`/sessions/${sessionID}/memory`);
      let params = lastn !== undefined ? `?lastn=${lastn}` : "";
      if (type) {
         params += lastn !== undefined ? `&type=${type}` : `?type=${type}`;
      }
      const response: Response = await handleRequest(
         fetch(`${url}${params}`, {
            headers: this.client.headers,
         }),
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
    * @throws {APIError} If the request fails.
    */
   async addMemory(sessionID: string, memory: Memory): Promise<string> {
      const url = this.client.getFullUrl(`/sessions/${sessionID}/memory`);

      const response: Response = await handleRequest(
         fetch(url, {
            method: "POST",
            headers: {
               ...this.client.headers,
               "Content-Type": "application/json",
            },
            body: JSON.stringify(memory.toDict()),
         }),
         `Memory not found for session ${sessionID}.`,
      );

      return response.text();
   }

   /**
    * Deletes the memory of a specific session.
    * @param {string} sessionID - The ID of the session for which the memory
    *                             should be deleted.
    * @returns {Promise<string>} - Promise message indicating the memory has
    *                              been deleted.
    * @throws {APIError} - If the request fails.
    * @throws {NotFoundError} - If the session is not found.
    */
   async deleteMemory(sessionID: string): Promise<string> {
      const url = this.client.getFullUrl(`/sessions/${sessionID}/memory`);

      const response: Response = await handleRequest(
         fetch(url, {
            method: "DELETE",
            headers: this.client.headers,
         }),
         `No session found for sessionID: ${sessionID}`,
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
    * @throws {APIError} - If the request fails.
    */
   async searchMemory(
      sessionID: string,
      searchPayload: MemorySearchPayload,
      limit?: number,
   ): Promise<Array<MemorySearchResult>> {
      const url = this.client.getFullUrl(`/sessions/${sessionID}/search`);
      // eslint-disable-next-line no-console
      console.log("url", url);
      const params = limit !== undefined ? `?limit=${limit}&` : "";
      // eslint-disable-next-line no-console
      console.log("request full url", `${url}${params}`);
      const response: Response = await handleRequest(
         fetch(`${url}${params}`, {
            method: "POST",
            headers: {
               ...this.client.headers,
               "Content-Type": "application/json",
            },
            body: JSON.stringify(searchPayload),
         }),
      );

      const data = await response.json();

      return data.map(
         (searchResult: any) => new MemorySearchResult(searchResult),
      );
   }
}
