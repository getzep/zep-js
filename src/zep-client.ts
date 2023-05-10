import { AxiosResponse, AxiosError } from "axios";
import axios from "axios";
import { Memory, Message } from "./models";

import { SearchPayload, SearchResult } from "./models";
import { ZepClientError, UnexpectedResponseError, NotFoundError } from "./exceptions";

const API_BASEURL = "/api/v1";
const axiosInstance = axios.create();

/**
 * ZepClient is a Typescript class for interacting with the Zep.
 */
export class ZepClient {
   base_url: string;

   /**
    * Constructs a new ZepClient instance.
    * @param {string} base_url - The base URL of the Zep API.
    */
   constructor(base_url: string) {
      this.base_url = base_url;
   }

   /**
    * Retrieves memory for a specific session.
    * @param {string} session_id - The ID of the session to retrieve memory for.
    * @param {number} [lastn] - Optional. The number of most recent memories to retrieve.
    * @returns {Promise<Array<Memory>>} A promise that resolves to an array of memories.
    */
   async getMemoryAsync(
      session_id: string,
      lastn?: number
   ): Promise<Array<Memory>> {
      const url = `${this.base_url}${API_BASEURL}/sessions/${session_id}/memory`;
      const params = lastn !== undefined ? { lastn } : {};

      try {
         const response: AxiosResponse = await axios.get(url, { params });
         const response_data = response.data;


         if (response.status !== 200) {
            throw new UnexpectedResponseError(
               `Unexpected Status Code @getMemoryAsync: ${response.status}`
            );
         }

         if (response_data.messages) {
            const memory = new Memory({
               messages: response_data.messages.map(
                  (message: any) => new Message(message)
               ),
               summary: response_data.summary,
            });

            return [memory];
         } else if (response_data.messages === null) {
            return [];
         } else {
            throw new UnexpectedResponseError(
               "Unexpected response format from the API"
            );
         }
      } catch (error) {
         if (error instanceof AxiosError && error.response) {
            if (error.response.status === 404 || error.response.status === 500) {
               throw new NotFoundError(
                  `Session with ID ${session_id} not found`
               );
            }
            else throw new UnexpectedResponseError(
               `Unexpected Error: ${error.response.status}`
            );
         }
         throw error;
      }
   }

   /**
    * Adds a new memory to a specific session.
    * @param {string} session_id - The ID of the session to add the memory to.
    * @param {Memory} memory - The memory object to add to the session.
    * @returns {Promise<Memory>} A promise that resolves to the added memory.
    */
   async addMemoryAsync(session_id: string, memory: Memory): Promise<string> {
      const url = `${this.base_url}${API_BASEURL}/sessions/${session_id}/memory`;

      try {
         const response: AxiosResponse = await axios.post(url, memory.toDict());
         if (response.status !== 200) {
            throw new UnexpectedResponseError(
               `Unexpected status code: ${response.status}`
            );
         }
         return response.data;
      } catch (error) {
         if (error instanceof AxiosError && error.response) {
            throw new UnexpectedResponseError(
               `Unexpected status code: ${error.response.status}`
            );
         }
         throw error;
      }
   }

   /**
    * Deletes the memory of a specific session.
    * @param {string} session_id - The ID of the session for which the memory should be deleted.
    * @returns {Promise<string>} A promise that resolves to a message indicating the memory has been deleted.
    */
   async deleteMemoryAsync(session_id: string): Promise<string> {
      const url = `${this.base_url}${API_BASEURL}/sessions/${session_id}/memory`;

      try {
         const response: AxiosResponse = await axios.delete(url);
         if (response.status == 404) {
            throw new NotFoundError("No session found for session_id: " + session_id);
         }

         if (response.status !== 200) {
            throw new UnexpectedResponseError(
               `Unexpected status code: ${response.status}`
            );
         }
         return response.data;
      } catch (error) {
         if (error instanceof AxiosError && error.response) {
            throw new UnexpectedResponseError(
               `Unexpected status code: ${error.response.status}`
            );
         }
         throw error;
      }
   }

   /**
    * Searches the memory of a specific session based on the search payload provided.
    * @param {string} session_id - The ID of the session for which the memory should be searched.
    * @param {SearchPayload} search_payload - The search payload containing the search criteria.
    * @param {number} [limit] - Optional limit on the number of search results returned.
    * @returns {Promise<Array<SearchResult>>} A promise that resolves to an array of search results.
    */
   async searchMemoryAsync(
      session_id: string,
      search_payload: SearchPayload,
      limit?: number
   ): Promise<Array<SearchResult>> {
      const url = `${this.base_url}${API_BASEURL}/sessions/${session_id}/search`;
      const params = limit !== undefined ? { limit } : {};

      try {
         const response: AxiosResponse = await axios.post(url, search_payload, {
            params,
         });
         if (response.status !== 200) {
            throw new UnexpectedResponseError(
               `Unexpected status code: ${response.status}`
            );
         }
         return response.data.map(
            (searchResult: any) => new SearchResult(searchResult)
         );
      } catch (error) {
         if (error instanceof AxiosError && error.response) {
            throw new UnexpectedResponseError(
               `Unexpected status code: ${error.response.status}`
            );
         }
         throw error;
      }
   }
}
