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

import { history } from "./history";

function sleep(ms: number) {
   const date = Date.now();
   let currentDate = 0;
   do {
      currentDate = Date.now();
   } while (currentDate - date < ms);
}

async function main() {
   const baseURL = "http://127.0.0.1:8000"; // Replace with Zep API URL
   const client = await ZepClient.init(baseURL);

   // Create a user
   const userId = uuidv4();
   const userRequest: ICreateUserRequest = {
      user_id: "amy"+userId,
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

   // Add memory
   try {
      const messages = history.map(
         ({ role, content }) => new Message({ role, content })
      );
      const memory = new Memory({ messages });

      await client.memory.addMemory(sessionID, memory);
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
      const searchResults = await client.memory.searchMemory(
         sessionID,
         searchPayload
      );

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

   
}

main();
