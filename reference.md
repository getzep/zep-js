# Reference

## Document

<details><summary><code>client.document.<a href="/src/api/resources/document/client/Client.ts">listCollections</a>() -> Zep.ApidataDocumentCollection[][]</code></summary>
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

```typescript
await client.document.listCollections();
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

**requestOptions:** `Document.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.document.<a href="/src/api/resources/document/client/Client.ts">getCollection</a>(collectionName) -> Zep.ApidataDocumentCollection</code></summary>
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

```typescript
await client.document.getCollection("collectionName");
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

**collectionName:** `string` — Name of the Document Collection

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Document.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.document.<a href="/src/api/resources/document/client/Client.ts">addCollection</a>(collectionName, { ...params }) -> Zep.SuccessResponse</code></summary>
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

```typescript
await client.document.addCollection("collectionName");
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

**collectionName:** `string` — Name of the Document Collection

</dd>
</dl>

<dl>
<dd>

**request:** `Zep.CreateDocumentCollectionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Document.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.document.<a href="/src/api/resources/document/client/Client.ts">deleteCollection</a>(collectionName) -> Zep.SuccessResponse</code></summary>
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

```typescript
await client.document.deleteCollection("collectionName");
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

**collectionName:** `string` — Name of the Document Collection

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Document.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.document.<a href="/src/api/resources/document/client/Client.ts">updateCollection</a>(collectionName, { ...params }) -> Zep.SuccessResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a DocumentCollection

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.document.updateCollection("collectionName");
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

**collectionName:** `string` — Name of the Document Collection

</dd>
</dl>

<dl>
<dd>

