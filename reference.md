
## Document


<details><summary> <code>zep.document.<a href="./src/api/resources/document/client/Client.ts">update</a>(collectionName, documentUuid, { ...params }) -> string</code> </summary>

<dl>

<dd>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await zep.document.update("collectionName", "documentUUID");
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


<details><summary> <code>zep.document.<a href="./src/api/resources/document/client/Client.ts">get</a>(collectionName, documentUuid) -> Zep.DocumentResponse</code> </summary>

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
await zep.document.get("collectionName", "documentUUID");
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


<details><summary> <code>zep.document.<a href="./src/api/resources/document/client/Client.ts">createMultiple</a>(collectionName, { ...params }) -> string[]</code> </summary>

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
await zep.document.createMultiple("collectionName", [{}]);
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


<details><summary> <code>zep.document.<a href="./src/api/resources/document/client/Client.ts">batchDelete</a>(collectionName, { ...params }) -> string</code> </summary>

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
await zep.document.batchDelete("collectionName", ["string"]);
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


<details><summary> <code>zep.document.<a href="./src/api/resources/document/client/Client.ts">batchGet</a>(collectionName, { ...params }) -> Zep.DocumentResponse[][]</code> </summary>

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
await zep.document.batchGet("collectionName");
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


<details><summary> <code>zep.document.<a href="./src/api/resources/document/client/Client.ts">batchUpdate</a>(collectionName, { ...params }) -> string</code> </summary>

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
await zep.document.batchUpdate("collectionName", [{
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


**requestOptions: `Document.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>


<details><summary> <code>zep.document.<a href="./src/api/resources/document/client/Client.ts">delete</a>(collectionName, documentUuid) -> string</code> </summary>

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
await zep.document.delete("collectionName", "documentUUID");
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




## Collection


<details><summary> <code>zep.collection.<a href="./src/api/resources/collection/client/Client.ts">list</a>() -> Zep.DocumentCollectionResponse[][]</code> </summary>

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
await zep.collection.list();
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


**requestOptions: `Collection.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>


<details><summary> <code>zep.collection.<a href="./src/api/resources/collection/client/Client.ts">get</a>(collectionName) -> Zep.DocumentCollectionResponse</code> </summary>

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
await zep.collection.get("collectionName");
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


**requestOptions: `Collection.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>


<details><summary> <code>zep.collection.<a href="./src/api/resources/collection/client/Client.ts">create</a>(collectionName, { ...params }) -> string</code> </summary>

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
await zep.collection.create("collectionName", {
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


**requestOptions: `Collection.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>


<details><summary> <code>zep.collection.<a href="./src/api/resources/collection/client/Client.ts">delete</a>(collectionName) -> string</code> </summary>

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
await zep.collection.delete("collectionName");
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


**requestOptions: `Collection.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>


<details><summary> <code>zep.collection.<a href="./src/api/resources/collection/client/Client.ts">update</a>(collectionName, { ...params }) -> string</code> </summary>

<dl>

<dd>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await zep.collection.update("collectionName");
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


**requestOptions: `Collection.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>


<details><summary> <code>zep.collection.<a href="./src/api/resources/collection/client/Client.ts">createIndex</a>(collectionName, { ...params }) -> string</code> </summary>

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
await zep.collection.createIndex("collectionName");
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


**request: `Zep.CollectionCreateIndexRequest`** 


</dd>

</dl>

<dl>

<dd>


**requestOptions: `Collection.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>




## Session


<details><summary> <code>zep.session.<a href="./src/api/resources/session/client/Client.ts">list</a>({ ...params }) -> Zep.Session[]</code> </summary>

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
await zep.session.list();
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


**request: `Zep.SessionListRequest`** 


</dd>

</dl>

<dl>

<dd>


**requestOptions: `Session.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>


<details><summary> <code>zep.session.<a href="./src/api/resources/session/client/Client.ts">create</a>({ ...params }) -> Zep.Session</code> </summary>

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
await zep.session.create();
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


**requestOptions: `Session.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>


<details><summary> <code>zep.session.<a href="./src/api/resources/session/client/Client.ts">get</a>(sessionId) -> Zep.Session</code> </summary>

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
await zep.session.get("sessionId");
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


**requestOptions: `Session.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>


<details><summary> <code>zep.session.<a href="./src/api/resources/session/client/Client.ts">update</a>(sessionId, { ...params }) -> Zep.Session</code> </summary>

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
await zep.session.update("sessionId");
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


**requestOptions: `Session.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>


<details><summary> <code>zep.session.<a href="./src/api/resources/session/client/Client.ts">classify</a>(sessionId, { ...params }) -> Zep.ClassifySessionResponse</code> </summary>

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
await zep.session.classify("sessionId", {
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


**requestOptions: `Session.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>


<details><summary> <code>zep.session.<a href="./src/api/resources/session/client/Client.ts">getSummaries</a>(sessionId) -> Zep.SummaryListResponse</code> </summary>

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
await zep.session.getSummaries("sessionId");
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


**requestOptions: `Session.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>




## Memory


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


<details><summary> <code>zep.memory.<a href="./src/api/resources/memory/client/Client.ts">create</a>(sessionId, { ...params }) -> void</code> </summary>

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
await zep.memory.create("sessionId", {});
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


<details><summary> <code>zep.memory.<a href="./src/api/resources/memory/client/Client.ts">delete</a>(sessionId) -> string</code> </summary>

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




## Messages


<details><summary> <code>zep.messages.<a href="./src/api/resources/messages/client/Client.ts">list</a>(sessionId) -> Zep.Message[]</code> </summary>

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
await zep.messages.list("sessionId");
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


**requestOptions: `Messages.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>


<details><summary> <code>zep.messages.<a href="./src/api/resources/messages/client/Client.ts">get</a>(sessionId, messageId) -> Zep.Message</code> </summary>

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
await zep.messages.get("sessionId", "messageId");
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


**requestOptions: `Messages.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>


<details><summary> <code>zep.messages.<a href="./src/api/resources/messages/client/Client.ts">update</a>(sessionId, messageId, { ...params }) -> Zep.Message</code> </summary>

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
await zep.messages.update("sessionId", "messageId", {});
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


**requestOptions: `Messages.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>




## Search


<details><summary> <code>zep.search.<a href="./src/api/resources/search/client/Client.ts">get</a>(sessionId, { ...params }) -> Zep.MemorySearchResult[]</code> </summary>

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
await zep.search.get("sessionId");
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


**requestOptions: `Search.RequestOptions`** 


</dd>

</dl>

</dd>

</dl>



</dd>

</dl>
</details>




## User


<details><summary> <code>zep.user.<a href="./src/api/resources/user/client/Client.ts">list</a>({ ...params }) -> Zep.User[]</code> </summary>

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


<details><summary> <code>zep.user.<a href="./src/api/resources/user/client/Client.ts">create</a>({ ...params }) -> Zep.User</code> </summary>

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
await zep.user.create();
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


<details><summary> <code>zep.user.<a href="./src/api/resources/user/client/Client.ts">listOrdered</a>({ ...params }) -> Zep.User[][]</code> </summary>

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


<details><summary> <code>zep.user.<a href="./src/api/resources/user/client/Client.ts">delete</a>(userId) -> string</code> </summary>

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


<details><summary> <code>zep.user.<a href="./src/api/resources/user/client/Client.ts">listSessions</a>(userId) -> Zep.Session[]</code> </summary>

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
await zep.user.listSessions("userId");
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


