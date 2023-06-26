# Zep: A long-term memory store for conversational AI applications

This is the Javascript client package for the Zep service. For more information about Zep, see https://github.com/getzep/zep

### Installation

```bash
npm install zep-js
```

## Quick Start
Ensure that you have a Zep server running. See https://github.com/getzep/zep.

```typescript
import {ZepClient, Memory, Message, SearchPayload, SearchResult, ZepClientError, UnexpectedResponseError} from "zep-js";

async function main() {
  const base_url = "http://localhost:8000"; // Replace with Zep API URL
  const client = new ZepClient(base_url);

  try {
     // Example usage
     const sessionId = "1a1ab1c";

     // Add memory
     const role = "user";
     const content = "I'm looking to plan a trip to Iceland. Can you help me?"
     const message = new Message({ role, content });
     const memory = new Memory();
     memory.messages = [message];
     const result = await client.addMemoryAsync(sessionId, memory);

    // Search memory
    const searchText = "Iceland";
    const search_payload = new SearchPayload({ meta: {}, text: searchText });
    const search_results = await client.searchMemoryAsync(
      sessionId,
      search_payload
    );

    // Iterate through results and print
    for (const search_result of search_results) {
       const message_content = search_result.message?.content;
       console.log("Search Result: ", message_content);
    }

     // Get Memory
     const memories = await client.getMemoryAsync(sessionId);

    // Delete memory
    const deleteResult = await client.deleteMemoryAsync(sessionId);

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
```

# Zep-JS

Zep JS Client Sync API. 

# ZepClient

`ZepClient` is a TypeScript class for interacting with the Zep API.

## Constructor

- `constructor(baseURL: string)`: Constructs a new ZepClient instance with the given base URL of the Zep API.

## Methods

### getMemory

- `getMemory(sessionId: string, lastn?: number)`: Retrieves memory for a specific session.
  - `sessionId`: The ID of the session to retrieve memory for.
  - `lastn`: (Optional) The number of most recent memories to retrieve.
  - Returns: A promise that resolves to an array of `Memory` objects.
---


### addMemory

- `addMemory(sessionId: string, memory: Memory)`: Adds a new memory to a specific session.
  - `sessionId`: The ID of the session to add the memory to.
  - `memory`: The `Memory` object to add to the session.
  - Returns: A promise that resolves to the added memory.

---

### deleteMemory

- `deleteMemory(sessionId: string)`: Deletes the memory of a specific session.
  - `sessionId`: The ID of the session for which the memory should be deleted.
  - Returns: A promise that resolves to a message indicating the memory has been deleted.
---

### searchMemory

- `searchMemory(sessionId: string, searchPayload: SearchPayload, limit?: number)`: Searches the memory of a specific session based on the search payload provided.
  - `sessionID`: The ID of the session for which the memory should be searched.
  - `searchPayload`: The `SearchPayload` object containing the search criteria.
  - `limit`: (Optional) Limit on the number of search results returned.
  - Returns: A promise that resolves to an array of `SearchResult` objects.
---

## Models

### MessageData

- `uuid`: Optional string for the unique identifier of the message.
- `created_at`: Optional string for the creation timestamp of the message.
- `role`: String for the role of the message sender.
- `content`: String for the content of the message.
- `token_count`: Optional number for the token count of the message.
- `metadata?` : Optional metadata
---

### Message

- `constructor(data: MessageData)`: Constructs a new Message instance.
- `toDict(): MessageData`: Converts the Message instance to a dictionary.
---

### SummaryData

- `uuid`: String for the unique identifier of the summary.
- `created_at`: String for the creation timestamp of the summary.
- `content`: String for the content of the summary.
- `recent_message_uuid`: String for the unique identifier of the most recent message related to the summary.
- `token_count`: Number for the token count of the summary.
---

### Summary

- `constructor(data: SummaryData)`: Constructs a new Summary instance.
- `toDict(): SummaryData`: Converts the Summary instance to a dictionary.
---

### MemoryData

- `messages`: Optional array of MessageData for the messages in the memory.
- `metadata`: Optional object for metadata associated with the memory.
- `summary`: Optional SummaryData for the summary of the memory.
- `uuid`: Optional string for the unique identifier of the memory.
- `created_at`: Optional string for the creation timestamp of the memory.
- `token_count`: Optional number for the token count of the memory.
---

### Memory

- `constructor(data: MemoryData)`: Constructs a new Memory instance.
- `toDict(): MemoryData`: Converts the Memory instance to a dictionary.
---

### MemorySearchPayloadData

- `metadata`: Object for the metadata of the search payload.
- `text`: String for the text to be searched.
---

### MemorySearchPayload

- `constructor(data: MemorySearchPayloadData)`: Constructs a new MemorySearchPayload instance.
---

### MemorySearchResultData

- `message`: Optional MessageData for the message in the search result.
- `metadata`: Metadata associated with the search result.
- `summary`: Optional string for the summary of the search result.
- `dist`: Optional number for the distance of the search result.
---

### MemorySearchResult

- `constructor(data: MemorySearchResultData)`: Constructs a new MemorySearchResult instance.
---

## Exceptions 

### APIError
- `constructor(code: number, message: string)`: Constructs a new APIError instance.
---
### ZepClientError
- Custom error class for ZepClient errors.
- `constructor(message: string, response_data?: any)`: Constructs a new ZepClientError instance.
---
### UnexpectedResponseError
- Custom error class for unexpected API response errors in the ZepClient.
- `constructor(message: string)`: Constructs a new UnexpectedResponseError instance.
---
### NotFoundError
- Custom error class for not found errors in the ZepClient.
- `Constructor: (message: string)`: Constructs a NotFoundError instance
---
### AuthenticationError
- Custom error class for Authentication errors in the ZepClient.
- `Constructor: (message: string)`: Constructs an AuthenticationError instance
---