**request:** `Zep.UpdateDocumentCollectionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Document.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.document.<a href="/src/api/resources/document/client/Client.ts">addDocuments</a>(collectionName, { ...params }) -> string[][]</code></summary>
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

```typescript
await client.document.addDocuments("collectionName", [
    {
        content: "content",
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

**collectionName:** `string` — Name of the Document Collection

</dd>
</dl>

<dl>
<dd>

**request:** `Zep.CreateDocumentRequest[]`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Document.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.document.<a href="/src/api/resources/document/client/Client.ts">batchDeleteDocuments</a>(collectionName, { ...params }) -> Zep.SuccessResponse</code></summary>
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

```typescript
await client.document.batchDeleteDocuments("collectionName", ["string"]);
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

**collectionName:** `string` — Name of the Document Collection

</dd>
</dl>

<dl>
<dd>

**request:** `string[]`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Document.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.document.<a href="/src/api/resources/document/client/Client.ts">batchGetDocuments</a>(collectionName, { ...params }) -> Zep.ApidataDocument[][]</code></summary>
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

```typescript
await client.document.batchGetDocuments("collectionName");
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

**collectionName:** `string` — Name of the Document Collection

</dd>
</dl>

<dl>
<dd>

**request:** `Zep.GetDocumentListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Document.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.document.<a href="/src/api/resources/document/client/Client.ts">batchUpdateDocuments</a>(collectionName, { ...params }) -> Zep.SuccessResponse</code></summary>
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

```typescript
await client.document.batchUpdateDocuments("collectionName", [
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

**collectionName:** `string` — Name of the Document Collection

</dd>
</dl>

<dl>
<dd>

**request:** `Zep.UpdateDocumentListRequest[]`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Document.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.document.<a href="/src/api/resources/document/client/Client.ts">getsADocumentFromADocumentCollectionByUuid</a>(collectionName, documentUuid) -> Zep.ApidataDocument</code></summary>
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

```typescript
await client.document.getsADocumentFromADocumentCollectionByUuid("collectionName", "documentUUID");
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

**collectionName:** `string` — Name of the Document Collection

</dd>
</dl>

<dl>
<dd>

**documentUuid:** `string` — UUID of the Document to be updated

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Document.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.document.<a href="/src/api/resources/document/client/Client.ts">deleteDocument</a>(collectionName, documentUuid) -> Zep.SuccessResponse</code></summary>
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

```typescript
await client.document.deleteDocument("collectionName", "documentUUID");
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

**collectionName:** `string` — Name of the Document Collection

</dd>
</dl>

<dl>
<dd>

**documentUuid:** `string` — UUID of the Document to be deleted

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Document.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.document.<a href="/src/api/resources/document/client/Client.ts">updatesADocument</a>(collectionName, documentUuid, { ...params }) -> Zep.SuccessResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a Document in a DocumentCollection by UUID

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.document.updatesADocument("collectionName", "documentUUID");
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

**collectionName:** `string` — Name of the Document Collection

</dd>
</dl>

<dl>
<dd>

**documentUuid:** `string` — UUID of the Document to be updated

</dd>
</dl>

<dl>
<dd>

**request:** `Zep.UpdateDocumentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Document.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.document.<a href="/src/api/resources/document/client/Client.ts">search</a>(collectionName, { ...params }) -> Zep.ApidataDocumentSearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Searches over documents in a collection based on provided search criteria. One of text or metadata must be provided. Returns an empty list if no documents are found.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.document.search("collectionName");
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

**collectionName:** `string` — Name of the Document Collection

</dd>
</dl>

<dl>
<dd>

**request:** `Zep.DocumentSearchPayload`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Document.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Graph

<details><summary><code>client.graph.<a href="/src/api/resources/graph/client/Client.ts">listEntityTypes</a>() -> Zep.EntityTypeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns all entity types for a project.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.graph.listEntityTypes();
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

**requestOptions:** `Graph.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.graph.<a href="/src/api/resources/graph/client/Client.ts">setEntityTypesInternal</a>({ ...params }) -> Zep.SuccessResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Sets the entity types for a project, replacing any existing ones.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.graph.setEntityTypesInternal();
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

**request:** `Zep.EntityTypeRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Graph.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.graph.<a href="/src/api/resources/graph/client/Client.ts">add</a>({ ...params }) -> Zep.Episode</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add data to the graph.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.graph.add({
    data: "data",
    type: "text",
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

**request:** `Zep.AddDataRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Graph.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.graph.<a href="/src/api/resources/graph/client/Client.ts">addBatch</a>({ ...params }) -> Zep.Episode[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add data to the graph in batch mode, processing episodes concurrently. Use only for data that is insensitive to processing order.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.graph.addBatch({
    episodes: [
        {
            data: "data",
            type: "text",
        },
    ],
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

**request:** `Zep.AddDataBatchRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Graph.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.graph.<a href="/src/api/resources/graph/client/Client.ts">addFactTriple</a>({ ...params }) -> Zep.AddTripleResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add a fact triple for a user or group

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.graph.addFactTriple({
    fact: "fact",
    factName: "fact_name",
    targetNodeName: "target_node_name",
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

**request:** `Zep.AddTripleRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Graph.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.graph.<a href="/src/api/resources/graph/client/Client.ts">clone</a>({ ...params }) -> Zep.CloneGraphResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Clone a user or group graph.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.graph.clone();
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

**request:** `Zep.CloneGraphRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Graph.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.graph.<a href="/src/api/resources/graph/client/Client.ts">search</a>({ ...params }) -> Zep.GraphSearchResults</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Perform a graph search query.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.graph.search({
    query: "query",
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

**request:** `Zep.GraphSearchQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Graph.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Memory

<details><summary><code>client.memory.<a href="/src/api/resources/memory/client/Client.ts">getFact</a>(factUuid) -> Zep.FactResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deprecated API: get fact by uuid

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.memory.getFact("factUUID");
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

**factUuid:** `string` — Fact UUID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Memory.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.memory.<a href="/src/api/resources/memory/client/Client.ts">deleteFact</a>(factUuid) -> Zep.SuccessResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deprecated API: delete a fact

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.memory.deleteFact("factUUID");
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

**factUuid:** `string` — Fact UUID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Memory.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.memory.<a href="/src/api/resources/memory/client/Client.ts">addSession</a>({ ...params }) -> Zep.Session</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deprecated: Creates a new session. Use thread.create instead.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.memory.addSession({
    sessionId: "session_id",
    userId: "user_id",
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

**request:** `Zep.CreateSessionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Memory.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.memory.<a href="/src/api/resources/memory/client/Client.ts">listSessions</a>({ ...params }) -> Zep.SessionListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deprecated: Returns all sessions. Use GET /threads instead.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.memory.listSessions();
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

**request:** `Zep.MemoryListSessionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Memory.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.memory.<a href="/src/api/resources/memory/client/Client.ts">endSessions</a>({ ...params }) -> Zep.EndSessionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deprecated API: End multiple sessions by their IDs.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.memory.endSessions({
    sessionIds: ["session_ids"],
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

**request:** `Zep.EndSessionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Memory.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.memory.<a href="/src/api/resources/memory/client/Client.ts">searchSessions</a>({ ...params }) -> Zep.SessionSearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deprecated API: Search sessions for the specified query.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.memory.searchSessions({
    text: "text",
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

**request:** `Zep.SessionSearchQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Memory.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.memory.<a href="/src/api/resources/memory/client/Client.ts">getSession</a>(sessionId) -> Zep.Session</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a session.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.memory.getSession("sessionId");
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

**sessionId:** `string` — The unique identifier of the session.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Memory.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.memory.<a href="/src/api/resources/memory/client/Client.ts">updateSession</a>(sessionId, { ...params }) -> Zep.Session</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update Session Metadata. Deprecated: This endpoint is no longer supported and will be removed in a future release.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.memory.updateSession("sessionId", {
    metadata: {
        key: "value",
    },
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

**sessionId:** `string` — The unique identifier of the session.

</dd>
</dl>

<dl>
<dd>

**request:** `Zep.UpdateSessionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Memory.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.memory.<a href="/src/api/resources/memory/client/Client.ts">classifySession</a>(sessionId, { ...params }) -> Zep.SessionClassification</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deprecated: Classifies a session.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.memory.classifySession("sessionId", {
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

**sessionId:** `string` — Session ID

</dd>
</dl>

<dl>
<dd>

**request:** `Zep.ClassifySessionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Memory.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.memory.<a href="/src/api/resources/memory/client/Client.ts">endSession</a>(sessionId, { ...params }) -> Zep.EndSessionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deprecated API: End a session by ID.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.memory.endSession("sessionId");
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

**sessionId:** `string` — Session ID

</dd>
</dl>

<dl>
<dd>

**request:** `Zep.EndSessionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Memory.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.memory.<a href="/src/api/resources/memory/client/Client.ts">extractData</a>(sessionId, { ...params }) -> Record<string, string></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deprecated: extract data from a session by session id

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.memory.extractData("sessionId", {
    lastN: 1,
    modelSchema: "model_schema",
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

**sessionId:** `string` — Session ID

</dd>
</dl>

<dl>
<dd>

**request:** `Zep.ExtractDataRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Memory.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.memory.<a href="/src/api/resources/memory/client/Client.ts">getSessionFacts</a>(sessionId, { ...params }) -> Zep.FactsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deprecated API: get facts for a session

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.memory.getSessionFacts("sessionId");
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

**sessionId:** `string` — Session ID

</dd>
</dl>

<dl>
<dd>

**request:** `Zep.MemoryGetSessionFactsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Memory.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.memory.<a href="/src/api/resources/memory/client/Client.ts">addSessionFacts</a>(sessionId, { ...params }) -> Zep.SuccessResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deprecated API: Adds facts to a session

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.memory.addSessionFacts("sessionId", {
    facts: [
        {
            fact: "fact",
        },
    ],
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

**sessionId:** `string` — Session ID

</dd>
</dl>

<dl>
<dd>

**request:** `Zep.AddFactsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Memory.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.memory.<a href="/src/api/resources/memory/client/Client.ts">get</a>(sessionId, { ...params }) -> Zep.Memory</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deprecated: Returns a memory for a given session. Use thread.get_user_context instead.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.memory.get("sessionId");
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

**sessionId:** `string` — The ID of the session for which to retrieve memory.

</dd>
</dl>

<dl>
<dd>

**request:** `Zep.MemoryGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Memory.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.memory.<a href="/src/api/resources/memory/client/Client.ts">add</a>(sessionId, { ...params }) -> Zep.AddMemoryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deprecated: Add memory to the specified session. Use thread.add_messages instead.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.memory.add("sessionId", {
    messages: [
        {
            content: "content",
            roleType: "norole",
        },
    ],
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

**sessionId:** `string` — The ID of the session to which memory should be added.

</dd>
</dl>

<dl>
<dd>

**request:** `Zep.AddMemoryRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Memory.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.memory.<a href="/src/api/resources/memory/client/Client.ts">delete</a>(sessionId) -> Zep.SuccessResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deprecated: Deletes a session. Use thread.delete instead.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.memory.delete("sessionId");
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

**sessionId:** `string` — The ID of the session for which memory should be deleted.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Memory.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.memory.<a href="/src/api/resources/memory/client/Client.ts">getSessionMessages</a>(sessionId, { ...params }) -> Zep.MessageListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deprecated: Returns messages for a session. Use thread.get instead.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.memory.getSessionMessages("sessionId");
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

**sessionId:** `string` — Session ID

</dd>
</dl>

<dl>
<dd>

**request:** `Zep.MemoryGetSessionMessagesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Memory.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.memory.<a href="/src/api/resources/memory/client/Client.ts">getSessionMessage</a>(sessionId, messageUuid) -> Zep.Message</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deprecated: Use graph.episodes.get instead. Returns a specific message from a session.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.memory.getSessionMessage("sessionId", "messageUUID");
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

**sessionId:** `string` — Soon to be deprecated as this is not needed.

</dd>
</dl>

<dl>
<dd>

**messageUuid:** `string` — The UUID of the message.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Memory.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.memory.<a href="/src/api/resources/memory/client/Client.ts">updateMessageMetadata</a>(sessionId, messageUuid, { ...params }) -> Zep.Message</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the metadata of a message.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.memory.updateMessageMetadata("sessionId", "messageUUID", {
    metadata: {
        key: "value",
    },
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

**sessionId:** `string` — The ID of the session.

</dd>
</dl>

<dl>
<dd>

**messageUuid:** `string` — The UUID of the message.

</dd>
</dl>

<dl>
<dd>

**request:** `Zep.ModelsMessageMetadataUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Memory.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.memory.<a href="/src/api/resources/memory/client/Client.ts">search</a>(sessionId, { ...params }) -> Zep.MemorySearchResult[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.memory.search("sessionId");
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

**sessionId:** `string` — The ID of the session for which memory should be searched.

</dd>
</dl>

<dl>
<dd>

**request:** `Zep.MemorySearchPayload`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Memory.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.memory.<a href="/src/api/resources/memory/client/Client.ts">getSummaries</a>(sessionId) -> Zep.SummaryListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deprecated API: Get session summaries by ID

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.memory.getSummaries("sessionId");
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

**sessionId:** `string` — Session ID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Memory.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.memory.<a href="/src/api/resources/memory/client/Client.ts">synthesizeQuestion</a>(sessionId, { ...params }) -> Zep.Question</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deprecated API: Synthesize a question from the last N messages in the chat history.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.memory.synthesizeQuestion("sessionId");
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

**sessionId:** `string` — The ID of the session.

</dd>
</dl>

<dl>
<dd>

**request:** `Zep.MemorySynthesizeQuestionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Memory.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Group

<details><summary><code>client.group.<a href="/src/api/resources/group/client/Client.ts">add</a>({ ...params }) -> Zep.Group</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new group.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.group.add({
    groupId: "group_id",
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

**request:** `Zep.CreateGroupRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Group.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.group.<a href="/src/api/resources/group/client/Client.ts">getAllGroups</a>({ ...params }) -> Zep.GroupListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns all groups.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.group.getAllGroups();
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

**request:** `Zep.GetGroupsOrderedRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Group.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.group.<a href="/src/api/resources/group/client/Client.ts">getGroup</a>(groupId) -> Zep.Group</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a group.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.group.getGroup("groupId");
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

**groupId:** `string` — The group_id of the group to get.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Group.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.group.<a href="/src/api/resources/group/client/Client.ts">delete</a>(groupId) -> Zep.SuccessResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a group.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.group.delete("groupId");
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

**groupId:** `string` — Group ID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Group.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.group.<a href="/src/api/resources/group/client/Client.ts">update</a>(groupId, { ...params }) -> Zep.Group</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates information about a group.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.group.update("groupId");
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

**groupId:** `string` — Group ID

</dd>
</dl>

<dl>
<dd>

**request:** `Zep.UpdateGroupRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Group.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.group.<a href="/src/api/resources/group/client/Client.ts">getFacts</a>(groupId) -> Zep.FactsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deprecated: Use Get Group Edges instead.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.group.getFacts("groupId");
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

**groupId:** `string` — The group_id of the group to get.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Group.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Thread

<details><summary><code>client.thread.<a href="/src/api/resources/thread/client/Client.ts">listAll</a>({ ...params }) -> Zep.ThreadListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns all threads.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.thread.listAll();
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

**request:** `Zep.ThreadListAllRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Thread.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.thread.<a href="/src/api/resources/thread/client/Client.ts">create</a>({ ...params }) -> Zep.Thread</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Start a new thread.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.thread.create({
    threadId: "thread_id",
    userId: "user_id",
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

**request:** `Zep.CreateThreadRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Thread.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.thread.<a href="/src/api/resources/thread/client/Client.ts">delete</a>(threadId) -> Zep.SuccessResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a thread.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.thread.delete("threadId");
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

**threadId:** `string` — The ID of the thread for which memory should be deleted.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Thread.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.thread.<a href="/src/api/resources/thread/client/Client.ts">getUserContext</a>(threadId, { ...params }) -> Zep.ThreadContextResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns most relevant context for a given thread.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.thread.getUserContext("threadId");
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

**threadId:** `string` — The ID of the thread for which to retrieve context.

</dd>
</dl>

<dl>
<dd>

**request:** `Zep.ThreadGetUserContextRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Thread.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.thread.<a href="/src/api/resources/thread/client/Client.ts">get</a>(threadId, { ...params }) -> Zep.MessageListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns messages for a thread.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.thread.get("threadId");
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

**threadId:** `string` — Thread ID

</dd>
</dl>

<dl>
<dd>

**request:** `Zep.ThreadGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Thread.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.thread.<a href="/src/api/resources/thread/client/Client.ts">addMessages</a>(threadId, { ...params }) -> Zep.AddThreadMessagesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add messages to a thread.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.thread.addMessages("threadId", {
    messages: [
        {
            content: "content",
            roleType: "norole",
        },
    ],
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

**threadId:** `string` — The ID of the thread to which messages should be added.

</dd>
</dl>

<dl>
<dd>

**request:** `Zep.AddThreadMessagesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Thread.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## User

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">add</a>({ ...params }) -> Zep.User</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Adds a user.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.add({
    userId: "user_id",
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

**request:** `Zep.CreateUserRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `User.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">listOrdered</a>({ ...params }) -> Zep.UserListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns all users.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.listOrdered();
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

**request:** `Zep.UserListOrderedRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `User.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">get</a>(userId) -> Zep.User</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a user.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.get("userId");
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

**userId:** `string` — The user_id of the user to get.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `User.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">delete</a>(userId) -> Zep.SuccessResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a user.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.delete("userId");
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

**userId:** `string` — User ID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `User.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">update</a>(userId, { ...params }) -> Zep.User</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a user.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.update("userId");
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

**userId:** `string` — User ID

</dd>
</dl>

<dl>
<dd>

**request:** `Zep.UpdateUserRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `User.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">getFacts</a>(userId) -> Zep.FactsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deprecated: Use Get User Edges instead.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.getFacts("userId");
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

**userId:** `string` — The user_id of the user to get.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `User.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">getNode</a>(userId) -> Zep.UserNodeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a user's node.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.getNode("userId");
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

**userId:** `string` — The user_id of the user to get the node for.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `User.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">getSessions</a>(userId) -> Zep.Session[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns all sessions for a user.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.getSessions("userId");
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

**userId:** `string` — User ID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `User.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Graph Edge

<details><summary><code>client.graph.edge.<a href="/src/api/resources/graph/resources/edge/client/Client.ts">getByGroupId</a>(groupId, { ...params }) -> Zep.EntityEdge[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns all edges for a group.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.graph.edge.getByGroupId("group_id", {});
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

**groupId:** `string` — Group ID

</dd>
</dl>

<dl>
<dd>

**request:** `Zep.GraphEdgesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Edge.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.graph.edge.<a href="/src/api/resources/graph/resources/edge/client/Client.ts">getByUserId</a>(userId, { ...params }) -> Zep.EntityEdge[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns all edges for a user.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.graph.edge.getByUserId("user_id", {});
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

**userId:** `string` — User ID

</dd>
</dl>

<dl>
<dd>

**request:** `Zep.GraphEdgesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Edge.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.graph.edge.<a href="/src/api/resources/graph/resources/edge/client/Client.ts">get</a>(uuid) -> Zep.EntityEdge</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a specific edge by its UUID.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.graph.edge.get("uuid");
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

**uuid:** `string` — Edge UUID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Edge.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.graph.edge.<a href="/src/api/resources/graph/resources/edge/client/Client.ts">delete</a>(uuid) -> Zep.SuccessResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes an edge by UUID.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.graph.edge.delete("uuid");
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

**uuid:** `string` — Edge UUID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Edge.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Graph Episode

<details><summary><code>client.graph.episode.<a href="/src/api/resources/graph/resources/episode/client/Client.ts">getByGroupId</a>(groupId, { ...params }) -> Zep.EpisodeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns episodes by group id.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.graph.episode.getByGroupId("group_id");
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

**groupId:** `string` — Group ID

</dd>
</dl>

<dl>
<dd>

**request:** `Zep.graph.EpisodeGetByGroupIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Episode.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.graph.episode.<a href="/src/api/resources/graph/resources/episode/client/Client.ts">getByUserId</a>(userId, { ...params }) -> Zep.EpisodeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns episodes by user id.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.graph.episode.getByUserId("user_id");
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

**userId:** `string` — User ID

</dd>
</dl>

<dl>
<dd>

**request:** `Zep.graph.EpisodeGetByUserIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Episode.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.graph.episode.<a href="/src/api/resources/graph/resources/episode/client/Client.ts">get</a>(uuid) -> Zep.Episode</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns episodes by UUID

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.graph.episode.get("uuid");
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

**uuid:** `string` — Episode UUID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Episode.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.graph.episode.<a href="/src/api/resources/graph/resources/episode/client/Client.ts">delete</a>(uuid) -> Zep.SuccessResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes an episode by its UUID.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.graph.episode.delete("uuid");
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

**uuid:** `string` — Episode UUID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Episode.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.graph.episode.<a href="/src/api/resources/graph/resources/episode/client/Client.ts">getNodesAndEdges</a>(uuid) -> Zep.EpisodeMentions</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns nodes and edges mentioned in an episode

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.graph.episode.getNodesAndEdges("uuid");
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

**uuid:** `string` — Episode uuid

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Episode.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Graph Node

<details><summary><code>client.graph.node.<a href="/src/api/resources/graph/resources/node/client/Client.ts">getByGroupId</a>(groupId, { ...params }) -> Zep.EntityNode[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns all nodes for a group.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.graph.node.getByGroupId("group_id", {});
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

**groupId:** `string` — Group ID

</dd>
</dl>

<dl>
<dd>

**request:** `Zep.GraphNodesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Node.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.graph.node.<a href="/src/api/resources/graph/resources/node/client/Client.ts">getByUserId</a>(userId, { ...params }) -> Zep.EntityNode[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns all nodes for a user

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.graph.node.getByUserId("user_id", {});
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

**userId:** `string` — User ID

</dd>
</dl>

<dl>
<dd>

**request:** `Zep.GraphNodesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Node.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.graph.node.<a href="/src/api/resources/graph/resources/node/client/Client.ts">getEdges</a>(nodeUuid) -> Zep.EntityEdge[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns all edges for a node

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.graph.node.getEdges("node_uuid");
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

**nodeUuid:** `string` — Node UUID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Node.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.graph.node.<a href="/src/api/resources/graph/resources/node/client/Client.ts">getEpisodes</a>(nodeUuid) -> Zep.EpisodeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns all episodes that mentioned a given node

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.graph.node.getEpisodes("node_uuid");
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

**nodeUuid:** `string` — Node UUID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Node.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.graph.node.<a href="/src/api/resources/graph/resources/node/client/Client.ts">get</a>(uuid) -> Zep.EntityNode</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a specific node by its UUID.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.graph.node.get("uuid");
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

**uuid:** `string` — Node UUID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Node.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
