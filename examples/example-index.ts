import {
  ZepClient,
  Memory,
  Message,
  SearchPayload,
  SearchResult,
  ZepClientError,
  UnexpectedResponseError,
} from "zep-client";

async function main() {
  const base_url = "http://localhost:8000"; // TODO: Replace with Zep API URL
  const client = new ZepClient(base_url);

  try {
    // Example usage
    const session_id = "2a2a2a";

    // Get memory
    console.log("****** GET MEMORY ******");
    console.log("Getting memory for session 3a3a3a");
    const memories = await client.getMemoryAsync("3a3a3a");
    for (const memory of memories) {
      for (const message of memory.messages) {
        console.log(message.toDict());
      }
    }

    // Add memory
    console.log("****** ADD MEMORY ******");
    console.log("Adding new memory for session 2a2a2a");
    const role = "user";
    const content = "who was the first man to go to space";
    const message = new Message({ role, content });

    const memory = new Memory();
    memory.messages = [message];

    const result = await client.addMemoryAsync(session_id, memory);

    const newMemories = await client.getMemoryAsync(session_id);
    for (const memory of newMemories) {
      for (const message of memory.messages) {
        console.log(message.toDict());
      }
    }

    // Delete memory
    const deleteResult = await client.deleteMemoryAsync(session_id);
    console.log(deleteResult);
    console.log("Getting memory for session 2a2a2a");
    const deletedMemories = await client.getMemoryAsync("2a2a2a");
    for (const memory of deletedMemories) {
      for (const message of memory.messages) {
        console.log(message.toDict());
      }
    }

    // Search memory
    const search_payload = new SearchPayload({ meta: {}, text: "Iceland" });
    const search_results = await client.searchMemoryAsync(
      session_id,
      search_payload
    );
    for (const search_result of search_results) {
      const message_content = search_result.message?.content;
      console.log(message_content);
    }
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
