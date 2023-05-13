   import {
      ZepClient,
      Memory,
      Message,
      SearchPayload,
      NotFoundError,
   } from "zep-js";

   async function main() {
      const baseURL = "http://localhost:8000"; // Replace with Zep API URL
      const client = new ZepClient(baseURL);

      // Example session ID
      const sessionID = "1a1a1a";

      // Get memory
      try {
         const newMemories = await client.getMemoryAsync(sessionID);
         console.debug("Getting memory for session ", sessionID);

         if (newMemories.length === 0) {
            console.debug("No memory found for session ", sessionID);
         } else {
            newMemories.forEach((memory) => {
               memory.messages.forEach((message) => {
                  console.debug(message.toDict());
               });
            });
         }
      } catch (error) {
         // Couldn't find session
         if (error instanceof NotFoundError) {
            console.debug("Session not found:", error.message);
         } else {
            // some other error
            console.debug("Got error:", error);
         }
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

         await client.addMemoryAsync(sessionID, memory);
         console.debug("Adding new memory for session ", sessionID);
      } catch (error) {
         console.debug("Got error:", error);
      }

      // Get newly added memory
      try {
         console.debug(
            "Getting memory for newly added memory with sessionid ",
            sessionID
         );
         const newMemories = await client.getMemoryAsync(sessionID);
         newMemories.forEach((memory) => {
            memory.messages.forEach((message) => {
               console.debug(message.toDict());
            });
         });
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
         const searchResults = await client.searchMemoryAsync(
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
         const deleteResult = await client.deleteMemoryAsync(sessionID);
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
