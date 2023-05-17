import {
   ZepClient,
   Memory,
   Message,
   Summary,
   NotFoundError,
   UnexpectedResponseError,
} from "zep-js";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

describe("ZepClient", () => {
   let axiosInstance: any;
   let client: ZepClient;
   let mock: MockAdapter;

   beforeEach(() => {
      axiosInstance = axios.create({ baseURL: "http://localhost:8000" });
      client = new ZepClient("http://localhost:8000", axiosInstance);
      mock = new MockAdapter(axiosInstance);
   });

   afterEach(() => {
      mock.reset();
   });

   // Test Suite for getMemory()
   describe("getMemory", () => {
      // Test for reteriving memory for a session
      it("should retrieve memory for a session", async () => {
         const responseData = {
            messages: [{ role: "human", content: "Hello" }],
            summary: {
               uuid: "",
               created_at: "",
               content: "Memory summary",
               recent_message_uuid: "",
               token_count: 0,
            },
         };

         mock
            .onGet("http://localhost:8000/api/v1/sessions/test-session/memory")
            .reply(200, responseData);

         const memory = await client.getMemory("test-session");

         expect(memory).toEqual(
            new Memory({
               messages: [new Message({ role: "human", content: "Hello" })],
               summary: new Summary({
                  content: "Memory summary",
                  created_at: "",
                  recent_message_uuid: "",
                  token_count: 0,
                  uuid: "",
               }),
               metadata: {},
            })
         );
      });

      // Test for throwing NotFoundError if the session is not found
      it("should throw NotFoundError if the session is not found", async () => {
         mock
            .onGet("http://localhost:8000/api/v1/sessions/test-session/memory")
            .reply(404);

         await expect(client.getMemory("test-session")).rejects.toThrow(
            NotFoundError
         );
      });

      // Test for returning a Memory object with empty messages when no messages are found
      it("should return a Memory object with empty messages when no messages are found", async () => {
         const responseData = {
            messages: [],
            summary: {
               uuid: "",
               created_at: "",
               content: "",
               recent_message_uuid: "",
               token_count: 0,
            },
         };

         mock
            .onGet("http://localhost:8000/api/v1/sessions/test-session/memory")
            .reply(200, responseData);

         const memory = await client.getMemory("test-session");

         expect(memory).toEqual(
            new Memory({
               messages: [],
               summary: new Summary({
                  content: "",
                  created_at: "",
                  recent_message_uuid: "",
                  token_count: 0,
                  uuid: "",
               }),
               metadata: {},
            })
         );
      });

      // Test for throwing UnexpectedResponseError when unexpected status code is returned
      it("should throw UnexpectedResponseError when unexpected status code is returned", async () => {
         mock
            .onGet("http://localhost:8000/api/v1/sessions/test-session/memory")
            .reply(500);

         await expect(client.getMemory("test-session")).rejects.toThrow(
            UnexpectedResponseError
         );
      });

      // Test for retrieving last 'n' memories for a session when 'lastn' parameter is used
      it("should retrieve last 'n' memories for a session when 'lastn' parameter is used", async () => {
         const responseData = {
            messages: [
               { role: "system", content: "How can I assist you?" },
               { role: "human", content: "What's the weather like?" },
            ],
            summary: {
               uuid: "",
               created_at: "",
               content: "Memory summary",
               recent_message_uuid: "",
               token_count: 0,
            },
         };

         mock
            .onGet("/api/v1/sessions/test-session/memory", { lastn: 2 })
            .reply(200, responseData);

         const memory = await client.getMemory("test-session", 2);

         expect(memory).toEqual(
            new Memory({
               messages: [
                  new Message({
                     role: "system",
                     content: "How can I assist you?",
                  }),
                  new Message({
                     role: "human",
                     content: "What's the weather like?",
                  }),
               ],
               summary: new Summary({
                  uuid: "",
                  created_at: "",
                  content: "Memory summary",
                  recent_message_uuid: "",
                  token_count: 0,
               }),
               metadata: {},
            })
         );
      });
   });
   
   // Test Suite for addMemory()
   describe("addMemory", () => {
      it("should add a memory to a session", async () => {
         const memoryData = new Memory({
            messages: [
               new Message({ role: "human", content: "Hello again!" }),
            ],
            summary: new Summary({
               uuid: "",
               created_at: "",
               content: "Memory summary",
               recent_message_uuid: "",
               token_count: 0,
            }),
            metadata: {},
         });

         mock
            .onPost(
               "http://localhost:8000/api/v1/sessions/test-session/memory"
            )
            .reply(200, memoryData.toDict());

         const memory = await client.addMemory("test-session", memoryData);

         expect(memory).toEqual(memoryData);
      });

      // Test for throwing Error if the error response
      it("should throw UnexpectedResponseError if !200 OK", async () => {
         const memoryData = new Memory({
            messages: [
               new Message({ role: "system", content: "System message" }),
            ],
            summary: new Summary({
               uuid: "summary_uuid",
               created_at: "2023-01-01T00:00:00Z",
               content: "Memory summary",
               recent_message_uuid: "recent_message_uuid",
               token_count: 0,
            }),
            metadata: {},
         });

         // Mock a status code that is unexpected (500 in this case)
         mock
            .onPost(
               "http://localhost:8000/api/v1/sessions/test-session/memory"
            )
            .reply(500);

         await expect(
            client.addMemory("test-session", memoryData)
         ).rejects.toThrow(UnexpectedResponseError);
      });
      // Add more test cases...
   });

   // Test Suite for deleteMemory()
   describe("deleteMemory", () => {
      // Test for deleting memory for a session
      it("should delete memory for a session", async () => {
         const message = "Memory deleted";

         mock
            .onDelete("http://localhost:8000/api/v1/sessions/test-session/memory")
            .reply(200, message);

         const response = await client.deleteMemory("test-session");

         expect(response).toEqual(message);
      });

      // Test for throwing NotFoundError if the session is not found
      it("should throw NotFoundError if the session is not found", async () => {
         mock
            .onDelete("http://localhost:8000/api/v1/sessions/test-session/memory")
            .reply(404);

         await expect(client.deleteMemory("test-session")).rejects.toThrow(
            NotFoundError
         );
      });

      // Test for throwing UnexpectedResponseError when unexpected status code is returned
      it("should throw UnexpectedResponseError when unexpected status code is returned", async () => {
         mock
            .onDelete("http://localhost:8000/api/v1/sessions/test-session/memory")
            .reply(500);

         await expect(client.deleteMemory("test-session")).rejects.toThrow(
            UnexpectedResponseError
         );
      });
   });

   // Test Suite for searchMemory()
   describe("searchMemory", () => {
      // Test for searching memory for a session
      it("should search memory for a session", async () => {
         const searchPayload = {
            meta: {},
            text: "system message",
         };

         const responseData = [
            {
               message: {
                  role: "system",
                  content: "system message",
                  uuid: "message_uuid",
                  created_at: "2023-01-01T00:00:00Z",
               },
               dist: undefined,
               score: undefined,
               summary: undefined,
               meta: {},
            },
         ];

         mock
            .onPost("http://localhost:8000/api/v1/sessions/test-session/search")
            .reply(200, responseData);

         const searchResults = await client.searchMemory(
            "test-session",
            searchPayload
         );

         expect(searchResults).toEqual(responseData);
      });

      // Test for throwing NotFoundError if the session is not found
      it("should throw NotFoundError if the session is not found", async () => {
         const searchPayload = {
            query: "system",
            meta: { metadata_key: "metadata_value" },  // Replace with actual meta
            text: "search text"  // Replace with actual text
         };

         mock
            .onPost(
               "http://localhost:8000/api/v1/sessions/test-session/search",
               searchPayload
            )
            .reply(404);

         await expect(
            client.searchMemory("test-session", searchPayload)
         ).rejects.toThrow(NotFoundError);
      });

      // Test for throwing UnexpectedResponseError when unexpected status code is returned
      it("should throw UnexpectedResponseError when unexpected status code is returned", async () => {
         const searchPayload = {
            query: "system",
            meta: { metadata_key: "metadata_value" },  // Replace with actual meta
            text: "search text"  // Replace with actual text
         };

         mock
            .onPost(
               "http://localhost:8000/api/v1/sessions/test-session/search",
               searchPayload
            )
            .reply(500);

         await expect(
            client.searchMemory("test-session", searchPayload)
         ).rejects.toThrow(UnexpectedResponseError);
      }); // end it
   });// end describe
}); // end 