import {
   APIError,
   ISession,
   Memory,
   Message,
   NotFoundError,
   Session,
   Summary,
   ZepClient,
} from "../";
import { FetchMock } from "jest-fetch-mock";
import { RoleType } from "../message_models";
import { ClassifySessionResponse } from "../memory_models";

const BASE_URL = "http://localhost:8000";

const fetchMock = global.fetch as FetchMock;

describe("ZepClient", () => {
   let client: ZepClient;

   beforeEach(async () => {
      fetchMock.resetMocks();
      client = await ZepClient.init("z_test-api-key", BASE_URL);
   });

   describe("getSession", () => {
      it("retrieves the correct session when sessionId is provided", async () => {
         const expectedSessionId = "test-session";
         const expectedSessionData: ISession = {
            uuid: "uuid",
            created_at: "2022-01-01T00:00:00Z",
            updated_at: "2022-01-01T00:00:00Z",
            session_id: expectedSessionId,
            metadata: {},
         };

         fetchMock.mockResponseOnce(JSON.stringify(expectedSessionData));

         const session = await client.memory.getSession(expectedSessionId);

         expect(session.toDict()).toEqual(expectedSessionData);
      });
   });

   // Test Suite for addSession()
   describe("addSession", () => {
      // Test for adding a session
      it("should add a session correctly when valid session data is provided", async () => {
         const expectedSessionId = "test-session";
         const sessionData: ISession = {
            session_id: expectedSessionId,
            metadata: { foo: "bar" },
         };
         const session = new Session(sessionData);
         const expectedResponseData: ISession = {
            ...sessionData,
            uuid: "uuid",
            created_at: "2022-01-01T00:00:00Z",
            updated_at: "2022-01-01T00:00:00Z",
         };

         fetchMock.mockResponseOnce(JSON.stringify(expectedResponseData));

         const addedSession = await client.memory.addSession(session);

         expect(addedSession.toDict()).toEqual(expectedResponseData);
      });
   });

   // Test Suite for updateSession()
   describe("updateSession", () => {
      // Test for updating a session
      it("should update a session correctly when valid session data is provided", async () => {
         const expectedSessionId = "test-session";
         const sessionData: ISession = {
            session_id: expectedSessionId,
            metadata: { foo: "bar" },
         };
         const session = new Session(sessionData);
         const expectedResponseData: ISession = {
            ...sessionData,
            uuid: "uuid",
            created_at: "2022-01-01T00:00:00Z",
            updated_at: "2022-01-01T00:00:00Z",
         };

         fetchMock.mockResponseOnce(JSON.stringify(expectedResponseData));

         const updatedSession = await client.memory.updateSession(session);

         expect(updatedSession.toDict()).toEqual(expectedResponseData);
      });
   });

   // Test Suite for listSessions()
   describe("listSessions", () => {
      // Test for retrieving sessions
      it("should retrieve sessions", async () => {
         const responseData = [
            {
               uuid: "uuid1",
               created_at: "2022-01-01T00:00:00Z",
               updated_at: "2022-01-01T00:00:00Z",
               session_id: "session1",
               metadata: {},
            },
            {
               uuid: "uuid2",
               created_at: "2022-01-01T00:00:00Z",
               updated_at: "2022-01-01T00:00:00Z",
               session_id: "session2",
               metadata: {},
            },
         ];

         fetchMock.mockResponseOnce(JSON.stringify(responseData));

         const sessions = await client.memory.listSessions();

         expect(sessions).toEqual(
            responseData.map((session) => new Session(session)),
         );
      });

      // Test for retrieving sessions with limit
      it("should retrieve sessions with limit", async () => {
         const responseData = [
            {
               uuid: "uuid1",
               created_at: "2022-01-01T00:00:00Z",
               updated_at: "2022-01-01T00:00:00Z",
               session_id: "session1",
               metadata: {},
            },
         ];

         fetchMock.mockResponseOnce(JSON.stringify(responseData));

         const sessions = await client.memory.listSessions(1);

         expect(sessions).toEqual(
            responseData.map((session) => new Session(session)),
         );
      });
   });

   // Test Suite for listSessionsChunked()
   describe("listSessionsChunked", () => {
      // Test for retrieving all sessions in chunks
      it("should retrieve all sessions in chunks", async () => {
         const expectedSessionsData = [
            [
               {
                  uuid: "uuid1",
                  created_at: "2022-01-01T00:00:00Z",
                  updated_at: "2022-01-01T00:00:00Z",
                  session_id: "session1",
                  metadata: {},
               },
               {
                  uuid: "uuid2",
                  created_at: "2022-01-01T00:00:00Z",
                  updated_at: "2022-01-01T00:00:00Z",
                  session_id: "session2",
                  metadata: {},
               },
            ],
            [
               {
                  uuid: "uuid3",
                  created_at: "2022-01-01T00:00:00Z",
                  updated_at: "2022-01-01T00:00:00Z",
                  session_id: "session3",
                  metadata: {},
               },
               {
                  uuid: "uuid4",
                  created_at: "2022-01-01T00:00:00Z",
                  updated_at: "2022-01-01T00:00:00Z",
                  session_id: "session4",
                  metadata: {},
               },
            ],
         ];

         fetchMock.mockResponses(
            JSON.stringify(expectedSessionsData[0]),
            JSON.stringify(expectedSessionsData[1]),
            JSON.stringify([]), // empty response to indicate end of list
         );

         const sessionsChunked = [];
         for await (const sessions of client.memory.listSessionsChunked(2)) {
            sessionsChunked.push(sessions.map((session) => session.toDict()));
         }

         expect(sessionsChunked).toEqual(expectedSessionsData);
      });
   });

   // Test Suite for GetSessionMessage()
   describe("getSessionMessage", () => {
      it("should throw an exception when session id is not provided", async () => {
         await expect(
            client.message.getSessionMessage("", "message_uuid"),
         ).rejects.toThrow(Error);
      });
      it("should throw an exception when message id is not provided", async () => {
         await expect(
            client.message.getSessionMessage("test-session", ""),
         ).rejects.toThrow(Error);
      });
      it("should retrieve a message for a session", async () => {
         const responseData = {
            role: "human",
            role_type: "user" as RoleType,
            content: "Hello",
            uuid: "message_uuid",
            created_at: "2022-01-01T00:00:00Z",
         };

         fetchMock.mockResponseOnce(JSON.stringify(responseData));

         const message = await client.message.getSessionMessage(
            "test-session",
            "message_uuid",
         );

         expect(message).toEqual(new Message(responseData));
      });

      // Test for throwing NotFoundError if the session is not found
      it("should throw NotFoundError if the session is not found", async () => {
         fetchMock.mockResponseOnce(JSON.stringify({}), { status: 404 });

         await expect(
            client.message.getSessionMessage("test-session", "message_uuid"),
         ).rejects.toThrow(NotFoundError);
      });

      // Test for throwing APIError when unexpected status code is returned
      it("should throw APIError when unexpected status code is returned", async () => {
         fetchMock.mockResponseOnce(JSON.stringify({}), { status: 500 });

         await expect(
            client.message.getSessionMessage("test-session", "message_uuid"),
         ).rejects.toThrow(APIError);
      });
   });

   // Test Suite for getSessionMessages()
   describe("getSessionMessages", () => {
      it("should throw an exception when session id is not provided", async () => {
         await expect(client.message.getSessionMessages("")).rejects.toThrow(
            Error,
         );
      });

      it("should retrieve messages for a session", async () => {
         const responseData = {
            messages: [
               {
                  role: "human",
                  role_type: "user" as RoleType,
                  content: "Hello",
                  uuid: "message_uuid",
                  created_at: "2022-01-01T00:00:00Z",
               },
            ],
         };

         fetchMock.mockResponseOnce(JSON.stringify(responseData));

         const messages =
            await client.message.getSessionMessages("test-session");

         expect(messages).toEqual(
            responseData.messages.map((message) => new Message(message)),
         );
      });

      it("should throw NotFoundError if the session is not found", async () => {
         fetchMock.mockResponseOnce(JSON.stringify({}), { status: 404 });

         await expect(
            client.message.getSessionMessages("test-session"),
         ).rejects.toThrow(NotFoundError);
      });

      it("should throw APIError when unexpected status code is returned", async () => {
         fetchMock.mockResponseOnce(JSON.stringify({}), { status: 500 });

         await expect(
            client.message.getSessionMessages("test-session"),
         ).rejects.toThrow(APIError);
      });
   });

   // Test Suite for UpdateSessionMessageMetadata()
   describe("updateSessionMessageMetadata", () => {
      it("should throw an exception when session id is not provided", async () => {
         await expect(
            client.message.updateSessionMessageMetadata("", "message_uuid", {
               metadata: { foo: "bar" },
            }),
         ).rejects.toThrow(Error);
      });

      it("should throw an exception when message id is not provided", async () => {
         await expect(
            client.message.updateSessionMessageMetadata("test-session", "", {
               metadata: { foo: "bar" },
            }),
         ).rejects.toThrow(Error);
      });

      it("should update metadata for a message in a session", async () => {
         const responseData = {
            role: "human",
            role_type: "user" as RoleType,
            content: "Hello",
            uuid: "message_uuid",
            created_at: "2022-01-01T00:00:00Z",
         };

         fetchMock.mockResponseOnce(JSON.stringify(responseData));

         const message = await client.message.updateSessionMessageMetadata(
            "test-session",
            "message_uuid",
            { metadata: { foo: "bar" } },
         );

         expect(message).toEqual(new Message(responseData));
      });

      it("should throw NotFoundError if the session is not found", async () => {
         fetchMock.mockResponseOnce(JSON.stringify({}), { status: 404 });

         await expect(
            client.message.updateSessionMessageMetadata(
               "test-session",
               "message_uuid",
               { metadata: { foo: "bar" } },
            ),
         ).rejects.toThrow(NotFoundError);
      });

      it("should throw APIError when unexpected status code is returned", async () => {
         fetchMock.mockResponseOnce(JSON.stringify({}), { status: 500 });

         await expect(
            client.message.updateSessionMessageMetadata(
               "test-session",
               "message_uuid",
               { metadata: { foo: "bar" } },
            ),
         ).rejects.toThrow(APIError);
      });
   });

   // Test Suite for getMemory()
   describe("getMemory", () => {
      // Test for retrieving memory for a session
      it("should retrieve memory for a session", async () => {
         const responseData = {
            messages: [
               {
                  role: "human",
                  role_type: "user" as RoleType,
                  content: "Hello",
               },
            ],
            summary: {
               uuid: "",
               created_at: "",
               content: "Memory summary",
               recent_message_uuid: "",
               token_count: 0,
            },
            facts: ["Fact 1", "Fact 2"],
         };

         fetchMock.mockResponseOnce(JSON.stringify(responseData));

         const memory = await client.memory.getMemory("test-session");

         expect(memory).toEqual(
            new Memory({
               messages: [
                  new Message({
                     role: "human",
                     role_type: "user" as RoleType,
                     content: "Hello",
                  }),
               ],
               summary: new Summary({
                  content: "Memory summary",
                  created_at: "",
                  recent_message_uuid: "",
                  token_count: 0,
                  uuid: "",
               }),
               facts: ["Fact 1", "Fact 2"],
               metadata: {},
            }),
         );
      });
   });

   // Test for throwing NotFoundError if the session is not found
   it("should throw NotFoundError if the session is not found", async () => {
      fetchMock.mockResponseOnce(JSON.stringify({}), { status: 404 });

      await expect(client.memory.getMemory("test-session")).rejects.toThrow(
         NotFoundError,
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
         facts: ["Fact 1", "Fact 2"],
      };

      fetchMock.mockResponseOnce(JSON.stringify(responseData));

      const memory = await client.memory.getMemory("test-session");

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
            facts: ["Fact 1", "Fact 2"],
            metadata: {},
         }),
      );
   });

   // Test for throwing APIError when unexpected status code is returned
   it("should throw APIError when unexpected status code is returned", async () => {
      fetchMock.mockResponseOnce(JSON.stringify({}), { status: 500 });

      await expect(client.memory.getMemory("test-session")).rejects.toThrow(
         APIError,
      );
   });

   // Test for retrieving last 'n' memories for a session when 'lastn' parameter is used
   it("should retrieve last 'n' memories for a session when 'lastn' parameter is used", async () => {
      const responseData = {
         messages: [
            {
               role: "system",
               role_type: "system" as RoleType,
               content: "How can I assist you?",
            },
            {
               role: "human",
               role_type: "user" as RoleType,
               content: "What's the weather like?",
            },
         ],
         summary: {
            uuid: "",
            created_at: "",
            content: "Memory summary",
            recent_message_uuid: "",
            token_count: 0,
         },
         facts: ["Fact 1", "Fact 2"],
      };

      // Mock fetch call with specific URL and parameters
      fetchMock.mockIf(
         (req) =>
            req.url.startsWith(
               `${BASE_URL}/api/v2/sessions/test-session/memory`,
            ) && req.url.includes("lastn=2"),
         JSON.stringify(responseData),
      );

      const memory = await client.memory.getMemory(
         "test-session",
         undefined,
         2,
      );

      expect(memory).toEqual(
         new Memory({
            messages: [
               new Message({
                  role: "system",
                  role_type: "system" as RoleType,
                  content: "How can I assist you?",
               }),
               new Message({
                  role: "human",
                  role_type: "user" as RoleType,
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
            facts: ["Fact 1", "Fact 2"],
            metadata: {},
         }),
      );
   });

   // Test Suite for addMemory()
   describe("addMemory", () => {
      it("should add a memory to a session", async () => {
         const memoryData = new Memory({
            messages: [
               new Message({
                  role: "human",
                  role_type: "user" as RoleType,
                  content: "Hello again!",
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
         });

         fetchMock.mockResponseOnce("OK");

         const result = await client.memory.addMemory(
            "test-session",
            memoryData,
         );

         expect(result).toEqual("OK");
      });

      // Test for throwing Error if the error response
      it("should throw APIError if !200 OK", async () => {
         const memoryData = new Memory({
            messages: [
               new Message({
                  role: "system",
                  role_type: "system" as RoleType,
                  content: "System message",
               }),
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
         fetchMock.mockResponseOnce(JSON.stringify({}), { status: 500 });

         await expect(
            client.memory.addMemory("test-session", memoryData),
         ).rejects.toThrow(APIError);
      });
   });

   // Test Suite for deleteMemory()
   describe("deleteMemory", () => {
      // Test for deleting memory for a session
      it("should delete memory for a session", async () => {
         const message = "Memory deleted";

         fetchMock.mockResponseOnce(message);

         const response = await client.memory.deleteMemory("test-session");

         expect(response).toEqual(message);
      });

      // Test for throwing NotFoundError if the session is not found
      it("should throw NotFoundError if the session is not found", async () => {
         fetchMock.mockResponseOnce(JSON.stringify({}), { status: 404 });

         await expect(
            client.memory.deleteMemory("test-session"),
         ).rejects.toThrow(NotFoundError);
      });

      // Test for throwing APIError when unexpected status code is returned
      it("should throw APIError when unexpected status code is returned", async () => {
         fetchMock.mockResponseOnce(JSON.stringify({}), { status: 500 });

         await expect(
            client.memory.deleteMemory("test-session"),
         ).rejects.toThrow(APIError);
      });
   });

   // Test Suite for searchMemory()
   describe("searchMemory", () => {
      // Test for searching memory for a session
      it("should search memory for a session", async () => {
         const searchPayload = {
            metadata: {
               where: {
                  jsonpath: '$.system.entities[*] ? (@.Label == "WORK_OF_ART")',
               },
            },
            text: "system message",
         };

         const responseData = [
            {
               message: {
                  role: "system",
                  role_type: "system",
                  content: "system message",
                  uuid: "message_uuid",
                  created_at: "2023-01-01T00:00:00Z",
               },
               dist: undefined,
               summary: undefined,
               metadata: {},
            },
         ];

         fetchMock.mockResponseOnce(JSON.stringify(responseData));

         const searchResults = await client.memory.searchMemory(
            "test-session",
            searchPayload,
         );

         expect(searchResults).toEqual(responseData);
      });

      // Test for throwing NotFoundError if the session is not found
      it("should throw NotFoundError if the session is not found", async () => {
         const searchPayload = {
            query: "system",
            metadata: { metadata_key: "metadata_value" }, // Replace with actual meta
            text: "search text", // Replace with actual text
         };

         fetchMock.mockResponseOnce(JSON.stringify({}), { status: 404 });

         await expect(
            client.memory.searchMemory("test-session", searchPayload),
         ).rejects.toThrow(NotFoundError);
      });

      // Test for throwing APIError when unexpected status code is returned
      it("should throw APIError when unexpected status code is returned", async () => {
         const searchPayload = {
            query: "system",
            metadata: { metadata_key: "metadata_value" }, // Replace with actual meta
            text: "search text", // Replace with actual text
         };

         fetchMock.mockResponseOnce(JSON.stringify({}), { status: 500 });

         await expect(
            client.memory.searchMemory("test-session", searchPayload),
         ).rejects.toThrow(APIError);
      }); // end it
   }); // end describe

   describe("classifySession", () => {
      it("should throw an error when session ID is not provided", async () => {
         await expect(
            client.memory.classifySession("", "classifier-name", [
               "class1",
               "class2",
            ]),
         ).rejects.toThrow("sessionId must be provided");
      });

      it("should throw an error when classifier name is not provided", async () => {
         await expect(
            client.memory.classifySession("test-session", "", [
               "class1",
               "class2",
            ]),
         ).rejects.toThrow("name must be provided");
      });

      it("should throw an error when classes array is empty", async () => {
         await expect(
            client.memory.classifySession(
               "test-session",
               "classifier-name",
               [],
            ),
         ).rejects.toThrow("classes must be provided");
      });

      it("should return correct payload", async () => {
         const mockResponseData: ClassifySessionResponse = {
            name: "classifier-name",
            class: "class1",
         };

         fetchMock.mockResponseOnce(JSON.stringify(mockResponseData));

         const classification = await client.memory.classifySession(
            "test-session",
            "classifier-name",
            ["class1", "class2"],
            4,
            true,
            "custom instruction",
         );

         expect(classification).toEqual(mockResponseData);
      });
   });
});
