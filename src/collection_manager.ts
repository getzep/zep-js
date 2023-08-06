import { DocumentCollectionModel } from "./document_models";
import { IZepClient } from "./interfaces";
import { handleRequest } from "./utils";
import DocumentCollection from "./document_collection";

export default class CollectionManager {
   client: IZepClient;

   constructor(client: IZepClient) {
      this.client = client;
   }

   getFullUrl(endpoint: string): string {
      return `${this.client.baseURL}${endpoint}`;
   }

   async addCollection(
      name: string,
      embeddingDimensions: number,
      description?: string,
      metadata?: Record<string, any>,
      isAutoEmbedded: boolean = true
   ): Promise<DocumentCollection> {
      if (embeddingDimensions <= 0) {
         throw new Error("embeddingDimensions must be a positive integer");
      }

      const collection = new DocumentCollectionModel(
         name,
         undefined,
         undefined,
         undefined,
         description,
         metadata,
         embeddingDimensions,
         isAutoEmbedded
      );

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

      return new DocumentCollection(
         this.client,
         responseData.name,
         responseData.uuid,
         responseData.created_at,
         responseData.updated_at,
         responseData.description,
         responseData.metadata,
         responseData.embeddingDimensions,
         responseData.isAutoEmbedded,
         responseData.is_indexed,
         responseData.document_count,
         responseData.document_embedded_count,
         responseData.is_normalized
      );
   }

   async updateCollection(
      name: string,
      description?: string,
      metadata?: Record<string, any>
   ): Promise<DocumentCollection> {
      const collection = new DocumentCollectionModel(
         name,
         undefined,
         undefined,
         undefined,
         description,
         metadata
      );

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
            new DocumentCollection(
               this.client,
               collectionData.name,
               collectionData.uuid,
               collectionData.created_at,
               collectionData.updated_at,
               collectionData.description,
               collectionData.metadata,
               collectionData.embedding_dimensions,
               collectionData.is_auto_embedded,
               collectionData.is_indexed,
               collectionData.document_count,
               collectionData.document_embedded_count,
               collectionData.is_normalized
            )
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
