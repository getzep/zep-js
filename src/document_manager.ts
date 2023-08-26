import { DocumentCollectionModel } from "./document_models";
import {
   IAddCollectionParams,
   IUpdateCollectionParams,
   IZepClient,
} from "./interfaces";
import { handleRequest } from "./utils";
import DocumentCollection from "./document_collection";

/**
 * DocumentManager provides methods to list, create, update, get, and delete
 * Zep document collections.
 */
export default class DocumentManager {
   client: IZepClient;

   /**
    * Constructs a new DocumentManager instance.
    * @param {IZepClient} client - The Zep client instance.
    */
   constructor(client: IZepClient) {
      this.client = client;
   }

   /**
    * Adds a new collection to the Zep client.
    * @param {IAddCollectionParams} params - The parameters for the new collection.
    * @returns {Promise<DocumentCollection>} A promise that resolves to the new
    * DocumentCollection instance.
    * @throws {Error} If embeddingDimensions is not a positive integer.
    * @throws {APIError} If the request fails.
    */
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
         fetch(this.client.getFullUrl(`/collection/${name}`), {
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

   /**
    * Retrieves a collection from the Zep client.
    * @param {string} name - The name of the collection.
    * @returns {Promise<DocumentCollection>} A promise that resolves to the DocumentCollection
    * instance.
    * @throws {Error} If the collection name is not provided.
    * @throws {NotFoundError} If the collection is not found.
    * @throws {APIError} If the request fails.
    */
   async getCollection(name: string): Promise<DocumentCollection> {
      if (!name || name.trim() === "") {
         throw new Error("Collection name must be provided");
      }

      const response = await handleRequest(
         fetch(this.client.getFullUrl(`/collection/${name}`), {
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

   /**
    * Updates a collection in the Zep client.
    * @param {IUpdateCollectionParams} params - The parameters to update the collection.
    * @returns {Promise<DocumentCollection>} A promise that resolves to the updated
    * DocumentCollection instance.
    * @throws {Error} If neither description nor metadata are provided.
    * @throws {APIError} If the request fails.
    * @throws {NotFoundError} If the collection is not found.
    */
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
         fetch(this.client.getFullUrl(`/collection/${collection.name}`), {
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

   /**
    * Lists all collections in the Zep client.
    * @returns {Promise<DocumentCollection[]>} A promise that resolves to an array of
    * DocumentCollection instances.
    * @throws {APIError} If the request fails.
    */
   async listCollections(): Promise<DocumentCollection[]> {
      const response = await handleRequest(
         fetch(this.client.getFullUrl("/collection"), {
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

   /**
    * Deletes a collection from the Zep client.
    * @param {string} collectionName - The name of the collection to delete.
    * @returns {Promise<void>} A promise that resolves when the collection is deleted.
    * @throws {Error} If the collection name is not provided.
    * @throws {NotFoundError} If the collection is not found.
    * @throws {APIError} If the request fails.
    */
   async deleteCollection(collectionName: string): Promise<void> {
      if (!collectionName || collectionName.trim() === "") {
         throw new Error("Collection name must be provided");
      }

      await handleRequest(
         fetch(this.client.getFullUrl(`/collection/${collectionName}`), {
            method: "DELETE",
            headers: this.client.headers,
         })
      );
   }
}
