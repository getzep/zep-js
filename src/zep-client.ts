import axios, { AxiosResponse, AxiosError } from "axios";
import { Memory, Message, SearchPayload, SearchResult } from "./models";
import { UnexpectedResponseError, NotFoundError } from "./exceptions";

const API_BASEURL = "/api/v1";

/**
 * ZepClient is a Typescript class for interacting with the Zep.
 */
// eslint-disable-next-line import/prefer-default-export
export class ZepClient {
   baseURL: string;

   /**
    * Constructs a new ZepClient instance.
    * @param {string} baseURL - The base URL of the Zep API.
    */
   axiosInstance: any;

   constructor(baseURL: string, axiosInstance?: any) {
      this.baseURL = baseURL;
      this.axiosInstance = axiosInstance || axios.create();
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

      try {
         const response: AxiosResponse = await this.axiosInstance.get(url, {
            params,
         });

         switch (response.status) {
            case 200:
               // Handle success case
               if (response.data.messages) {
                  return new Memory({
                     messages: response.data.messages.map((message: any) => {
                        return new Message(message);
                     }),
                     summary: response.data.summary,
                  });
               }
               return null; // Session found, but no messages found in the session

            case 404:
               // Handle Session not found case
               throw new NotFoundError(
                  `Session with ID ${sessionID} not found`
               );

            default:
               throw new UnexpectedResponseError(
                  `Unexpected Status Code @getMemoryAsync: ${response.status}`
               );
         }
      } catch (error) {
         // Connection error
         if (error instanceof AxiosError && error.code === "ECONNREFUSED") {
            throw new UnexpectedResponseError(
               `Server is down or connection was refused, from Zep at ${this.baseURL}`
            );
         }

         if (error instanceof AxiosError && error.response) {
            // Handle AxiosError case
            if (error.response.status === 404) {
               throw new NotFoundError(
                  `Session with ID ${sessionID} not found`
               );
            }
            throw new UnexpectedResponseError(
               `getMemoryAsync got an Unexpected status code: ${error.response.status}`
            );
         }

         throw error;
      }
   }

   /**
    * Adds a new memory to a specific session.
    * @param {string} sessionID - The ID of the session to add the memory to.
    * @param {Memory} memory - The memory object to add to the session.
    * @returns {Promise<Memory>} A promise that resolves to the added memory.
    */
   async addMemory(sessionID: string, memory: Memory): Promise<string> {
      const url = `${this.baseURL}${API_BASEURL}/sessions/${sessionID}/memory`;

      try {
         const response: AxiosResponse = await this.axiosInstance.post(
            url,
            memory.toDict()
         );
         if (response.status !== 200) {
            throw new UnexpectedResponseError(
               `addMemoryAsync got an Unexpected status code: ${response.status}`
            );
         }
         return response.data;
      } catch (error) {
         // Connection error
         if (error instanceof AxiosError && error.code === "ECONNREFUSED") {
            throw new UnexpectedResponseError(
               `Server is down or connection was refused, from Zep at ${this.baseURL}`
            );
         }

         if (error instanceof AxiosError && error.response) {
            throw new UnexpectedResponseError(
               `addMemoryAsync got an Unexpected status code: ${error.response.status}`
            );
         }
         throw error;
      }
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

      try {
         const response: AxiosResponse = await this.axiosInstance.delete(url);
         switch (response.status) {
            case 404:
               throw new NotFoundError(`No session found for sessionID: 
                     ${sessionID}`);
            case 200:
               return response.data;
            default:
               throw new UnexpectedResponseError(
                  `deleteMemoryAsync got an Unexpected status code: ${response.status}`
               );
         }
      } catch (error) {
         // Connection error
         if (error instanceof AxiosError && error.code === "ECONNREFUSED") {
            throw new UnexpectedResponseError(
               `Server is down or connection was refused, from Zep at ${this.baseURL}`
            );
         }

         if (error instanceof AxiosError && error.response) {
            // Handle AxiosError case
            if (error.response.status === 404) {
               throw new NotFoundError(
                  `Session with ID ${sessionID} not found`
               );
            } else {
               throw new UnexpectedResponseError(
                  `deleteMemoryAsync got an Unexpected status code: ${error.response.status}`
               );
            }
         }
         throw error;
      }
   }

   /**
    * Searches memory of a specific session based on search payload provided.
    * @param {string} sessionID - ID of the session for which the memory should be searched.
    * @param {SearchPayload} searchPayload - The search payload containing the search criteria.
    * @param {number} [limit] - Optional limit on the number of search results returned.
    * @returns {Promise<Array<SearchResult>>} - Promise that resolves to array of search results.
    */
   async searchMemory(
      sessionID: string,
      searchPayload: SearchPayload,
      limit?: number
   ): Promise<Array<SearchResult>> {
      const url = `${this.baseURL}${API_BASEURL}/sessions/${sessionID}/search`;
      const params = limit !== undefined ? { limit } : {};

      try {
         const response: AxiosResponse = await this.axiosInstance.post(
            url,
            searchPayload,
            {
               params,
            }
         );
         switch (response.status) {
            case 200:
               return response.data.map(
                  (searchResult: any) => new SearchResult(searchResult)
               );
            case 404:
               throw new NotFoundError(`No session found for sessionID: 
               sessionID`);
            default:
               throw new UnexpectedResponseError(
                  `searchMemoryAsync got an Unexpected status code: ${response.status}`
               );
         }
      } catch (error) {
         // Connection error
         if (error instanceof AxiosError && error.code === "ECONNREFUSED") {
            throw new UnexpectedResponseError(
               `Server is down or connection was refused, from Zep at ${this.baseURL}`
            );
         }

         if (error instanceof AxiosError && error.response) {
            // Handle AxiosError case
            if (error.response.status === 404) {
               throw new NotFoundError(
                  `Session with ID ${sessionID} not found`
               );
            } else {
               throw new UnexpectedResponseError(
                  `searchMemoryAsync got an Unexpected status code: ${error.response.status}`
               );
            }
         }
         throw error;
      }
   }
}
