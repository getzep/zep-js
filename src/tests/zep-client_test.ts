import { ZepClient } from "../";
import { FetchMock } from "jest-fetch-mock";

const BASE_URL = "http://localhost:8000";

const fetchMock = global.fetch as FetchMock;

describe("ZepClient", () => {
   describe("ZepClient Open Source", () => {
      beforeEach(async () => {
         fetchMock.resetMocks();
      });
      it.skip("sets the correct Authorization header when apiKey is provided", async () => {
         const expectedAuthorizationHeader = "Bearer test-api-key";
         fetchMock.mockResponseOnce((req) => {
            expect(req.headers.get("Authorization")).toEqual(
               expectedAuthorizationHeader,
            );
            return Promise.resolve({
               status: 200,
               body: JSON.stringify({}),
            });
         });
         const client = await ZepClient.init("test-api-key");

         expect(client.cloud).toBe(false);

         expect(client.getFullUrl("/test")).toEqual(`${BASE_URL}/api/v1/test`);
      });
   });

   describe("ZepClient Cloud", () => {
      beforeEach(async () => {
         fetchMock.resetMocks();
      });

      describe("ZepClient Auth", () => {
         it("sets the correct Authorization header when projectApiKey is provided", async () => {
            const expectedAuthorizationHeader = "Api-Key z_test-api-key";

            fetchMock.mockResponseOnce((req) => {
               expect(req.headers.get("Authorization")).toEqual(
                  expectedAuthorizationHeader,
               );
               return Promise.resolve({
                  status: 200,
                  body: JSON.stringify({}),
               });
            });

            const client = await ZepClient.init("z_test-api-key");

            expect(client.cloud).toBe(true);

            expect(client.getFullUrl("/test")).toEqual(
               `${BASE_URL}/api/v2/test`,
            );
         });
      });
   });
});
