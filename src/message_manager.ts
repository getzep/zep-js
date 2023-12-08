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
      limit: number = 100,
      offset: number = 1,
   ): Promise<Message[]> {
      if (!sessionId || sessionId.trim() === "") {
         throw new Error("sessionId must be provided");
      }

      const response = await handleRequest(
         fetch(this.client.getFullUrl(`/sessions/${sessionId}/messages`), {
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
               `/sessions/${sessionId}/messages/${messageId}`,
            ),
            {
               headers: this.client.headers,
            },
         ),
         `No session found for session ${sessionId}`,
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
               `/sessions/${sessionId}/messages/${messageId}`,
            ),
            {
               method: "PATCH",
               headers: this.client.headers,
               body: JSON.stringify({
                  metadata,
               }),
            },
         ),
         `No session found for session ${sessionId}`,
      );

      const responseData = await response.json();

      return new Message(responseData);
   }
}
