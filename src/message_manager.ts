import { Message } from "./message_models";

import { IZepClient } from "./interfaces";
import { handleRequest } from "./utils";

export default class MessageManager {
   client: IZepClient;

   constructor(client: IZepClient) {
      this.client = client;
   }

   async getSessionMessages(
      sessionId: string,
      limit?: number,
      cursor?: number,
   ): Promise<Message[]> {
      if (!sessionId || sessionId.trim() === "") {
         throw new Error("sessionId must be provided");
      }

      let url = this.client.getFullUrl(
         `/sessions/${encodeURIComponent(sessionId)}/messages`,
      );

      const params = new URLSearchParams();
      if (limit) params.append("limit", limit.toString());
      if (cursor) params.append("cursor", cursor.toString());

      if (params.toString()) url += `?${params.toString()}`;

      const response = await handleRequest(
         fetch(url, {
            method: "GET",
            headers: {
               ...this.client.headers,
               "Content-Type": "application/json",
            },
         }),
         `No session found for session ${sessionId}`,
      );

      const responseData = await response.json();
      return responseData.messages.map((message: any) => new Message(message));
   }

   async getSessionMessage(
      sessionId: string,
      messageId: string,
   ): Promise<Message> {
      if (!sessionId || sessionId.trim() === "") {
         throw new Error("sessionId must be provided");
      }

      if (!messageId || messageId.trim() === "") {
         throw new Error("messageId must be provided");
      }

      const response = await handleRequest(
         fetch(
            this.client.getFullUrl(
               `/sessions/${encodeURIComponent(
                  sessionId,
               )}/messages/${encodeURIComponent(messageId)}`,
            ),
            {
               headers: this.client.headers,
            },
         ),
         `No session found for session ${sessionId}, or message ${messageId}`,
      );

      const responseData = await response.json();

      return new Message(responseData);
   }

   async updateSessionMessageMetadata(
      sessionId: string,
      messageId: string,
      metadata: Record<string, any>,
   ): Promise<Message> {
      if (!sessionId || sessionId.trim() === "") {
         throw new Error("sessionId must be provided");
      }

      if (!messageId || messageId.trim() === "") {
         throw new Error("messageId must be provided");
      }

      const response = await handleRequest(
         fetch(
            this.client.getFullUrl(
               `/sessions/${encodeURIComponent(
                  sessionId,
               )}/messages/${encodeURIComponent(messageId)}`,
            ),
            {
               method: "PATCH",
               headers: this.client.headers,
               body: JSON.stringify({
                  metadata,
               }),
            },
         ),
         `No session found for session ${sessionId}, or message ${messageId}`,
      );

      const responseData = await response.json();

      return new Message(responseData);
   }
}
