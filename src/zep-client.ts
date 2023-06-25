import axios, { AxiosError, AxiosResponse } from "axios";
import {
   Memory,
   MemorySearchPayload,
   MemorySearchResult,
   Message,
} from "./models";
import {
   AuthenticationError,
   NotFoundError,
   UnexpectedResponseError,
} from "./exceptions";

const API_BASEURL = "/api/v1";

/**
 * Handles an AxiosResponse promise by returning the response if it is
 * successful, or throwing an error if the response is unsuccessful.
 * @param {Promise<AxiosResponse>} requestPromise - The promise to handle.
 * @param {string} [notFoundMessage] - Optional. The message to use if the
 *                                    response is a 404.
 */
async function handleRequest(
   requestPromise: Promise<AxiosResponse>,
   notFoundMessage: string | null = null
) {
   try {
      return await requestPromise;
   } catch (error) {
      // Connection error
      if (error instanceof AxiosError && error.code === "ECONNREFUSED") {
         throw new UnexpectedResponseError(
            `Server is down or connection was refused.`
         );
      }

      if (error instanceof AxiosError && error.response) {
         // Handle AxiosError case
         switch (error.response.status) {
            case 404:
               throw new NotFoundError(
                  notFoundMessage || `Resource not found.`
               );
            case 401:
               throw new AuthenticationError("Authentication failed.");
            default:
               throw new UnexpectedResponseError(
                  `Got an unexpected status code: ${error.response.status}`
               );
         }
      }

      throw error;
   }
}

/**
 * ZepClient is a Typescript class for interacting with the Zep.
 */
// eslint-disable-next-line import/prefer-default-export
export class ZepClient {
   baseURL: string;

   axiosInstance: any;

   /**
    * Constructs a new ZepClient instance.
    * @param {string} baseURL - The base URL of the Zep API.
    * @param {string} [apiKey] - Optional. The API key to use for authentication.
    */
   constructor(baseURL: string, apiKey?: string) {
      this.baseURL = baseURL;
      const headers = apiKey
         ? {
              Authorization: `Bearer ${apiKey}`,
           }
         : {};
      this.axiosInstance = axios.create({ headers });
   }

   /**
    * Initializes the ZepClient instance by checking if the server is running.
    * @returns {Promise<boolean>} - A promise that returns true if the server
    *                              is running, false otherwise.
    * @throws {Error} - Throws an error if the server is not running.
    */
   async init(): Promise<boolean> {
      try {
         const healthCheck = "/healthz";
         const healthCheckURL = `${this.baseURL}${healthCheck}`;

         const response = await this.axiosInstance.get(healthCheckURL);
         return response.status === 200;
      } catch (error) {
         if (error instanceof AxiosError && error.code === "ECONNREFUSED") {
            // The server is not accepting connections.
            return false;
         }
         throw error; // Rethrow other errors.
      }
   }

   /**
    * Retrieves memory for a specific session.
    * @param {string} sessionID - The ID of the session to retrieve memory for.
    * @param {number} [lastn] - Optional. The number of most recent memories to retrieve.
    * @returns {Promise<Array<Memory>>} - A promise that returns a Memory object.
    */
   async getMemory(sessionID: string, lastn?: number): Promise<Memory | null> {
      const url = `${this.baseURL}${API_BASEURL}/sessions/${sessionID}/memory`;
      const params = lastn !== undefined ? { lastn } : {};

      const response: AxiosResponse = await handleRequest(
         this.axiosInstance.get(url, {
            params,
         })
      );

      if (response.data.messages) {
         return new Memory({
            messages: response.data.messages.map((message: any) => {
               return new Message(message);
            }),
            summary: response.data.summary,
         });
      }
      return null; // Session found, but no messages found in the session
   }

   /**
    * Adds a new memory to a specific session.
    * @param {string} sessionID - The ID of the session to add the memory to.
    * @param {Memory} memory - The memory object to add to the session.
    * @returns {Promise<Memory>} A promise that resolves to the added memory.
    */
   async addMemory(sessionID: string, memory: Memory): Promise<string> {
      const url = `${this.baseURL}${API_BASEURL}/sessions/${sessionID}/memory`;

      const response: AxiosResponse = await handleRequest(
         this.axiosInstance.post(url, memory.toDict())
      );

      return response.data;
   }

   /**
    * Deletes the memory of a specific session.
    * @param {string} sessionID - The ID of the session for which the memory
    *                             should be deleted.
    * @returns {Promise<string>} - Promise message indicating the memory has
    *                              been deleted.
    */
   async deleteMemory(sessionID: string): Promise<string> {
      const url = `${this.baseURL}${API_BASEURL}/sessions/${sessionID}/memory`;

      const response: AxiosResponse = await handleRequest(
         this.axiosInstance.delete(url),
         `No session found for sessionID: ${sessionID}`
      );

      return response.data;
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
      const url = `${this.baseURL}${API_BASEURL}/sessions/${sessionID}/search`;
      const params = limit !== undefined ? { limit } : {};

      const response: AxiosResponse = await handleRequest(
         this.axiosInstance.post(url, searchPayload, {
            params,
         })
      );

      return response.data.map(
         (searchResult: any) => new MemorySearchResult(searchResult)
      );
   }
}
