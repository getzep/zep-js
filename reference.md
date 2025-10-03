# Reference

## Graph

<details><summary><code>client.graph.<a href="/src/api/resources/graph/client/Client.ts">listEntityTypes</a>({ ...params }) -> Zep.EntityTypeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns all entity types for a project, user, or graph.

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

**request:** `Zep.GraphListEntityTypesRequest`

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

<details><summary><code>client.graph.<a href="/src/api/resources/graph/client/Client.ts">setEntityTypesInternal</a>({ ...params }) -> Zep.SuccessResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Sets the entity types for multiple users and graphs, replacing any existing ones.

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

<details><summary><code>client.graph.<a href="/src/api/resources/graph/client/Client.ts">create</a>({ ...params }) -> Zep.Graph</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new graph.

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
await client.graph.create({
    graphId: "graph_id",
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

**request:** `Zep.CreateGraphRequest`

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

<details><summary><code>client.graph.<a href="/src/api/resources/graph/client/Client.ts">listAll</a>({ ...params }) -> Zep.GraphListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns all graphs. In order to list users, use user.list_ordered instead

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
await client.graph.listAll();
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

**request:** `Zep.GraphListAllRequest`

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

<details><summary><code>client.graph.<a href="/src/api/resources/graph/client/Client.ts">get</a>(graphId) -> Zep.Graph</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a graph.

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
await client.graph.get("graphId");
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

**graphId:** `string` — The graph_id of the graph to get.

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

<details><summary><code>client.graph.<a href="/src/api/resources/graph/client/Client.ts">delete</a>(graphId) -> Zep.SuccessResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a graph. If you would like to delete a user graph, make sure to use user.delete instead.

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
await client.graph.delete("graphId");
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

**graphId:** `string` — Graph ID

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

<details><summary><code>client.graph.<a href="/src/api/resources/graph/client/Client.ts">update</a>(graphId, { ...params }) -> Zep.Graph</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates information about a graph.

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
await client.graph.update("graphId");
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

**graphId:** `string` — Graph ID

</dd>
</dl>

<dl>
<dd>

**request:** `Zep.UpdateGraphRequest`

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

Returns most relevant context from the user graph (including memory from any/all past threads) based on the content of the past few messages of the given thread.

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

**threadId:** `string` — The ID of the current thread (for which context is being retrieved).

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
            role: "norole",
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

<details><summary><code>client.thread.<a href="/src/api/resources/thread/client/Client.ts">addMessagesBatch</a>(threadId, { ...params }) -> Zep.AddThreadMessagesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add messages to a thread in batch mode. This will process messages concurrently, which is useful for data migrations.

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
await client.thread.addMessagesBatch("threadId", {
    messages: [
        {
            content: "content",
            role: "norole",
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

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">getThreads</a>(userId) -> Zep.Thread[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns all threads for a user.

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
await client.user.getThreads("userId");
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

<details><summary><code>client.graph.edge.<a href="/src/api/resources/graph/resources/edge/client/Client.ts">getByGraphId</a>(graphId, { ...params }) -> Zep.EntityEdge[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns all edges for a graph.

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
await client.graph.edge.getByGraphId("graph_id", {});
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

**graphId:** `string` — Graph ID

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

<details><summary><code>client.graph.episode.<a href="/src/api/resources/graph/resources/episode/client/Client.ts">getByGraphId</a>(graphId, { ...params }) -> Zep.EpisodeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns episodes by graph id.

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
await client.graph.episode.getByGraphId("graph_id");
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

**graphId:** `string` — Graph ID

</dd>
</dl>

<dl>
<dd>

**request:** `Zep.graph.EpisodeGetByGraphIdRequest`

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

<details><summary><code>client.graph.node.<a href="/src/api/resources/graph/resources/node/client/Client.ts">getByGraphId</a>(graphId, { ...params }) -> Zep.EntityNode[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns all nodes for a graph.

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
await client.graph.node.getByGraphId("graph_id", {});
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

**graphId:** `string` — Graph ID

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
