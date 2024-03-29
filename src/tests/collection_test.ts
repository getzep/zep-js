import { FetchMock } from "jest-fetch-mock";
import DocumentCollection from "../document_collection";
import {
   docsToDocsWithFloatArray,
   IDocument,
   IDocumentCollectionModel,
} from "../document_models";
import { IZepClient } from "../interfaces";
import { API_BASEPATH } from "../utils";

const API_URL = "http://localhost:8000";

const fetchMock = global.fetch as FetchMock;

const mockDocuments: IDocument[] = [
   {
      document_id: "doc1",
      content: "Test document",
      metadata: { author: "John" },
   },
   {
      document_id: "doc2",
      content: "Test document 2",
      metadata: { author: "April" },
   },
];

const mockDocumentsWithEmbeddings = mockDocuments.map((doc) => ({
   ...doc,
   embedding: new Float32Array([0.1, 0.2]),
}));

const mockCollection: IDocumentCollectionModel = {
   name: "test",
   embedding_dimensions: 2,
   is_auto_embedded: true,
};

const mockClient: IZepClient = {
   baseURL: API_URL,
   headers: {},

   getFullUrl(endpoint: string): string {
      return `${this.baseURL}${API_BASEPATH}/v2${endpoint}`;
   },
};

describe("DocumentCollection", () => {
   describe("addDocuments", () => {
      beforeEach(() => {
         fetchMock.resetMocks();
      });

      it("calls the correct endpoint", async () => {
         fetchMock.mockResponseOnce(JSON.stringify([]));

         const collection = new DocumentCollection(mockClient, mockCollection);
         await collection.addDocuments(mockDocuments);

         const expectedEndpoint = `${API_URL}/api/v2/collections/${mockCollection.name}/documents`;
         expect(fetchMock.mock.calls[0][0]).toEqual(expectedEndpoint);
      });

      it("successfully adds documents and parses response", async () => {
         const mockResponse = ["1234", "5678"];
         // Mock a successful fetch response
         fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

         const collection = new DocumentCollection(mockClient, mockCollection);
         const result = await collection.addDocuments(mockDocuments);

         expect(result).toEqual(mockResponse);
      });

      it("sends correct data structure to server", async () => {
         fetchMock.mockResponseOnce(
            JSON.stringify([{ uuid: "1234", ...mockDocuments[0] }]),
         );

         const collection = new DocumentCollection(mockClient, mockCollection);
         await collection.addDocuments([mockDocuments[0]]);

         if (
            !fetchMock.mock.calls[0][1] ||
            typeof fetchMock.mock.calls[0][1].body !== "string"
         ) {
            throw new Error("No request body sent or body is not a string");
         }
         const sentRequestBody = JSON.parse(fetchMock.mock.calls[0][1].body);
         expect(sentRequestBody).toEqual([mockDocuments[0]]);
      });

      it("correctly adds documents with Float32Array embeddings", async () => {
         const mockResponse = ["1234", "5678"];
         // Mock a successful fetch response
         fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

         const collection = new DocumentCollection(mockClient, {
            ...mockCollection,
            is_auto_embedded: false,
         });
         const result = await collection.addDocuments(
            mockDocumentsWithEmbeddings,
         );

         expect(result).toEqual(mockResponse);

         if (
            !fetchMock.mock.calls[0][1] ||
            typeof fetchMock.mock.calls[0][1].body !== "string"
         ) {
            throw new Error("No request body sent or body is not a string");
         }
         const sentRequestBody = JSON.parse(fetchMock.mock.calls[0][1].body);

         // Convert Float32Array to regular array for comparison
         const expectedRequestBody = mockDocumentsWithEmbeddings.map((doc) => ({
            ...doc,
            embedding: Array.from(doc.embedding),
         }));

         expect(sentRequestBody).toEqual(expectedRequestBody);
      });
   });

   describe("updateDocument", () => {
      beforeEach(() => {
         fetchMock.resetMocks();
      });

      it("calls the correct endpoint with the correct verb", async () => {
         fetchMock.mockResponseOnce(JSON.stringify({}));

         const collection = new DocumentCollection(mockClient, mockCollection);
         await collection.updateDocument({
            uuid: "1234",
            documentId: "doc1",
            metadata: { author: "John" },
         });

         const expectedEndpoint = `${API_URL}/api/v2/collections/${mockCollection.name}/documents/1234`;
         expect(fetchMock.mock.calls[0][0]).toEqual(expectedEndpoint);
         expect(fetchMock.mock.calls[0][1]?.method).toEqual("PATCH");
      });

      it("sends correct data structure to server", async () => {
         fetchMock.mockResponseOnce(JSON.stringify({}));

         const collection = new DocumentCollection(mockClient, mockCollection);
         const updateParams = {
            uuid: "1234",
            documentId: "doc1",
            metadata: { author: "John" },
         };
         const expectedParams = {
            uuid: "1234",
            document_id: "doc1",
            metadata: { author: "John" },
         };
         await collection.updateDocument(updateParams);

         if (
            !fetchMock.mock.calls[0][1] ||
            typeof fetchMock.mock.calls[0][1].body !== "string"
         ) {
            throw new Error("No request body sent or body is not a string");
         }
         const sentRequestBody = JSON.parse(fetchMock.mock.calls[0][1].body);
         expect(sentRequestBody).toEqual(expectedParams);
      });

      it("throws error when collection name is not provided", async () => {
         const collection = new DocumentCollection(mockClient, {
            ...mockCollection,
            name: "",
         });
         await expect(
            collection.updateDocument({
               uuid: "1234",
               documentId: "doc1",
               metadata: { author: "John" },
            }),
         ).rejects.toThrow("Collection name must be provided");
      });

      it("throws error when document uuid is not provided", async () => {
         const collection = new DocumentCollection(mockClient, mockCollection);
         await expect(
            collection.updateDocument({
               uuid: "",
               documentId: "doc1",
               metadata: { author: "John" },
            }),
         ).rejects.toThrow("Document must have a uuid");
      });
   });

   describe("deleteDocument", () => {
      beforeEach(() => {
         fetchMock.resetMocks();
      });

      it("calls the correct endpoint", async () => {
         fetchMock.mockResponseOnce(JSON.stringify({}));

         const collection = new DocumentCollection(mockClient, mockCollection);
         await collection.deleteDocument("1234");

         const expectedEndpoint = `${API_URL}/api/v2/collections/${mockCollection.name}/documents/uuid/1234`;
         expect(fetchMock.mock.calls[0][0]).toEqual(expectedEndpoint);
      });

      it("sends DELETE request", async () => {
         fetchMock.mockResponseOnce(JSON.stringify({}));

         const collection = new DocumentCollection(mockClient, mockCollection);
         await collection.deleteDocument("1234");

         expect(fetchMock.mock.calls[0][1]?.method).toEqual("DELETE");
      });

      it("throws error when collection name is not provided", async () => {
         const collection = new DocumentCollection(mockClient, {
            ...mockCollection,
            name: "",
         });
         await expect(collection.deleteDocument("1234")).rejects.toThrow(
            "Collection name must be provided",
         );
      });

      it("throws error when document uuid is not provided", async () => {
         const collection = new DocumentCollection(mockClient, mockCollection);
         await expect(collection.deleteDocument("")).rejects.toThrow(
            "Document must have a uuid",
         );
      });
   });

   describe("getDocument", () => {
      const expectedDoc = { uuid: "1234", ...mockDocuments[0] };
      beforeEach(() => {
         fetchMock.resetMocks();
      });
      it("calls the correct endpoint", async () => {
         fetchMock.mockResponseOnce(JSON.stringify(expectedDoc));

         const collection = new DocumentCollection(mockClient, mockCollection);
         await collection.getDocument("1234");

         const expectedEndpoint = `${API_URL}/api/v2/collections/${mockCollection.name}/documents/1234`;
         expect(fetchMock.mock.calls[0][0]).toEqual(expectedEndpoint);
      });

      it("returns the correct document", async () => {
         fetchMock.mockResponseOnce(JSON.stringify(expectedDoc));

         const collection = new DocumentCollection(mockClient, mockCollection);
         const document = await collection.getDocument("1234");

         expect(document).toEqual(expectedDoc);
      });

      it("throws error when collection name is not provided", async () => {
         const collection = new DocumentCollection(mockClient, {
            ...mockCollection,
            name: "",
         });
         await expect(collection.getDocument("1234")).rejects.toThrow(
            "Collection name must be provided",
         );
      });

      it("throws error when document uuid is not provided", async () => {
         const collection = new DocumentCollection(mockClient, mockCollection);
         await expect(collection.getDocument("")).rejects.toThrow(
            "Document must have a uuid",
         );
      });
   });
   describe("getDocuments", () => {
      beforeEach(() => {
         fetchMock.resetMocks();
      });

      const expectedDocuments = [
         { uuid: "1234", ...mockDocuments[0] },
         { uuid: "5678", ...mockDocuments[1] },
      ];

      it("calls the correct endpoint", async () => {
         fetchMock.mockResponseOnce(JSON.stringify(expectedDocuments));

         const collection = new DocumentCollection(mockClient, mockCollection);
         await collection.getDocuments(["doc1", "doc2"]);

         const expectedEndpoint = `${API_URL}/api/v2/collections/${mockCollection.name}/documents/list/get`;
         expect(fetchMock.mock.calls[0][0]).toEqual(expectedEndpoint);
      });

      it("successfully gets documents and parses response", async () => {
         fetchMock.mockResponseOnce(JSON.stringify(expectedDocuments));

         const collection = new DocumentCollection(mockClient, mockCollection);
         const result = await collection.getDocuments(["doc1", "doc2"]);

         expect(result).toEqual(expectedDocuments);
      });

      it("sends correct data structure to server", async () => {
         fetchMock.mockResponseOnce(JSON.stringify(expectedDocuments));

         const collection = new DocumentCollection(mockClient, mockCollection);
         await collection.getDocuments(["doc1", "doc2"]);

         if (
            !fetchMock.mock.calls[0][1] ||
            typeof fetchMock.mock.calls[0][1].body !== "string"
         ) {
            throw new Error("No request body sent or body is not a string");
         }
         const sentRequestBody = JSON.parse(fetchMock.mock.calls[0][1].body);
         expect(sentRequestBody).toEqual({ uuids: ["doc1", "doc2"] });
      });

      it("throws error when collection name is not provided", async () => {
         const collection = new DocumentCollection(mockClient, {
            ...mockCollection,
            name: "",
         });
         await expect(
            collection.getDocuments(["doc1", "doc2"]),
         ).rejects.toThrow("Collection name must be provided");
      });
   });

   describe("search", () => {
      beforeEach(() => {
         fetchMock.resetMocks();
      });

      const expectedDocuments = [
         {
            uuid: "1234",
            embedding: [0.5, 0.5],
            ...mockDocuments[0],
         },
         {
            uuid: "5678",
            embedding: [0.5, 0.5],
            ...mockDocuments[1],
         },
      ];

      it("calls the correct endpoint", async () => {
         fetchMock.mockResponseOnce(
            JSON.stringify({
               results: expectedDocuments,
               query_vector: [0.5, 0.5],
            }),
         );

         const collection = new DocumentCollection(mockClient, mockCollection);
         await collection.search({ text: "Test document" });

         const expectedEndpoint = `${API_URL}/api/v2/collections/${mockCollection.name}/search`;
         expect(fetchMock.mock.calls[0][0]).toEqual(expectedEndpoint);
      });

      it("successfully searches documents and parses response", async () => {
         fetchMock.mockResponseOnce(
            JSON.stringify({
               results: expectedDocuments,
               query_vector: [0.5, 0.5],
            }),
         );

         const collection = new DocumentCollection(mockClient, mockCollection);
         const result = await collection.search({ text: "Test document" });

         expect(result).toEqual(docsToDocsWithFloatArray(expectedDocuments));
      });

      it("throws error when collection name is not provided", async () => {
         const collection = new DocumentCollection(mockClient, {
            ...mockCollection,
            name: "",
         });
         await expect(
            collection.search({ text: "Test document" }),
         ).rejects.toThrow("Collection name must be provided");
      });
   });
});
