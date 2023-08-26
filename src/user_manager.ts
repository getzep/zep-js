import { User, CreateUserRequest, UpdateUserRequest } from "./user_models";
import { Session } from "./memory_models";
import { IZepClient } from "./interfaces";
import { API_BASEURL, handleRequest } from "./utils";
import { APIError, NotFoundError } from "./errors";

/**
 * UserManager class handles all user related operations such as
 * adding, getting, updating, deleting, listing users and their sessions.
 * It uses the IZepClient interface to make requests to the server.
 */
export default class UserManager {
   client: IZepClient;

   constructor(client: IZepClient) {
      this.client = client;
   }

   getFullUrl(endpoint: string): string {
      return `${this.client.baseURL}${API_BASEURL}${endpoint}`;
   }

   /**
    * Add a new user.
    *
    * @param {CreateUserRequest} user - The user details to be added.
    * @returns {Promise<User>} A Promise that resolves to a User object.
    * @throws {APIError} If the request fails.
    */
   async add(user: CreateUserRequest): Promise<User> {
      const response = await handleRequest(
         fetch(this.getFullUrl(`/user`), {
            method: "POST",
            headers: {
               ...this.client.headers,
               "Content-Type": "application/json",
            },
            body: JSON.stringify(user.toDict()),
         }),
         `Failed to add user ${user.user_id}`
      );

      const responseData = await response.json();

      return new User(responseData);
   }

   /**
    * Get a user by their ID.
    *
    * @param {string} userId - The ID of the user to be retrieved.
    * @returns {Promise<User>} A Promise that resolves to a User object.
    * @throws {NotFoundError} If the request no user is found for the given ID.
    * @throws {APIError} If the request fails.
    */
   async get(userId: string): Promise<User> {
      const response = await handleRequest(
         fetch(this.getFullUrl(`/user/${userId}`), {
            headers: this.client.headers,
         }),
         `No user found for userId ${userId}`
      );

      const responseData = await response.json();

      return new User(responseData);
   }

   /**
    * Update a user's details.
    *
    * @param {UpdateUserRequest} user - The updated user details.
    * @returns {Promise<User>} A Promise that resolves to a User object with the updated details.
    * @throws {NotFoundError} If the request no user is found for the given ID.
    * @throws {APIError} If the request fails.
    */
   async update(user: UpdateUserRequest): Promise<User> {
      const response = await handleRequest(
         fetch(this.getFullUrl(`/user/${user.user_id}`), {
            method: "PATCH",
            headers: {
               ...this.client.headers,
               "Content-Type": "application/json",
            },
            body: JSON.stringify(user.toDict()),
         }),
         `Failed to update user ${user.user_id}`
      );

      const responseData = await response.json();

      return new User(responseData);
   }

   /**
    * Delete a user by their ID.
    *
    * @param {string} userId - The ID of the user to be deleted.
    * @returns {Promise<string>} A Promise that resolves to a string message confirming deletion.
    * @throws {NotFoundError} If the request no user is found for the given ID.
    * @throws {APIError} If the request fails.
    */
   async delete(userId: string): Promise<string> {
      const response = await handleRequest(
         fetch(this.getFullUrl(`/user/${userId}`), {
            method: "DELETE",
            headers: this.client.headers,
         }),
         `Failed to delete user ${userId}`
      );

      return response.text();
   }

   /**
    * List all users.
    *
    * @param {number} limit - The maximum number of users to return.
    * @param {number} cursor - The index to start listing users from.
    * @returns {Promise<User[]>} A Promise that resolves to an array of User objects.
    * @throws {APIError} If the request fails.
    */
   async list(limit?: number, cursor?: number): Promise<User[]> {
      const params = new URLSearchParams();
      if (limit !== undefined) params.append("limit", limit.toString());
      if (cursor !== undefined) params.append("cursor", cursor.toString());

      const response = await handleRequest(
         fetch(`${this.getFullUrl("/user")}?${params.toString()}`, {
            headers: this.client.headers,
         })
      );

      const data = await response.json();

      return data.map((user: any) => new User(user));
   }

   /**
    * Get all sessions for a user.
    *
    * @param {string} userId - The ID of the user to retrieve sessions for.
    * @returns {Promise<Session[]>} A Promise that resolves to an array of Session objects.
    * @throws {NotFoundError} If no sessions are found for the given user ID.
    * @throws {APIError} If the request fails.
    */
   async getSessions(userId: string): Promise<Session[]> {
      const response = await handleRequest(
         fetch(this.getFullUrl(`/user/${userId}/sessions`), {
            headers: this.client.headers,
         }),
         `No sessions found for userId ${userId}`
      );

      const data = await response.json();

      return data.map((session: any) => new Session(session));
   }

   /**
    * List users in chunks.
    *
    * This method retrieves users in chunks of a specified size.
    * It is a generator function that yields each chunk of users as they are retrieved.
    *
    * @param {number} chunkSize - The size of the user chunks to retrieve. Defaults to 100.
    * @yields {Promise<User[]>} A Promise that resolves to an array of User objects.
    * @throws {APIError} If the request fails.
    */
   async *listChunked(chunkSize: number = 100) {
      let cursor: number | undefined;

      while (true) {
         // eslint-disable-next-line no-await-in-loop
         const users = await this.list(chunkSize, cursor);

         if (users.length === 0) {
            // We've reached the last page
            break;
         }

         yield users;

         if (cursor === undefined) {
            cursor = 0;
         }
         cursor += chunkSize;
      }
   }
}
