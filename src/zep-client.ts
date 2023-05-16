import axios, { AxiosResponse, AxiosError } from "axios";
import { Memory, Message, SearchPayload, SearchResult } from "./models";
import { UnexpectedResponseError, NotFoundError } from "./exceptions";

const API_BASEURL = "/api/v1";
const axiosInstance = axios.create();

/**
 * ZepClient is a Typescript class for interacting with the Zep.
 */
export default class ZepClient {
   baseURL: string;

   /**
    * Constructs a new ZepClient instance.
    * @param {string} baseURL - The base URL of the Zep API.
    */
   constructor(baseURL: string) {
      this.baseURL = baseURL;
   }

   /**
    * Retrieves memory for a specific session.
    * @param {string} sessionID - The ID of the session to retrieve memory for.
    * @param {number} [lastn] - Optional. The number of most recent memories to retrieve.
    * @returns {Promise<Array<Memory>>} - A promise that resolves to an array of memories.
    */
   async getMemoryAsync(
      sessionID: string,
      lastn?: number
   ): Promise<Array<Memory>> {
      const url = `${this.baseURL}${API_BASEURL}/sessions/${sessionID}/memory`;
      const params = lastn !== undefined ? { lastn } : {};

      let memory: Memory | undefined;

      try {
         const response: AxiosResponse = await axiosInstance.get(url, {
            params,
         });
         const responseData = response.data;

         switch (response.status) {
            case 200:
               // Handle success case
               if (responseData.messages) {
                  memory = new Memory({
                     messages: responseData.messages.map(
                        (message: any) => new Message(message)
                     ),
                     summary: responseData.summary,
                  });
                  return [memory];
               }
               return []; // Session found, but no messages found in the session

            case 404:
               // Handle Session not found case
               throw new NotFoundError(
                  `Session with ID ${sessionID} not found`
               );

            // Add more cases as needed
            default:
               throw new UnexpectedResponseError(
                  `Unexpected Status Code @getMemoryAsync: ${response.status}`
               );
         } // end switch
      } catch (error) {
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
   } // end getMemoryAsync

   /**
    * Adds a new memory to a specific session.
    * @param {string} sessionID - The ID of the session to add the memory to.
    * @param {Memory} memory - The memory object to add to the session.
    * @returns {Promise<Memory>} A promise that resolves to the added memory.
    */
   async addMemoryAsync(sessionID: string, memory: Memory): Promise<string> {
      const url = `${this.baseURL}${API_BASEURL}/sessions/${sessionID}/memory`;

      try {
         const response: AxiosResponse = await axiosInstance.post(
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
   async deleteMemoryAsync(sessionID: string): Promise<string> {
      const url = `${this.baseURL}${API_BASEURL}/sessions/${sessionID}/memory`;

      try {
         const response: AxiosResponse = await axiosInstance.delete(url);
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
         if (error instanceof AxiosError && error.response) {
            throw new UnexpectedResponseError(
               `deleteMemoryAsync got an Unexpected status code: ${error.response.status}`
            );
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
   async searchMemoryAsync(
      sessionID: string,
      searchPayload: SearchPayload,
      limit?: number
   ): Promise<Array<SearchResult>> {
      const url = `${this.baseURL}${API_BASEURL}/sessions/${sessionID}/search`;
      const params = limit !== undefined ? { limit } : {};

      try {
         const response: AxiosResponse = await axiosInstance.post(
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
         if (error instanceof AxiosError && error.response) {
            throw new UnexpectedResponseError(
               `searchMemoryAsync got an Unexpected status code: ${error.response.status}`
            );
         }
         throw error;
      }
   }
}
