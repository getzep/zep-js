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

   describe("getMemoryAsync", () => {
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

         const memory = await client.getMemoryAsync("test-session");

         expect(memory).toEqual([
            new Memory({
               messages: [new Message({ role: "human", content: "Hello" })],
               summary: new Summary({
                  uuid: "",
                  created_at: "",
                  content: "Memory summary",
                  recent_message_uuid: "",
                  token_count: 0,
               }),
            }),
         ]);
      });

      it("should throw NotFoundError if the session is not found", async () => {
         mock
            .onGet("http://localhost:8000/api/v1/sessions/test-session/memory")
            .reply(404);

         await expect(client.getMemoryAsync("nonexistent")).rejects.toThrow(
            NotFoundError
         );
      });

      // Add more test cases...
   });

   // More describe blocks...
});
