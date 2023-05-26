   import {
      ZepClient,      
      Memory,
      Message,
      SearchPayload,
      NotFoundError,
   } from "@getzep/zep-js";

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

      // Add memory
      try {
         const history = [
            {  "role": "human", 
               "content": "Who was Octavia Butler?"
            },
            {
               "role": "ai",
               "content": (
                     "Octavia Estelle Butler (June 22, 1947 – February 24, 2006) was an American" + 
                     " science fiction author."
               ),
            },
            {"role": "human", "content": "Which books of hers were made into movies?"},
            {
               "role": "ai",
               "content": (
                     "The most well-known adaptation of Octavia Butler's work is the FX series" + 
                     " Kindred, based on her novel of the same name."
               ),
            },
            {"role": "human", "content": "Who were her contemporaries?"},
            {
               "role": "ai",
               "content": (
                     "Octavia Butler's contemporaries included Ursula K. Le Guin, Samuel R." + 
                     " Delany, and Joanna Russ."
               ),
            },
            {"role": "human", "content": "What awards did she win?"},
            {
               "role": "ai",
               "content": (
                     "Octavia Butler won the Hugo Award, the Nebula Award, and the MacArthur" + 
                     " Fellowship."
               ),
            },
            {
               "role": "human",
               "content": "Which other women sci-fi writers might I want to read?",
            },
            {
               "role": "ai",
               "content": "You might want to read Ursula K. Le Guin or Joanna Russ.",
            },
            {
               "role": "human",
               "content": (
                     "Write a short synopsis of Butler's book, Parable of the Sower. What is it" +
                     " about?"
               ),
            },
            {
               "role": "ai",
               "content": (
                     "Parable of the Sower is a science fiction novel by Octavia Butler," + 
                     " published in 1993. It follows the story of Lauren Olamina, a young woman" + 
                     " living in a dystopian future where society has collapsed due to" + 
                     " environmental disasters, poverty, and violence."
               ),
            },
         ];  

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
               console.debug(message.metadata);
               console.debug(message.toDict());
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
         const searchText = "Ursula";
         console.debug("Searching memory...", searchText);

         const searchPayload = new SearchPayload({ meta: {}, text: searchText });
         const searchResults = await client.searchMemory(
            sessionID,
            searchPayload
         );

         searchResults.forEach((searchResult) => {
            const messageContent = searchResult.message?.content;
            console.debug("Search Result: ", messageContent);
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
