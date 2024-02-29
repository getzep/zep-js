import { v4 as uuidv4 } from "uuid";
import {
   ICreateUserRequest,
   ISession,
   Memory,
   MemorySearchPayload,
   Message,
   NotFoundError,
   Session,
   ZepClient,
} from "../../src";

// @ts-ignore
import { history } from "./history";

function sleep(ms: number) {
   const date = Date.now();
   let currentDate = 0;
   do {
      currentDate = Date.now();
   } while (currentDate - date < ms);
}

async function main() {
   const projectApiKey = process.env.ZEP_API_KEY;
   const projectApiUrl = process.env.ZEP_API_URL;

   const client = await ZepClient.init(projectApiKey, projectApiUrl);

   // Create a user
   const userId = uuidv4();
   const userRequest: ICreateUserRequest = {
      user_id: `amy${userId}`,
      metadata: { role: "admin" },
      email: "amy@acme.com",
      first_name: "Amy",
      last_name: "Wu",
   };
   const user = await client.user.add(userRequest);
   console.debug("Created user ", user.toDict());

   // Example session ID
   const sessionID = uuidv4();

   // Add session associated with the above user
   try {
      const sessionData: ISession = {
         session_id: sessionID,
         metadata: { foo: "bar" },
         user_id: user.user_id,
      };
      const session = new Session(sessionData);

      await client.memory.addSession(session);
      console.debug("Adding new session ", sessionID);
   } catch (error) {
      console.debug("Got error:", error);
   }

   // Get session
   try {
      const session = await client.memory.getSession(sessionID);
      console.debug("Retrieved session ", session.toDict());
   } catch (error) {
      console.debug("Got error:", error);
   }

   // Add memory. We could do this in a batch, but we'll do it one by one rather to
   // ensure that summaries and other artifacts are generated correctly.
   try {
      for (const { role, roleType, content } of history) {
         const message = new Message({ role, roleType, content });
         const memory = new Memory({ messages: [message] });

         await client.memory.addMemory(sessionID, memory);
      }
      console.debug("Added new memory for session ", sessionID);
   } catch (error) {
      console.debug("Got error:", error);
   }

   console.log("Sleeping for 5 seconds to let background tasks complete...");
   sleep(5000); // Sleep for 5 seconds
   console.log("Done sleeping!");

   // Get newly added memory
   try {
      console.debug(
         "Getting memory for newly added memory with sessionid ",
         sessionID,
      );
      const memory = await client.memory.getMemory(sessionID);
      if (memory) {
         memory.messages.forEach((message) => {
            console.debug(JSON.stringify(message));
         });
      }
   } catch (error) {
      if (error instanceof NotFoundError) {
         console.error("Session not found:", error.message);
      } else {
         console.error("Got error:", error);
      }
   }

   // get session messages
   let sessionMessages: any[] = [];
   try {
      sessionMessages = await client.message.getSessionMessages(
         sessionID,
         10,
         1,
      );
      console.debug("Session messages: ", JSON.stringify(sessionMessages));
   } catch (error) {
      if (error instanceof NotFoundError) {
         console.error("Session not found:", error.message);
      } else {
         console.error("Got error:", error);
      }
   }

   const firstSessionsMessageId = sessionMessages[0].uuid;

   // Update session message metadata
   try {
      const metadata = { metadata: { foo: "bar" } };
      const updatedMessage = await client.message.updateSessionMessageMetadata(
         sessionID,
         firstSessionsMessageId,
         metadata,
      );
      console.debug("Updated message: ", JSON.stringify(updatedMessage));
   } catch (error) {
      if (error instanceof NotFoundError) {
         console.error("Session not found:", error.message);
      } else {
         console.error("Got error:", error);
      }
   }

   // Get session message

   try {
      const message = await client.message.getSessionMessage(
         sessionID,
         firstSessionsMessageId,
      );
      console.debug("Session message: ", JSON.stringify(message));
   } catch (error) {
      if (error instanceof NotFoundError) {
         console.error("Session not found:", error.message);
      } else {
         console.error("Got error:", error);
      }
   }

   // Search messages in memory
   try {
      const searchText = "Name some books that are about dystopian futures.";
      console.debug("Searching memory...", searchText);

      const searchPayload = new MemorySearchPayload({
         metadata: {
            where: {
               and: [
                  {
                     jsonpath:
                        '$.system.entities[*] ? (@.Label == "WORK_OF_ART")',
                  },
                  {
                     jsonpath:
                        '$.system.entities[*] ? (@.Name like_regex "^parable*" flag "i")',
                  },
               ],
            },
         },
         text: searchText,
      });
      const searchResults = await client.memory.searchMemory(
         sessionID,
         searchPayload,
      );

      searchResults.forEach((searchResult) => {
         console.debug("Search Result: ", JSON.stringify(searchResult.message));
         console.debug(
            "Search Result Score: ",
            JSON.stringify(searchResult.score),
         );
      });
   } catch (error) {
      if (error instanceof NotFoundError) {
         console.error("Session not found:", error.message);
      } else {
         console.error("Got error:", error);
      }
   }

   // Search messages in memory with MMR and lambda=0.6
   try {
      const searchText = "Name some books that are about dystopian futures.";
      console.debug("Searching memory with MMR...", searchText);

      const searchPayload = new MemorySearchPayload({
         text: searchText,
         search_type: "mmr",
         mmr_lambda: 0.6,
      });
      const searchResults = await client.memory.searchMemory(
         sessionID,
         searchPayload,
         3,
      );

      searchResults.forEach((searchResult) => {
         console.debug("Search Result: ", JSON.stringify(searchResult.message));
         console.debug(
            "Search Result Score: ",
            JSON.stringify(searchResult.score),
         );
      });
   } catch (error) {
      if (error instanceof NotFoundError) {
         console.error("Session not found:", error.message);
      } else {
         console.error("Got error:", error);
      }
   }

   // Search summaries in memory with MMR and lambda=0.6
   try {
      const searchText = "Name some books that are about dystopian futures.";
      console.debug("Searching summaries with MMR...", searchText);

      const searchPayload = new MemorySearchPayload({
         text: searchText,
         search_scope: "summary",
         search_type: "mmr",
         mmr_lambda: 0.6,
      });
      const searchResults = await client.memory.searchMemory(
         sessionID,
         searchPayload,
         3,
      );

      searchResults.forEach((searchResult) => {
         console.debug("Search Result: ", JSON.stringify(searchResult.summary));
         console.debug(
            "Search Result Score: ",
            JSON.stringify(searchResult.score),
         );
      });
   } catch (error) {
      if (error instanceof NotFoundError) {
         console.error("Session not found:", error.message);
      } else {
         console.error("Got error:", error);
      }
   }
}

main();
