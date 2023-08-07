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

/**
 * DocumentCollection extends DocumentCollectionModel.
 * It provides methods to interact with a Zep document collection.
 */
export default class DocumentCollection extends DocumentCollectionModel {
   private client: IZepClient;

   /**
    * Constructs a new DocumentCollection instance.
    * @param {IZepClient} client - The Zep client instance.
    * @param {IDocumentCollectionModel} params - The parameters for the document collection.
    */
   constructor(client: IZepClient, params: IDocumentCollectionModel) {
      super(params);
      this.client = client;
   }

   /**
    * Returns the status of the document collection.
    * @returns {string} The status of the document collection.
    * "ready" if all documents are embedded, "pending" otherwise.
    */
   get status(): string {
      if (
         this.document_count &&
         this.document_embedded_count === this.document_count
      ) {
         return "ready";
      }
      return "pending";
   }

   /**
    * Adds documents to the collection.
    * @param {IDocument[]} documents - The documents to add.
    * @returns {Promise<string[]>} A promise that resolves to an array of document UUIDs.
    * @throws {Error} If the collection name is not provided or no documents are provided.
    */
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

   /**
    * Updates a document in the collection.
    * @param {IUpdateDocumentParams} params - The parameters to update the document.
    * @returns {Promise<void>} A promise that resolves when the document is updated.
    * @throws {Error} If the collection name is not provided or the document does not have a uuid.
    */
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

   /**
    * Deletes a document from the collection.
    * @param {string} uuid - The uuid of the document to delete.
    * @returns {Promise<void>} A promise that resolves when the document is deleted.
    * @throws {Error} If the collection name is not provided or the document does not have a uuid.
    */
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

   /**
    * Gets a document from the collection.
    * @param {string} uuid - The uuid of the document to get.
    * @returns {Promise<IDocument>} A promise that resolves to the document.
    * @throws {Error} If the collection name is not provided or the document does not have a uuid.
    */
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

   /**
    * Gets multiple documents from the collection.
    * @param {string[]} uuids - The uuids of the documents to get.
    * @returns {Promise<IDocument[]>} A promise that resolves to an array of documents.
    * @throws {Error} If any of the documents do not match the expected format.
    */
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

   /**
    * Searches the collection and returns the results and the query vector.
    * @param {ISearchQuery} query - The search query.
    * @param {number} [limit] - The maximum number of results to return.
    * @returns {Promise<[IDocument[], Float32Array]>}
    *    A promise that resolves to an array of documents and the query vector.
    * @throws {Error} If the collection name is not provided or
    *    the search query does not have at least one of text, embedding, or metadata.
    */
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

   /**
    * Searches the collection.
    * @param {ISearchQuery} query - The search query.
    * @param {number} [limit] - The maximum number of results to return.
    * @returns {Promise<IDocument[]>} A promise that resolves to an array of documents.
    */
   async search(query: ISearchQuery, limit?: number): Promise<IDocument[]> {
      const [results] = await this.searchReturnQueryVector(query, limit);
      return results;
   }

   /**
    * Creates an index for the collection.
    * @param {boolean} [force=false] - Whether to force index creation even if
    * there are less than MIN_DOCS_TO_INDEX documents.
    * @returns {Promise<void>} A promise that resolves when the index is created.
    * @throws {Error} If the collection name is not provided or the collection
    * has less than MIN_DOCS_TO_INDEX documents and force is not true.
    */
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
