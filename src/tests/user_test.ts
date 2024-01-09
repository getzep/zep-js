import { User, ZepClient } from "../";
import { FetchMock } from "jest-fetch-mock";

const BASE_URL = "http://localhost:8000";

const fetchMock = global.fetch as FetchMock;

describe("client.user", () => {
   let client: ZepClient;
   beforeEach(async () => {
      fetchMock.resetMocks();
      client = await ZepClient.initCloud("z_test-api-key", BASE_URL);
   });

   describe("addUser", () => {
      it("adds a user correctly when valid user data is provided", async () => {
         const userData = {
            user_id: "test-user",
            metadata: { foo: "bar" },
            email: "ann@company.com",
            first_name: "Ann",
            last_name: "Smith",
         };
         const user = new User(userData);
         const expectedUser = {
            user_id: "test-user",
            metadata: { foo: "bar" },
            email: "ann@company.com",
            first_name: "Ann",
            last_name: "Smith",
         };

         fetchMock.mockResponseOnce(JSON.stringify(expectedUser));

         const responseUser = await client.user.add(user);

         expect(responseUser.toDict()).toEqual(expectedUser);
      });
   });

   describe("getUser", () => {
      it("retrieves the correct user when userId is provided", async () => {
         const expectedUserId = "test-user";
         const expectedUserData = {
            user_id: expectedUserId,
            metadata: {},
         };

         fetchMock.mockResponseOnce(JSON.stringify(expectedUserData));

         const user = await client.user.get(expectedUserId);

         expect(user.toDict()).toEqual(expectedUserData);
      });
   });

   describe("updateUser", () => {
      it("updates a user correctly when valid user data is provided", async () => {
         const userData = {
            user_id: "test-user",
            metadata: { foo: "bar" },
         };
         const user = new User(userData);
         const expectedUser = {
            user_id: "test-user",
            metadata: { foo: "bar" },
         };

         fetchMock.mockResponseOnce(JSON.stringify(expectedUser));

         const responseUser = await client.user.update(user);

         expect(responseUser.toDict()).toEqual(expectedUser);
      });
   });

   describe("deleteUser", () => {
      it("deletes a user correctly when userId is provided", async () => {
         const expectedUserId = "test-user";
         const expectedResponseText = "User deleted successfully";

         fetchMock.mockResponseOnce(expectedResponseText);

         const responseText = await client.user.delete(expectedUserId);

         expect(responseText).toEqual(expectedResponseText);
      });
   });

   describe("listUsers", () => {
      it("lists users correctly", async () => {
         const expectedUsersData = [
            {
               user_id: "test-user1",
               metadata: {},
            },
            {
               user_id: "test-user2",
               metadata: {},
            },
         ];

         fetchMock.mockResponseOnce(JSON.stringify(expectedUsersData));

         const users = await client.user.list();

         expect(users.map((user) => user.toDict())).toEqual(expectedUsersData);
      });
   });

   describe("listUsersChunked", () => {
      it("lists users in chunks correctly", async () => {
         const expectedUsersData = [
            [
               {
                  user_id: "test-user1",
                  metadata: {},
               },
               {
                  user_id: "test-user2",
                  metadata: {},
               },
            ],
            [
               {
                  user_id: "test-user3",
                  metadata: {},
               },
               {
                  user_id: "test-user4",
                  metadata: {},
               },
            ],
         ];

         fetchMock.mockResponses(
            JSON.stringify(expectedUsersData[0]),
            JSON.stringify(expectedUsersData[1]),
            JSON.stringify([]), // empty response to indicate end of list
         );

         const usersChunked = [];
         for await (const users of client.user.listChunked(2)) {
            usersChunked.push(users.map((user) => user.toDict()));
         }

         expect(usersChunked).toEqual(expectedUsersData);
      });
   });
});
