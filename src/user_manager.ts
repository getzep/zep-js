import { User, CreateUserRequest, UpdateUserRequest } from "./user_models";
import { Session } from "./memory_models";
import { IZepClient } from "./interfaces";
import { API_BASEURL, handleRequest } from "./utils";

export default class UserManager {
   client: IZepClient;

   constructor(client: IZepClient) {
      this.client = client;
   }

   getFullUrl(endpoint: string): string {
      return `${this.client.baseURL}${API_BASEURL}${endpoint}`;
   }

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
