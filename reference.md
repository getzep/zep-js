## Document

<details><summary> <code>zep.document.<a href="./src/api/resources/document/client/Client.ts">listCollections</a>() -> Zep.DocumentCollectionResponse[][]</code> </summary>

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
await zep.document.listCollections();
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

**requestOptions: `Document.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>zep.document.<a href="./src/api/resources/document/client/Client.ts">getCollection</a>(collectionName) -> Zep.DocumentCollectionResponse</code> </summary>

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
await zep.document.getCollection("collectionName");
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

**requestOptions: `Document.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>zep.document.<a href="./src/api/resources/document/client/Client.ts">addCollection</a>(collectionName, { ...params }) -> void</code> </summary>

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
await zep.document.addCollection("collectionName");
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

**requestOptions: `Document.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>zep.document.<a href="./src/api/resources/document/client/Client.ts">deleteCollection</a>(collectionName) -> void</code> </summary>

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
await zep.document.deleteCollection("collectionName");
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

**requestOptions: `Document.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>zep.document.<a href="./src/api/resources/document/client/Client.ts">updateCollection</a>(collectionName, { ...params }) -> void</code> </summary>

<dl>

<dd>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await zep.document.updateCollection("collectionName");
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

**requestOptions: `Document.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>zep.document.<a href="./src/api/resources/document/client/Client.ts">addDocuments</a>(collectionName, { ...params }) -> string[]</code> </summary>

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
await zep.document.addDocuments("collectionName", [{}]);
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

**requestOptions: `Document.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>zep.document.<a href="./src/api/resources/document/client/Client.ts">batchDeleteDocuments</a>(collectionName, { ...params }) -> void</code> </summary>

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
await zep.document.batchDeleteDocuments("collectionName", ["string"]);
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

**requestOptions: `Document.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>zep.document.<a href="./src/api/resources/document/client/Client.ts">batchGetDocuments</a>(collectionName, { ...params }) -> Zep.DocumentResponse[][]</code> </summary>

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
await zep.document.batchGetDocuments("collectionName");
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

**requestOptions: `Document.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>zep.document.<a href="./src/api/resources/document/client/Client.ts">batchUpdateDocuments</a>(collectionName, { ...params }) -> void</code> </summary>

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
await zep.document.batchUpdateDocuments("collectionName", [
    {
        uuid: "uuid",
    },
]);
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

**requestOptions: `Document.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>zep.document.<a href="./src/api/resources/document/client/Client.ts">getsADocumentFromADocumentCollectionByUuid</a>(collectionName, documentUuid) -> Zep.DocumentResponse</code> </summary>

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
await zep.document.getsADocumentFromADocumentCollectionByUuid("collectionName", "documentUUID");
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

**requestOptions: `Document.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>zep.document.<a href="./src/api/resources/document/client/Client.ts">deleteDocument</a>(collectionName, documentUuid) -> void</code> </summary>

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
await zep.document.deleteDocument("collectionName", "documentUUID");
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

**requestOptions: `Document.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>zep.document.<a href="./src/api/resources/document/client/Client.ts">updatesADocumentInADocumentCollectionByUuid</a>(collectionName, documentUuid, { ...params }) -> void</code> </summary>

<dl>

<dd>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await zep.document.updatesADocumentInADocumentCollectionByUuid("collectionName", "documentUUID");
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

**requestOptions: `Document.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>zep.document.<a href="./src/api/resources/document/client/Client.ts">search</a>(collectionName, { ...params }) -> Zep.DocumentSearchResultPage</code> </summary>

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
await zep.document.search("collectionName");
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

**requestOptions: `Document.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

## Memory

<details><summary> <code>zep.memory.<a href="./src/api/resources/memory/client/Client.ts">addSession</a>({ ...params }) -> Zep.Session</code> </summary>

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
await zep.memory.addSession({
    sessionId: "session_id",
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

**request: `Zep.CreateSessionRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Memory.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>zep.memory.<a href="./src/api/resources/memory/client/Client.ts">listSessions</a>({ ...params }) -> Zep.Session[]</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Get all sessions with optional page number, page size, order by field and order direction for pagination.

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
await zep.memory.listSessions();
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

