import {
   DocumentCollectionModel,
   IDocument,
   IDocumentCollectionModel,
   isGetIDocument,
} from "./document_models";
import { ISearchQuery, IUpdateDocumentParams, IZepClient } from "./interfaces";
import { API_BASEURL, handleRequest } from "./utils";
import { APIError } from "./errors";

const MIN_DOCS_TO_INDEX = 10_000;
const LARGE_BATCH_WARNING_LIMIT = 1000;
const LARGE_BATCH_WARNING = `Batch size is greater than ${LARGE_BATCH_WARNING_LIMIT}. 
This may result in slow performance or out-of-memory failures.`;

export default class DocumentCollection extends DocumentCollectionModel {
   private client: IZepClient;

   constructor(client: IZepClient, params: IDocumentCollectionModel) {
      super(params);
      this.client = client;
   }

   get status(): string {
      if (
         this.document_count &&
         this.document_embedded_count === this.document_count
      ) {
         return "ready";
      }
      return "pending";
   }

   async addDocuments(documents: IDocument[]): Promise<string[]> {
      if (this.name.length === 0) {
         throw new Error("Collection name must be provided");
      }
      if (documents.length === 0) {
         throw new Error("No documents provided");
      }
      if (documents.length > LARGE_BATCH_WARNING_LIMIT) {
         console.warn(LARGE_BATCH_WARNING);
      }
      const url = this.getFullUrl(`/collection/${this.name}/document`);
      const response = await handleRequest(
         fetch(url, {
            method: "POST",
            headers: {
               ...this.client.headers,
               "Content-Type": "application/json",
            },
            body: JSON.stringify(documents),
         })
      );

      return response.json();
   }

   async updateDocument({
      uuid,
      documentId,
      metadata,
   }: IUpdateDocumentParams): Promise<void> {
      if (this.name.length === 0) {
         throw new Error("Collection name must be provided");
      }
      if (!uuid) {
         throw new Error("Document must have a uuid");
      }
      const url = this.getFullUrl(`/collection/${this.name}/document/${uuid}`);
      await handleRequest(
         fetch(url, {
            method: "PATCH",
            headers: {
               ...this.client.headers,
               "Content-Type": "application/json",
            },
            body: JSON.stringify({
               uuid,
               document_id: documentId,
               metadata,
            }),
         })
      );
   }

   async deleteDocument(uuid: string): Promise<void> {
      if (this.name.length === 0) {
         throw new Error("Collection name must be provided");
      }
      if (uuid.length === 0) {
         throw new Error("Document must have a uuid");
      }
      const url = this.getFullUrl(
         `/collection/${this.name}/document/uuid/${uuid}`
      );
      await handleRequest(
         fetch(url, {
            method: "DELETE",
            headers: this.client.headers,
         })
      );
   }

   async getDocument(uuid: string): Promise<IDocument> {
      if (this.name.length === 0) {
         throw new Error("Collection name must be provided");
      }
      if (uuid.length === 0) {
         throw new Error("Document must have a uuid");
      }
      const url = this.getFullUrl(`/collection/${this.name}/document/${uuid}`);
      const response = await handleRequest(
         fetch(url, {
            headers: this.client.headers,
         })
      );

      const document = await response.json();

      if (!isGetIDocument(document)) {
         throw new APIError("Unexpected document response from server");
      }

      return response.json();
   }

   async getDocuments(uuids: string[]): Promise<IDocument[]> {
      if (uuids.length > LARGE_BATCH_WARNING_LIMIT) {
         console.warn(LARGE_BATCH_WARNING);
      }

      const url = this.getFullUrl(`/collection/${this.name}/document/list/get`);
      const response = await handleRequest(
         fetch(url, {
            method: "POST",
            headers: {
               ...this.client.headers,
               "Content-Type": "application/json",
            },
            body: JSON.stringify({ uuids }),
         })
      );

      const documents = await response.json();
      if (!Array.isArray(documents)) {
         throw new APIError("Unexpected document response from server");
      }
      if (documents.map((d) => isGetIDocument(d)).includes(false)) {
         throw new APIError("Unexpected document response from server");
      }

      return documents;
   }

   async searchReturnQueryVector(
      query: ISearchQuery,
      limit?: number
   ): Promise<[IDocument[], Float32Array]> {
      if (this.name.length === 0) {
         throw new Error("Collection name must be provided");
      }
      if (
         query.text?.length === 0 &&
         query.embedding?.length === 0 &&
         query.metadata?.length === 0
      ) {
         throw new Error(
            "Search query must have at least one of text, embedding, or metadata"
         );
      }
      const limitParam = limit ? `?limit=${limit}` : "";
      const url = this.getFullUrl(
         `/collection/${this.name}/search${limitParam}`
      );
      const response = await handleRequest(
         fetch(url, {
            method: "POST",
            headers: {
               ...this.client.headers,
               "Content-Type": "application/json",
            },
            body: JSON.stringify(query),
         })
      );

      const results = await response.json();
      const { results: documents, query_vector: queryVector } = results;
      if (!Array.isArray(documents)) {
         throw new APIError("Unexpected document response from server");
      }
      if (documents.map((d) => isGetIDocument(d)).includes(false)) {
         throw new APIError("Unexpected document response from server");
      }
      if (!Array.isArray(queryVector)) {
         throw new APIError("Unexpected vector response from server");
      }
      if (queryVector.map((v) => typeof v === "number").includes(false)) {
         throw new APIError("Unexpected vector response from server");
      }

      return [documents, new Float32Array(queryVector)];
   }

   async search(query: ISearchQuery, limit?: number): Promise<IDocument[]> {
      const [results] = await this.searchReturnQueryVector(query, limit);
      return results;
   }

   async createIndex(force?: boolean): Promise<void> {
      const forceParam = force ? `?force=${force}` : "";
      if (this.name.length === 0) {
         throw new Error("Collection name must be provided");
      }

      if (
         !force &&
         this?.document_count &&
         this?.document_count < MIN_DOCS_TO_INDEX
      ) {
         throw new Error(
            `Collection must have at least ${MIN_DOCS_TO_INDEX} documents to index. Use force=true to override.`
         );
      }
      const url = this.getFullUrl(
         `/collection/${this.name}/index/create${forceParam}`
      );
      await handleRequest(
         fetch(url, {
            method: "POST",
            headers: {
               ...this.client.headers,
               "Content-Type": "application/json",
            },
         })
      );
   }

   /**
    * Constructs the full URL for an API endpoint.
    * @param {string} endpoint - The endpoint of the API.
    * @returns {string} The full URL.
    */
   getFullUrl(endpoint: string): string {
      return `${this.client.baseURL}${API_BASEURL}${endpoint}`;
   }
}
