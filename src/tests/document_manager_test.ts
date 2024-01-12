import DocumentManager from "../document_manager";
import { IZepClient } from "../interfaces";
import ZepClient from "../zep-client";
import { FetchMock } from "jest-fetch-mock";
import { DocumentCollectionModel } from "../document_models";

const API_URL = "http://localhost:8000";
const BASE_URL = `${API_URL}/api/v2`;

const fetchMock = global.fetch as FetchMock;

describe("CollectionManager", () => {
   let client: IZepClient;
   let manager: DocumentManager;

   beforeEach(async () => {
      fetchMock.resetMocks();
      client = await ZepClient.init("z_test-api-key");
      manager = new DocumentManager(client);
   });

   describe("addCollection", () => {
      it("throws error when embeddingDimensions is not a positive integer", async () => {
         await expect(
            manager.addCollection({ name: "test", embeddingDimensions: -1 }),
         ).rejects.toThrow("embeddingDimensions must be a positive integer");
      });

      it("calls the correct endpoint with the correct method and headers", async () => {
         const mockCollection = {
            name: "test",
            embeddingDimensions: 2,
            isAutoEmbedded: true,
         };
         fetchMock.mockResponseOnce(JSON.stringify(mockCollection));
         fetchMock.mockResponseOnce(JSON.stringify(mockCollection));
         await manager.addCollection({ name: "test", embeddingDimensions: 2 });
         expect(fetchMock.mock.calls[1][0]).toEqual(
            `${BASE_URL}/collections/test`,
         );
         expect(fetchMock.mock.calls[1][1]?.method).toEqual("POST");
         expect(
            (fetchMock.mock.calls[1][1]?.headers as Record<string, string>)?.[
               "Content-Type"
            ],
         ).toEqual("application/json");
      });
   });

   describe("getCollection", () => {
      it("throws error when name is not provided", async () => {
         await expect(manager.getCollection("")).rejects.toThrow(
            "Collection name must be provided",
         );
      });

      it("calls the correct endpoint with the correct headers", async () => {
         fetchMock.mockResponseOnce(JSON.stringify({}));
         await manager.getCollection("test");
         // needs to be the second call because the first call is to healthz
         expect(fetchMock.mock.calls[1][0]).toEqual(
            `${BASE_URL}/collections/test`,
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
         await manager.updateCollection(testData);
         expect(fetchMock.mock.calls[1][0]).toEqual(
            `${BASE_URL}/collections/test`,
         );
         expect(fetchMock.mock.calls[1][1]?.method).toEqual("PATCH");
         expect(
            (fetchMock.mock.calls[1][1]?.headers as Record<string, string>)?.[
               "Content-Type"
            ],
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
               collectionsData[i].description,
            );
            expect(collection.metadata).toEqual(collectionsData[i].metadata);
         });
      });
   });

   describe("deleteCollection", () => {
      it("throws error when collectionName is not provided", async () => {
         await expect(manager.deleteCollection("")).rejects.toThrow(
            "Collection name must be provided",
         );
      });

      it("calls the correct endpoint with the correct method and headers", async () => {
         fetchMock.mockResponseOnce(JSON.stringify({}));
         await manager.deleteCollection("test");
         expect(fetchMock.mock.calls[1][0]).toEqual(
            `${BASE_URL}/collections/test`,
         );
         expect(fetchMock.mock.calls[1][1]?.method).toEqual("DELETE");
      });
   });
});
