
## BaseDocument


<details><summary> <code>zep.baseDocument.<a href="./src/api/resources/baseDocument/client/Client.ts">updateDocument</a>(collectionName, documentUuid, { ...params }) -> string</code> </summary>

<dl>

<dd>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await zep.baseDocument.updateDocument("collectionName", "documentUUID");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>


**collectionName: `string`** — Name of the Document Collection


</dd>

</dl>

<dl>

<dd>


**documentUuid: `string`** — UUID of the Document to be updated


</dd>

</dl>

<dl>

<dd>


**request: `Zep.UpdateDocumentRequest`** 


</dd>

</dl>

<dl>

<dd>


**requestOptions: `BaseDocument.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>


<details><summary> <code>zep.baseDocument.<a href="./src/api/resources/baseDocument/client/Client.ts">getDocument</a>(collectionName, documentUuid) -> Zep.DocumentResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Returns specified Document from a DocumentCollection.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await zep.baseDocument.getDocument("collectionName", "documentUUID");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>


**collectionName: `string`** — Name of the Document Collection


</dd>

</dl>

<dl>

<dd>


**documentUuid: `string`** — UUID of the Document to be updated


</dd>

</dl>

<dl>

<dd>


**requestOptions: `BaseDocument.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>


<details><summary> <code>zep.baseDocument.<a href="./src/api/resources/baseDocument/client/Client.ts">listCollections</a>() -> Zep.DocumentCollectionResponse[][]</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Returns a list of all DocumentCollections.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await zep.baseDocument.listCollections();
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>


**requestOptions: `BaseDocument.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>


<details><summary> <code>zep.baseDocument.<a href="./src/api/resources/baseDocument/client/Client.ts">getCollection</a>(collectionName) -> Zep.DocumentCollectionResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Returns a DocumentCollection if it exists.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await zep.baseDocument.getCollection("collectionName");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>


**collectionName: `string`** — Name of the Document Collection


</dd>

</dl>

<dl>

<dd>


**requestOptions: `BaseDocument.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>


<details><summary> <code>zep.baseDocument.<a href="./src/api/resources/baseDocument/client/Client.ts">addCollection</a>(collectionName, { ...params }) -> string</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

