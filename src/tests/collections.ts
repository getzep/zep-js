import CollectionManager from "../collection_manager";
import { IZepClient } from "../interfaces";
import ZepClient from "../zep-client";
import { FetchMock } from "jest-fetch-mock";
import { DocumentCollectionModel } from "../document_models";

const BASE_URL = "http://localhost:8000";

const fetchMock = global.fetch as FetchMock;

describe("CollectionManager", () => {
   let client: IZepClient;
   let manager: CollectionManager;

   beforeEach(async () => {
      fetchMock.resetMocks();
      client = await ZepClient.init(BASE_URL, "test-api-key");
      manager = new CollectionManager(client);
   });

   describe("addCollection", () => {
      it("throws error when embeddingDimensions is not a positive integer", async () => {
         await expect(manager.addCollection("test", 0)).rejects.toThrow(
            "embeddingDimensions must be a positive integer"
         );
      });

      it("calls the correct endpoint with the correct method and headers", async () => {
         fetchMock.mockResponseOnce(
            JSON.stringify({
               name: "test",
               embeddingDimensions: 2,
            })
         );
         fetchMock.mockResponseOnce(
            JSON.stringify({
               name: "test",
               embeddingDimensions: 2,
            })
         );
         await manager.addCollection("test", 2);
         expect(fetchMock.mock.calls[1][0]).toEqual(
            `${BASE_URL}/collection/test`
         );
         expect(fetchMock.mock.calls[1][1]?.method).toEqual("POST");
         expect(
            (fetchMock.mock.calls[1][1]?.headers as Record<string, string>)?.[
               "Content-Type"
            ]
         ).toEqual("application/json");
      });
   });

   describe("getCollection", () => {
      it("throws error when name is not provided", async () => {
         await expect(manager.getCollection("")).rejects.toThrow(
            "Collection name must be provided"
         );
      });

      it("calls the correct endpoint with the correct headers", async () => {
         fetchMock.mockResponseOnce(JSON.stringify({}));
         await manager.getCollection("test");
         // needs to be the second call because the first call is to healthz
         expect(fetchMock.mock.calls[1][0]).toEqual(
            `${BASE_URL}/collection/test`
         );
      });
   });

   describe("updateCollection", () => {
      it("calls the correct endpoint with the correct method and headers", async () => {
         const testData = {
            name: "test",
            description: "description",
            metadata: { foo: "bar" },
         };
         fetchMock.mockResponseOnce(JSON.stringify({}));
         fetchMock.mockResponseOnce(JSON.stringify(testData));
         await manager.updateCollection(
            testData.name,
            testData.description,
            testData.metadata
         );
         expect(fetchMock.mock.calls[1][0]).toEqual(
            `${BASE_URL}/collection/test`
         );
         expect(fetchMock.mock.calls[1][1]?.method).toEqual("PATCH");
         expect(
            (fetchMock.mock.calls[1][1]?.headers as Record<string, string>)?.[
               "Content-Type"
            ]
         ).toEqual("application/json");
      });
   });

   describe("listCollections", () => {
      it("calls the correct endpoint and returns an array of collections", async () => {
         const collectionsData = [
            {
               name: "test1",
               description: "description1",
               metadata: { foo: "bar1" },
               isAutoEmbedded: true,
               embeddingDimensions: 2,
            },
            {
               name: "test2",
               description: "description2",
               metadata: { foo: "bar2" },
               isAutoEmbedded: false,
               embeddingDimensions: 2,
            },
         ];
         fetchMock.mockResponseOnce(JSON.stringify(collectionsData));
         const collections = await manager.listCollections();
         expect(fetchMock.mock.calls[1][0]).toEqual(`${BASE_URL}/collection`);
         expect(collections).toBeInstanceOf(Array);
         collections.forEach((collection, i) => {
            expect(collection).toBeInstanceOf(DocumentCollectionModel);
            expect(collection.name).toEqual(collectionsData[i].name);
            expect(collection.description).toEqual(
               collectionsData[i].description
            );
            expect(collection.metadata).toEqual(collectionsData[i].metadata);
         });
      });
   });

   describe("deleteCollection", () => {
      it("throws error when collectionName is not provided", async () => {
         await expect(manager.deleteCollection("")).rejects.toThrow(
            "Collection name must be provided"
         );
      });

      it("calls the correct endpoint with the correct method and headers", async () => {
         fetchMock.mockResponseOnce(JSON.stringify({}));
         await manager.deleteCollection("test");
         expect(fetchMock.mock.calls[1][0]).toEqual(
            `${BASE_URL}/collection/test`
         );
         expect(fetchMock.mock.calls[1][1]?.method).toEqual("DELETE");
      });
   });
});