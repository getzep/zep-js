import {
  ZepClient,
  Memory,
  Message,
  SearchPayload,
  SearchResult,
  ZepClientError,
  UnexpectedResponseError,
  NotFoundError,
} from "zep-js";

async function main() {
  const base_url = "http://localhost:8000"; // TODO: Replace with Zep API URL
  const client = new ZepClient(base_url);

  try {
     // Example usage
     const session_id = "1a1a1a";

     // Get memory
     console.log("****** GET MEMORY ******");
     console.log("Getting memory for session ", session_id);
     try {
        const newMemories = await client.getMemoryAsync(session_id);
        for (const memory of newMemories) {
           for (const message of memory.messages) {
              console.log(message.toDict());
           }
        }
     } catch (error) {
        if (error instanceof NotFoundError) {
           console.log("NotFoundError:", error.message);
        } else {
           console.log("Unknown error:", error);
        }
     }

     // Add memory
     console.log("****** ADD MEMORY ******");
     console.log("Adding new memory for session ", session_id);
     const role = "user";
     const content = "who was the first man to go to space";
     const message = new Message({ role, content });

     const memory = new Memory();
     memory.messages = [message];

     const result = await client.addMemoryAsync(session_id, memory);

     // Get newly added memory
     try {
         console.log("Getting memory for newly added memory with sessionid ", session_id);
         const newMemories = await client.getMemoryAsync(session_id);
         for (const memory of newMemories) {
             for (const message of memory.messages) {
               console.log(message.toDict());
             }
         }
      } catch (error) {
        if (error instanceof NotFoundError) {
           console.error("NotFoundError:", error.message);
        } else {
           console.error("Unknown error:", error);
        }
     }

     // Search memory
     const searchText = "Iceland";
     console.log("Searching memory...", searchText);

     const search_payload = new SearchPayload({ meta: {}, text: searchText });
     const search_results = await client.searchMemoryAsync(
        session_id,
        search_payload
     );
     for (const search_result of search_results) {
        const message_content = search_result.message?.content;
        console.log("Search Result: ", message_content);
     }

     // Delete memory
     const deleteResult = await client.deleteMemoryAsync(session_id);
     console.log(deleteResult);

    } catch (error) {
    if (error instanceof ZepClientError) {
      console.error("ZepClientError:", error.message);
    } else if (error instanceof UnexpectedResponseError) {
      console.error("UnexpectedResponseError:", error.message);
    } else {
      console.error("Unknown error:", error);
    }
  }
}

main();
