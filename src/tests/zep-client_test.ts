import { ZepClient } from "../";
import { FetchMock } from "jest-fetch-mock";

const BASE_URL = "http://localhost:8000";

const fetchMock = global.fetch as FetchMock;

describe("ZepClient", () => {
   let client: ZepClient;

   beforeEach(async () => {
      fetchMock.resetMocks();
      client = await ZepClient.init(BASE_URL, "test-api-key");
   });

   describe("ZepClient Auth", () => {
      it("sets the correct Authorization header when apiKey is provided", async () => {
         const expectedAuthorizationHeader = "Bearer test-api-key";

         fetchMock.mockResponseOnce((req) => {
            expect(req.headers.get("Authorization")).toEqual(
               expectedAuthorizationHeader
            );
            return Promise.resolve({
               status: 200,
               body: JSON.stringify({}),
            });
         });
      });
   });
});