**request: `Zep.MemoryListSessionsRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Memory.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>zep.memory.<a href="./src/api/resources/memory/client/Client.ts">getSession</a>(sessionId) -> Zep.Session</code> </summary>

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
await zep.memory.getSession("sessionId");
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

**requestOptions: `Memory.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>zep.memory.<a href="./src/api/resources/memory/client/Client.ts">updateSession</a>(sessionId, { ...params }) -> Zep.Session</code> </summary>

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
await zep.memory.updateSession("sessionId", {
    metadata: {},
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

**request: `Zep.UpdateSessionRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Memory.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>zep.memory.<a href="./src/api/resources/memory/client/Client.ts">classifySession</a>(sessionId, { ...params }) -> Zep.ClassifySessionResponse</code> </summary>

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
await zep.memory.classifySession("sessionId", {
    classes: ["classes"],
    name: "name",
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

**requestOptions: `Memory.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>zep.memory.<a href="./src/api/resources/memory/client/Client.ts">extractSessionData</a>(sessionId, { ...params }) -> Record<string, string></code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

extract data from a session by session id

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
await zep.memory.extractSessionData("sessionId", {
    zepDataClasses: [{}],
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

**request: `Zep.ModelsExtractDataRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Memory.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>zep.memory.<a href="./src/api/resources/memory/client/Client.ts">get</a>(sessionId, { ...params }) -> Zep.Memory</code> </summary>

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
await zep.memory.get("sessionId");
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

**request: `Zep.MemoryGetRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Memory.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>zep.memory.<a href="./src/api/resources/memory/client/Client.ts">add</a>(sessionId, { ...params }) -> void</code> </summary>

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
await zep.memory.add("sessionId", {});
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

**requestOptions: `Memory.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>zep.memory.<a href="./src/api/resources/memory/client/Client.ts">delete</a>(sessionId) -> void</code> </summary>

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
await zep.memory.delete("sessionId");
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

**requestOptions: `Memory.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>zep.memory.<a href="./src/api/resources/memory/client/Client.ts">getSessionMessages</a>(sessionId) -> Zep.Message[]</code> </summary>

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
await zep.memory.getSessionMessages("sessionId");
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

**requestOptions: `Memory.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>zep.memory.<a href="./src/api/resources/memory/client/Client.ts">getSessionMessage</a>(sessionId, messageUuid) -> Zep.Message</code> </summary>

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
await zep.memory.getSessionMessage("sessionId", "messageUUID");
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

**messageUuid: `string`** — Message UUID

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Memory.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>zep.memory.<a href="./src/api/resources/memory/client/Client.ts">updateMessageMetadata</a>(sessionId, messageUuid, { ...params }) -> Zep.Message</code> </summary>

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
await zep.memory.updateMessageMetadata("sessionId", "messageUUID", {
    metadata: {},
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

**messageUuid: `string`** — Message UUID

</dd>

</dl>

<dl>

<dd>

**request: `Zep.ModelsMessageMetadataUpdate`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Memory.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>zep.memory.<a href="./src/api/resources/memory/client/Client.ts">search</a>(sessionId, { ...params }) -> Zep.MemorySearchResult[]</code> </summary>

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
await zep.memory.search("sessionId");
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

**requestOptions: `Memory.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>zep.memory.<a href="./src/api/resources/memory/client/Client.ts">getSummaries</a>(sessionId) -> Zep.SummaryListResponse</code> </summary>

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
await zep.memory.getSummaries("sessionId");
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

**requestOptions: `Memory.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>zep.memory.<a href="./src/api/resources/memory/client/Client.ts">synthesizeQuestion</a>(sessionId, { ...params }) -> Zep.Question</code> </summary>

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
await zep.memory.synthesizeQuestion("sessionId");
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

**request: `Zep.MemorySynthesizeQuestionRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Memory.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

## User

<details><summary> <code>zep.user.<a href="./src/api/resources/user/client/Client.ts">list</a>({ ...params }) -> Zep.User[][]</code> </summary>

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
await zep.user.list();
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

**request: `Zep.UserListRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `User.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>zep.user.<a href="./src/api/resources/user/client/Client.ts">add</a>({ ...params }) -> Zep.User</code> </summary>

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
await zep.user.add();
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

**requestOptions: `User.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>zep.user.<a href="./src/api/resources/user/client/Client.ts">listOrdered</a>({ ...params }) -> Zep.User[]</code> </summary>

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
await zep.user.listOrdered();
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

**request: `Zep.UserListOrderedRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `User.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>zep.user.<a href="./src/api/resources/user/client/Client.ts">get</a>(userId) -> Zep.User</code> </summary>

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
await zep.user.get("userId");
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

**requestOptions: `User.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>zep.user.<a href="./src/api/resources/user/client/Client.ts">delete</a>(userId) -> void</code> </summary>

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
await zep.user.delete("userId");
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

**requestOptions: `User.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>zep.user.<a href="./src/api/resources/user/client/Client.ts">update</a>(userId, { ...params }) -> Zep.User</code> </summary>

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
await zep.user.update("userId");
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

**requestOptions: `User.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>zep.user.<a href="./src/api/resources/user/client/Client.ts">getSessions</a>(userId) -> Zep.Session[]</code> </summary>

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
await zep.user.getSessions("userId");
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

**requestOptions: `User.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>
