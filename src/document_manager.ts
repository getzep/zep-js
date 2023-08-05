import { DocumentCollectionModel } from "./document_models";
import { IZepClient } from "./interfaces";
import { handleRequest } from "./utils";

export default class DocumentManager {
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
   ): Promise<DocumentCollectionModel> {
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

      const _ = await handleRequest(
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

   async getCollection(name: string): Promise<DocumentCollectionModel> {
      if (!name || name.trim() === "") {
         throw new Error("Collection name must be provided");
      }

      const response = await handleRequest(
         fetch(this.getFullUrl(`/collection/${name}`), {
            headers: this.client.headers,
         })
      );

      const responseData = await response.json();

      return new DocumentCollectionModel(
         responseData.name,
         responseData.uuid,
         responseData.createdAt,
         responseData.updatedAt,
         responseData.description,
         responseData.metadata,
         responseData.embeddingDimensions,
         responseData.isAutoEmbedded,
         responseData.isIndexed,
         responseData.documentCount,
         responseData.documentEmbeddedCount,
         responseData.isNormalized
      );
   }

   async updateCollection(
      name: string,
      description?: string,
      metadata?: Record<string, any>
   ): Promise<DocumentCollectionModel> {
      const collection = new DocumentCollectionModel(
         name,
         undefined,
         undefined,
         undefined,
         description,
         metadata
      );

      const _ = await handleRequest(
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

   async listCollections(): Promise<DocumentCollectionModel[]> {
      const response = await handleRequest(
         fetch(this.getFullUrl("/collection"), {
            headers: this.client.headers,
         })
      );

      const responseData = await response.json();

      return responseData.map(
         (collectionData: any) =>
            new DocumentCollectionModel(
               collectionData.name,
               collectionData.uuid,
               collectionData.createdAt,
               collectionData.updatedAt,
               collectionData.description,
               collectionData.metadata,
               collectionData.embeddingDimensions,
               collectionData.isAutoEmbedded,
               collectionData.isIndexed,
               collectionData.documentCount,
               collectionData.documentEmbeddedCount,
               collectionData.isNormalized
            )
      );
   }

   async deleteCollection(collectionName: string): Promise<void> {
      if (!collectionName || collectionName.trim() === "") {
         throw new Error("Collection name must be provided");
      }

      const _ = await handleRequest(
         fetch(this.getFullUrl(`/collection/${collectionName}`), {
            method: "DELETE",
            headers: this.client.headers,
         })
      );
   }
}
