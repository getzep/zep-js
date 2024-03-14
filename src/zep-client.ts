import DocumentManager from "./document_manager";

import {
   API_BASEPATH,
   API_VERSION,
   isVersionGreaterOrEqual,
   MIN_SERVER_WARNING_MESSAGE,
   SERVER_ERROR_MESSAGE,
   warnDeprecation,
   joinPaths,
} from "./utils";
import MemoryManager from "./memory_manager";
import MessageManager from "./message_manager";
import UserManager from "./user_manager";
import { IZepClient } from "./interfaces";

/**
 * ZepClient is a Typescript class for interacting with the Zep.
 */
export default class ZepClient implements IZepClient {
   private static constructing: boolean = false;

   baseURL: string = "https://api.getzep.com";

   headers: any;

   memory: MemoryManager;

   message: MessageManager;

   document: DocumentManager;

   user: UserManager;

   projectApiKey?: string;

   cloud: boolean = false;

   /**
    * Constructs a new ZepClient instance.
    * @param {string} [projectApiKey] - The project API key to use for authentication.
    * @param {string} baseURL - Optional. The base URL of the Zep API.
    */
   constructor(projectApiKey?: string, baseURL?: string) {
      if (!ZepClient.constructing) {
         warnDeprecation(
            "Please use ZepClient.init(). Calling the ZepClient constructor directly is deprecated.",
         );
      }
      if (!projectApiKey && !baseURL) {
         throw new Error(
            "You need to provide either a projectApiKey (if using cloud) or a baseURL (if using open source) to initialize the ZepClient.",
         );
      }
      if (projectApiKey && !baseURL) {
         if (!projectApiKey.startsWith("z_")) {
            throw new Error(
               "Invalid projectApiKey. Project API keys should start with 'z_'.",
            );
         }
      }
      if (baseURL) {
         this.baseURL = baseURL;
      }
      this.projectApiKey = projectApiKey;
      if (projectApiKey?.startsWith("z_")) {
         this.cloud = true;
      }
      if (this.cloud) {
         this.headers = {
            Authorization: `Api-Key ${projectApiKey}`,
         };
      } else if (!this.cloud && projectApiKey) {
         this.headers = {
            Authorization: `Bearer ${projectApiKey}`,
         };
      }
      this.memory = new MemoryManager(this);
      this.message = new MessageManager(this);
      this.document = new DocumentManager(this);
      this.user = new UserManager(this);
   }

   /**
    * Asynchronously initializes a new instance of the ZepClient class.
    *
    * @param {string} [projectApiKey] Optional. The project API key to use for authentication.
    * @param {string} [baseUrl] Optional. The base URL of the Zep API. Only user for open source
    * @returns {Promise<ZepClient>} A promise that resolves to a new ZepClient instance.
    * @throws {Error} Throws an error if the server is not running.
    */
   static async init(
      projectApiKey?: string,
      baseUrl?: string,
   ): Promise<ZepClient> {
      ZepClient.constructing = true;
      const client = new ZepClient(projectApiKey, baseUrl);
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
      const url = new URL(this.baseURL);
      url.pathname = joinPaths(API_BASEPATH, `/${API_VERSION}`, endpoint);
      return url.toString();
   }

   private async checkServer(): Promise<boolean> {
      const healthCheck = "/healthz";
      const healthCheckURL = `${this.baseURL}${healthCheck}`;

      const response = await fetch(healthCheckURL, { headers: this.headers });

      const zepServerVersion = response.headers.get("X-Zep-Version");

      if (!isVersionGreaterOrEqual(zepServerVersion) && !this.projectApiKey) {
         console.warn(MIN_SERVER_WARNING_MESSAGE);
      }

      return response.status === 200;
   }
}
