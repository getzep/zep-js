import {
   Memory,
   MemorySearchPayload,
   Message,
   NotFoundError,
   Session,
   SessionData,
   ZepClient,
} from "../src";

import { history } from "./history";

import { v4 as uuidv4 } from "uuid";

async function main() {
   const baseURL = "http://localhost:8000"; // Replace with Zep API URL
   const client = new ZepClient(baseURL);

   // Example session ID
   let sessionID = uuidv4();

   // Initialize client
   const isInitialized = await client.init();
   if (!isInitialized) {
      console.debug("Unable to reach Zep server at ", baseURL);
      return;
   }

   function sleep(ms: number) {
      const date = Date.now();
      let currentDate = 0;
      do {
         currentDate = Date.now();
      } while (currentDate - date < ms);
   }

   // Add session
   try {
      const sessionData: SessionData = {
         session_id: sessionID,
         metadata: {"foo": "bar"},
      };
      const session = new Session(sessionData);

      await client.addSession(session);
      console.debug("Adding new session ", sessionID);
   } catch (error) {
      console.debug("Got error:", error);
   }

   // Get session
   try {
      const session = await client.getSession(sessionID);
      console.debug("Retrieved session ", session.toDict());
   } catch (error) {
      console.debug("Got error:", error);
   }

   // Add memory
   try {
      const messages = history.map(
         ({ role, content }) => new Message({ role, content })
      );
      const memory = new Memory({ messages });

      await client.addMemory(sessionID, memory);
      console.debug("Adding new memory for session ", sessionID);
   } catch (error) {
      console.debug("Got error:", error);
   }

   console.log("Sleeping for 3 seconds...");
   sleep(3000); // Sleep for 3 seconds
   console.log("Done sleeping!");

   // Get newly added memory
   try {
      console.debug(
         "Getting memory for newly added memory with sessionid ",
         sessionID
      );
      const memory = await client.getMemory(sessionID);
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

   // Search memory
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
      const searchResults = await client.searchMemory(sessionID, searchPayload);

      searchResults.forEach((searchResult) => {
         console.debug("Search Result: ", JSON.stringify(searchResult.message));
         console.debug(
            "Search Result Distance: ",
            JSON.stringify(searchResult.dist)
         );
      });
   } catch (error) {
      if (error instanceof NotFoundError) {
         console.error("Session not found:", error.message);
      } else {
         console.error("Got error:", error);
      }
   }

   // Delete memory
   try {
      const deleteResult = await client.deleteMemory(sessionID);
      console.debug(deleteResult);
   } catch (error) {
      if (error instanceof NotFoundError) {
         console.error("Session not found:", error.message);
      } else {
         console.error("Got error:", error);
      }
   }
}

main();
