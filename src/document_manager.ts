import { DocumentCollectionModel } from "./document_models";
import {
   IAddCollectionParams,
   IUpdateCollectionParams,
   IZepClient,
} from "./interfaces";
import { API_BASEURL, handleRequest } from "./utils";
import DocumentCollection from "./document_collection";

export default class DocumentManager {
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

   async addCollection({
      name,
      embeddingDimensions,
      description,
      metadata,
      isAutoEmbedded = true,
   }: IAddCollectionParams): Promise<DocumentCollection> {
      if (embeddingDimensions <= 0) {
         throw new Error("embeddingDimensions must be a positive integer");
      }

      const collection = new DocumentCollectionModel({
         name,
         description,
         metadata,
         embedding_dimensions: embeddingDimensions,
         is_auto_embedded: isAutoEmbedded,
      });

      await handleRequest(
         fetch(this.getFullUrl(`/collection/${name}`), {
            method: "POST",
            headers: {
               ...this.client.headers,
               "Content-Type": "application/json",
            },
            body: JSON.stringify(collection.toDict()),
         })
      );

      return this.getCollection(collection.name);
   }

   async getCollection(name: string): Promise<DocumentCollection> {
      if (!name || name.trim() === "") {
         throw new Error("Collection name must be provided");
      }

      const response = await handleRequest(
         fetch(this.getFullUrl(`/collection/${name}`), {
            headers: this.client.headers,
         })
      );

      const responseData = await response.json();

      return new DocumentCollection(this.client, {
         name: responseData.name,
         uuid: responseData.uuid,
         created_at: responseData.created_at,
         updated_at: responseData.updated_at,
         description: responseData.description,
         metadata: responseData.metadata,
         embedding_dimensions: responseData.embeddingDimensions,
         is_auto_embedded: responseData.isAutoEmbedded,
         is_indexed: responseData.is_indexed,
         document_count: responseData.document_count,
         document_embedded_count: responseData.document_embedded_count,
         is_normalized: responseData.is_normalized,
      });
   }

   async updateCollection({
      name,
      description,
      metadata,
   }: IUpdateCollectionParams): Promise<DocumentCollection> {
      if (description?.length === 0 && metadata === undefined) {
         throw new Error("Either description or metadata must be provided");
      }
      const collection = new DocumentCollectionModel({
         name,
         description,
         metadata,
      });

      await handleRequest(
         fetch(this.getFullUrl(`/collection/${collection.name}`), {
            method: "PATCH",
            headers: {
               ...this.client.headers,
               "Content-Type": "application/json",
            },
            body: JSON.stringify(collection.toDict()),
         })
      );

      return this.getCollection(collection.name);
   }

   async listCollections(): Promise<DocumentCollection[]> {
      const response = await handleRequest(
         fetch(this.getFullUrl("/collection"), {
            headers: this.client.headers,
         })
      );

      const responseData = await response.json();

      return responseData.map(
         (collectionData: any) =>
            new DocumentCollection(this.client, {
               name: collectionData.name,
               uuid: collectionData.uuid,
               created_at: collectionData.created_at,
               updated_at: collectionData.updated_at,
               description: collectionData.description,
               metadata: collectionData.metadata,
               embedding_dimensions: collectionData.embedding_dimensions,
               is_auto_embedded: collectionData.is_auto_embedded,
               is_indexed: collectionData.is_indexed,
               document_count: collectionData.document_count,
               document_embedded_count: collectionData.document_embedded_count,
               is_normalized: collectionData.is_normalized,
            })
      );
   }

   async deleteCollection(collectionName: string): Promise<void> {
      if (!collectionName || collectionName.trim() === "") {
         throw new Error("Collection name must be provided");
      }

      await handleRequest(
         fetch(this.getFullUrl(`/collection/${collectionName}`), {
            method: "DELETE",
            headers: this.client.headers,
         })
      );
   }
}