If a collection with the same name already exists, an error will be returned.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await zep.baseDocument.addCollection("collectionName", {
    embeddingDimensions: 1,
    isAutoEmbedded: true,
    name: "name"
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>


**collectionName: `string`** — Name of the Document Collection


</dd>

</dl>

<dl>

<dd>


**request: `Zep.CreateDocumentCollectionRequest`** 


</dd>

</dl>

<dl>

<dd>


**requestOptions: `BaseDocument.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>


<details><summary> <code>zep.baseDocument.<a href="./src/api/resources/baseDocument/client/Client.ts">deleteCollection</a>(collectionName) -> string</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

If a collection with the same name already exists, it will be overwritten.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await zep.baseDocument.deleteCollection("collectionName");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>


**collectionName: `string`** — Name of the Document Collection


</dd>

</dl>

<dl>

<dd>


**requestOptions: `BaseDocument.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>


<details><summary> <code>zep.baseDocument.<a href="./src/api/resources/baseDocument/client/Client.ts">updateCollection</a>(collectionName, { ...params }) -> string</code> </summary>

<dl>

<dd>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await zep.baseDocument.updateCollection("collectionName");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>


**collectionName: `string`** — Name of the Document Collection


</dd>

</dl>

<dl>

<dd>


**request: `Zep.UpdateDocumentCollectionRequest`** 


</dd>

</dl>

<dl>

<dd>


**requestOptions: `BaseDocument.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>


<details><summary> <code>zep.baseDocument.<a href="./src/api/resources/baseDocument/client/Client.ts">addDocuments</a>(collectionName, { ...params }) -> string[]</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Creates Documents in a specified DocumentCollection and returns their UUIDs.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await zep.baseDocument.addDocuments("collectionName", [{}]);
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>


**collectionName: `string`** — Name of the Document Collection


</dd>

</dl>

<dl>

<dd>


**request: `Zep.CreateDocumentRequest[]`** 


</dd>

</dl>

<dl>

<dd>


**requestOptions: `BaseDocument.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>


<details><summary> <code>zep.baseDocument.<a href="./src/api/resources/baseDocument/client/Client.ts">batchDeleteDocuments</a>(collectionName, { ...params }) -> string</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Deletes specified Documents from a DocumentCollection.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await zep.baseDocument.batchDeleteDocuments("collectionName", ["string"]);
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>


**collectionName: `string`** — Name of the Document Collection


</dd>

</dl>

<dl>

<dd>


**request: `string[]`** 


</dd>

</dl>

<dl>

<dd>


**requestOptions: `BaseDocument.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>


<details><summary> <code>zep.baseDocument.<a href="./src/api/resources/baseDocument/client/Client.ts">batchGetDocuments</a>(collectionName, { ...params }) -> Zep.DocumentResponse[][]</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Returns Documents from a DocumentCollection specified by UUID or ID.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await zep.baseDocument.batchGetDocuments("collectionName");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>


**collectionName: `string`** — Name of the Document Collection


</dd>

</dl>

<dl>

<dd>


**request: `Zep.GetDocumentListRequest`** 


</dd>

</dl>

<dl>

<dd>


**requestOptions: `BaseDocument.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>


<details><summary> <code>zep.baseDocument.<a href="./src/api/resources/baseDocument/client/Client.ts">batchUpdateDocuments</a>(collectionName, { ...params }) -> string</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Updates Documents in a specified DocumentCollection.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await zep.baseDocument.batchUpdateDocuments("collectionName", [{
        uuid: "uuid"
    }]);
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>


**collectionName: `string`** — Name of the Document Collection


</dd>

</dl>

<dl>

<dd>


**request: `Zep.UpdateDocumentListRequest[]`** 


</dd>

</dl>

<dl>

<dd>


**requestOptions: `BaseDocument.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>


<details><summary> <code>zep.baseDocument.<a href="./src/api/resources/baseDocument/client/Client.ts">deleteDocument</a>(collectionName, documentUuid) -> string</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Delete specified Document from a DocumentCollection.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await zep.baseDocument.deleteDocument("collectionName", "documentUUID");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>


**collectionName: `string`** — Name of the Document Collection


</dd>

</dl>

<dl>

<dd>


**documentUuid: `string`** — UUID of the Document to be deleted


</dd>

</dl>

<dl>

<dd>


**requestOptions: `BaseDocument.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>


<details><summary> <code>zep.baseDocument.<a href="./src/api/resources/baseDocument/client/Client.ts">createCollectionIndex</a>(collectionName, { ...params }) -> string</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Creates an index for the specified DocumentCollection to improve query performance.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await zep.baseDocument.createCollectionIndex("collectionName");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>


**collectionName: `string`** — Name of the Document Collection


</dd>

</dl>

<dl>

<dd>


**request: `Zep.BaseDocumentCreateCollectionIndexRequest`** 


</dd>

</dl>

<dl>

<dd>


**requestOptions: `BaseDocument.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>


<details><summary> <code>zep.baseDocument.<a href="./src/api/resources/baseDocument/client/Client.ts">search</a>(collectionName, { ...params }) -> Zep.DocumentSearchResultPage</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Searches Documents in a DocumentCollection based on provided search criteria.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await zep.baseDocument.search("collectionName");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>


**collectionName: `string`** — Name of the Document Collection


</dd>

</dl>

<dl>

<dd>


**request: `Zep.DocumentSearchPayload`** 


</dd>

</dl>

<dl>

<dd>


**requestOptions: `BaseDocument.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>




## BaseMemory


<details><summary> <code>zep.baseMemory.<a href="./src/api/resources/baseMemory/client/Client.ts">listSessions</a>({ ...params }) -> Zep.Session[][]</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

get all sessions with optional limit and cursor for pagination

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await zep.baseMemory.listSessions();
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>


**request: `Zep.BaseMemoryListSessionsRequest`** 


</dd>

</dl>

<dl>

<dd>


**requestOptions: `BaseMemory.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>


<details><summary> <code>zep.baseMemory.<a href="./src/api/resources/baseMemory/client/Client.ts">addSession</a>({ ...params }) -> Zep.Session</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

add session by id

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await zep.baseMemory.addSession();
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>


**request: `Zep.CreateSessionRequest`** 


</dd>

</dl>

<dl>

<dd>


**requestOptions: `BaseMemory.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>


<details><summary> <code>zep.baseMemory.<a href="./src/api/resources/baseMemory/client/Client.ts">listSessionsPaginated</a>({ ...params }) -> Zep.Session[]</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Get all sessions with optional limit and cursor for pagination.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await zep.baseMemory.listSessionsPaginated();
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>


**request: `Zep.BaseMemoryListSessionsPaginatedRequest`** 


</dd>

</dl>

<dl>

<dd>


**requestOptions: `BaseMemory.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>


<details><summary> <code>zep.baseMemory.<a href="./src/api/resources/baseMemory/client/Client.ts">getSession</a>(sessionId) -> Zep.Session</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

get session by id

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await zep.baseMemory.getSession("sessionId");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>


**sessionId: `string`** — Session ID


</dd>

</dl>

<dl>

<dd>


**requestOptions: `BaseMemory.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>


<details><summary> <code>zep.baseMemory.<a href="./src/api/resources/baseMemory/client/Client.ts">updateSession</a>(sessionId, { ...params }) -> Zep.Session</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

add session by id

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await zep.baseMemory.updateSession("sessionId");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>


**sessionId: `string`** — Session ID


</dd>

</dl>

<dl>

<dd>


**request: `Zep.UpdateSessionRequest`** 


</dd>

</dl>

<dl>

<dd>


**requestOptions: `BaseMemory.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>


<details><summary> <code>zep.baseMemory.<a href="./src/api/resources/baseMemory/client/Client.ts">classifySession</a>(sessionId, { ...params }) -> Zep.ClassifySessionResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

classify a session by session id

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await zep.baseMemory.classifySession("sessionId", {
    classes: ["classes"],
    name: "name"
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>


**sessionId: `string`** — Session ID


</dd>

</dl>

<dl>

<dd>


**request: `Zep.ClassifySessionRequest`** 


</dd>

</dl>

<dl>

<dd>


**requestOptions: `BaseMemory.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>


<details><summary> <code>zep.baseMemory.<a href="./src/api/resources/baseMemory/client/Client.ts">get</a>(sessionId, { ...params }) -> Zep.Memory</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

get memory by session id

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await zep.baseMemory.get("sessionId");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>


**sessionId: `string`** — Session ID


</dd>

</dl>

<dl>

<dd>


**request: `Zep.BaseMemoryGetRequest`** 


</dd>

</dl>

<dl>

<dd>


**requestOptions: `BaseMemory.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>


<details><summary> <code>zep.baseMemory.<a href="./src/api/resources/baseMemory/client/Client.ts">create</a>(sessionId, { ...params }) -> void</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

add memory messages by session id

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await zep.baseMemory.create("sessionId", {});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>


**sessionId: `string`** — Session ID


</dd>

</dl>

<dl>

<dd>


**request: `Zep.Memory`** 


</dd>

</dl>

<dl>

<dd>


**requestOptions: `BaseMemory.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>


<details><summary> <code>zep.baseMemory.<a href="./src/api/resources/baseMemory/client/Client.ts">delete</a>(sessionId) -> void</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

delete memory messages by session id

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await zep.baseMemory.delete("sessionId");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>


**sessionId: `string`** — Session ID


</dd>

</dl>

<dl>

<dd>


**requestOptions: `BaseMemory.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>


<details><summary> <code>zep.baseMemory.<a href="./src/api/resources/baseMemory/client/Client.ts">search</a>(sessionId, { ...params }) -> Zep.MemorySearchResult[]</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

search memory messages by session id and query

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await zep.baseMemory.search("sessionId");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>


**sessionId: `string`** — Session ID


</dd>

</dl>

<dl>

<dd>


**request: `Zep.MemorySearchPayload`** 


</dd>

</dl>

<dl>

<dd>


**requestOptions: `BaseMemory.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>


<details><summary> <code>zep.baseMemory.<a href="./src/api/resources/baseMemory/client/Client.ts">getSummaries</a>(sessionId) -> Zep.SummaryListResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Get session summaries by ID

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await zep.baseMemory.getSummaries("sessionId");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>


**sessionId: `string`** — Session ID


</dd>

</dl>

<dl>

<dd>


**requestOptions: `BaseMemory.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>


<details><summary> <code>zep.baseMemory.<a href="./src/api/resources/baseMemory/client/Client.ts">synthesizeQuestion</a>(sessionId, { ...params }) -> Zep.Question</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

synthesize a question by session id

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await zep.baseMemory.synthesizeQuestion("sessionId");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>


**sessionId: `string`** — Session ID


</dd>

</dl>

<dl>

<dd>


**request: `Zep.BaseMemorySynthesizeQuestionRequest`** 


</dd>

</dl>

<dl>

<dd>


**requestOptions: `BaseMemory.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>




## BaseMessages


<details><summary> <code>zep.baseMessages.<a href="./src/api/resources/baseMessages/client/Client.ts">getSessionMessages</a>(sessionId) -> Zep.Message[]</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

get messages by session id

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await zep.baseMessages.getSessionMessages("sessionId");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>


**sessionId: `string`** — Session ID


</dd>

</dl>

<dl>

<dd>


**requestOptions: `BaseMessages.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>


<details><summary> <code>zep.baseMessages.<a href="./src/api/resources/baseMessages/client/Client.ts">getSessionMessage</a>(sessionId, messageId) -> Zep.Message</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

get message by session id and message id

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await zep.baseMessages.getSessionMessage("sessionId", "messageId");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>


**sessionId: `string`** — Session ID


</dd>

</dl>

<dl>

<dd>


**messageId: `string`** — Message ID


</dd>

</dl>

<dl>

<dd>


**requestOptions: `BaseMessages.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>


<details><summary> <code>zep.baseMessages.<a href="./src/api/resources/baseMessages/client/Client.ts">updateMessageMetadata</a>(sessionId, messageId, { ...params }) -> Zep.Message</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

update message metadata by session id and message id

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await zep.baseMessages.updateMessageMetadata("sessionId", "messageId", {});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>


**sessionId: `string`** — Session ID


</dd>

</dl>

<dl>

<dd>


**messageId: `string`** — Message ID


</dd>

</dl>

<dl>

<dd>


**request: `Zep.Message`** 


</dd>

</dl>

<dl>

<dd>


**requestOptions: `BaseMessages.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>




## BaseUser


<details><summary> <code>zep.baseUser.<a href="./src/api/resources/baseUser/client/Client.ts">list</a>({ ...params }) -> Zep.User[][]</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

list all users

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await zep.baseUser.list();
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>


**request: `Zep.BaseUserListRequest`** 


</dd>

</dl>

<dl>

<dd>


**requestOptions: `BaseUser.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>


<details><summary> <code>zep.baseUser.<a href="./src/api/resources/baseUser/client/Client.ts">add</a>({ ...params }) -> Zep.User</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

add user by id

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await zep.baseUser.add();
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>


**request: `Zep.CreateUserRequest`** 


</dd>

</dl>

<dl>

<dd>


**requestOptions: `BaseUser.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>


<details><summary> <code>zep.baseUser.<a href="./src/api/resources/baseUser/client/Client.ts">listOrdered</a>({ ...params }) -> Zep.User[]</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

List all users with pagination.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await zep.baseUser.listOrdered();
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>


**request: `Zep.BaseUserListOrderedRequest`** 


</dd>

</dl>

<dl>

<dd>


**requestOptions: `BaseUser.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>


<details><summary> <code>zep.baseUser.<a href="./src/api/resources/baseUser/client/Client.ts">get</a>(userId) -> Zep.User</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

get user by id

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await zep.baseUser.get("userId");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>


**userId: `string`** — User ID


</dd>

</dl>

<dl>

<dd>


**requestOptions: `BaseUser.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>


<details><summary> <code>zep.baseUser.<a href="./src/api/resources/baseUser/client/Client.ts">delete</a>(userId) -> string</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

delete user by id

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await zep.baseUser.delete("userId");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>


**userId: `string`** — User ID


</dd>

</dl>

<dl>

<dd>


**requestOptions: `BaseUser.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>


<details><summary> <code>zep.baseUser.<a href="./src/api/resources/baseUser/client/Client.ts">update</a>(userId, { ...params }) -> Zep.User</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

update user by id

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await zep.baseUser.update("userId");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>


**userId: `string`** — User ID


</dd>

</dl>

<dl>

<dd>


**request: `Zep.UpdateUserRequest`** 


</dd>

</dl>

<dl>

<dd>


**requestOptions: `BaseUser.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>


<details><summary> <code>zep.baseUser.<a href="./src/api/resources/baseUser/client/Client.ts">getSessions</a>(userId) -> Zep.Session[]</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

list all sessions for a user by user id

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await zep.baseUser.getSessions("userId");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>


**userId: `string`** — User ID


</dd>

</dl>

<dl>

<dd>


**requestOptions: `BaseUser.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>


