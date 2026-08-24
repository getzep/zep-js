# Reference
## Batch
<details><summary><code>client.batch.<a href="/src/api/resources/batch/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Zep.Batch, Zep.BatchPage&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.batch.list({
    limit: 1,
    cursor: "cursor",
    status: "status"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.batch.list({
    limit: 1,
    cursor: "cursor",
    status: "status"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

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

**request:** `Zep.BatchListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BatchClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.batch.<a href="/src/api/resources/batch/client/Client.ts">create</a>({ ...params }) -> Zep.Batch</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.batch.create();

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

**request:** `Zep.CreateBatchRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BatchClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.batch.<a href="/src/api/resources/batch/client/Client.ts">get</a>(batch_uuid) -> Zep.Batch</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.batch.get("batch_uuid");

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

**batch_uuid:** `string` — Batch UUID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BatchClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.batch.<a href="/src/api/resources/batch/client/Client.ts">delete</a>(batch_uuid) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.batch.delete("batch_uuid");

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

**batch_uuid:** `string` — Batch UUID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BatchClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.batch.<a href="/src/api/resources/batch/client/Client.ts">listItems</a>(batch_uuid, { ...params }) -> core.Page&lt;Zep.JsonObject, Zep.JsonObjectPage&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.batch.listItems("batch_uuid", {
    limit: 1,
    cursor: "cursor"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.batch.listItems("batch_uuid", {
    limit: 1,
    cursor: "cursor"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

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

**batch_uuid:** `string` — Batch UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.BatchListItemsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BatchClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.batch.<a href="/src/api/resources/batch/client/Client.ts">addItems</a>(batch_uuid, { ...params }) -> Zep.BatchItemsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.batch.addItems("batch_uuid");

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

**batch_uuid:** `string` — Batch UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.AddBatchItemsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BatchClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.batch.<a href="/src/api/resources/batch/client/Client.ts">process</a>(batch_uuid) -> Zep.ProcessBatchResult</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.batch.process("batch_uuid");

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

**batch_uuid:** `string` — Batch UUID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BatchClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Context
<details><summary><code>client.context.<a href="/src/api/resources/context/client/Client.ts">createTemplate</a>({ ...params }) -> Zep.ContextTemplate</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.context.createTemplate({});

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

**request:** `Zep.CreateContextTemplateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContextClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.context.<a href="/src/api/resources/context/client/Client.ts">listTemplates</a>({ ...params }) -> core.Page&lt;Zep.ContextTemplate, Zep.ContextTemplatePage&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.context.listTemplates({
    limit: 1,
    cursor: "cursor"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.context.listTemplates({
    limit: 1,
    cursor: "cursor"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

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

**request:** `Zep.ContextTemplateListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContextClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.context.<a href="/src/api/resources/context/client/Client.ts">getTemplate</a>(template_uuid) -> Zep.ContextTemplate</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.context.getTemplate("template_uuid");

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

**template_uuid:** `string` — Template UUID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContextClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.context.<a href="/src/api/resources/context/client/Client.ts">updateTemplate</a>(template_uuid, { ...params }) -> Zep.ContextTemplate</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.context.updateTemplate("template_uuid", {});

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

**template_uuid:** `string` — Template UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.CreateContextTemplateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContextClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.context.<a href="/src/api/resources/context/client/Client.ts">deleteTemplate</a>(template_uuid) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.context.deleteTemplate("template_uuid");

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

**template_uuid:** `string` — Template UUID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContextClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Graph
<details><summary><code>client.graph.<a href="/src/api/resources/graph/client/Client.ts">create</a>({ ...params }) -> Zep.Graph</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.graph.create();

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

**requestOptions:** `GraphClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.graph.<a href="/src/api/resources/graph/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Zep.Graph, Zep.GraphPage&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.graph.list({
    limit: 1,
    cursor: "cursor",
    orderBy: "order_by",
    order: "order"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.graph.list({
    limit: 1,
    cursor: "cursor",
    orderBy: "order_by",
    order: "order"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

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

**request:** `Zep.GraphListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GraphClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.graph.<a href="/src/api/resources/graph/client/Client.ts">lookup</a>({ ...params }) -> Zep.Graph</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.graph.lookup({});

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

**request:** `Zep.LookupRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GraphClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.graph.<a href="/src/api/resources/graph/client/Client.ts">get</a>(graph_uuid) -> Zep.Graph</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.graph.get("graph_uuid");

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

**graph_uuid:** `string` — Graph UUID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GraphClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.graph.<a href="/src/api/resources/graph/client/Client.ts">delete</a>(graph_uuid) -> Zep.GraphDeleteResult</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.graph.delete("graph_uuid");

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

**graph_uuid:** `string` — Graph UUID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GraphClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.graph.<a href="/src/api/resources/graph/client/Client.ts">update</a>(graph_uuid, { ...params }) -> Zep.Graph</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.graph.update("graph_uuid");

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

**graph_uuid:** `string` — Graph UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.PatchGraphRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GraphClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.graph.<a href="/src/api/resources/graph/client/Client.ts">clone</a>(graph_uuid, { ...params }) -> Zep.CloneGraphResult</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.graph.clone("graph_uuid");

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

**graph_uuid:** `string` — Graph UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.CloneGraphRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GraphClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.graph.<a href="/src/api/resources/graph/client/Client.ts">getContext</a>(graph_uuid, { ...params }) -> Zep.GraphContextResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.graph.getContext("graph_uuid");

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

**graph_uuid:** `string` — Graph UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.GraphContextRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GraphClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.graph.<a href="/src/api/resources/graph/client/Client.ts">getInstructions</a>(graph_uuid) -> Zep.Instructions</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.graph.getInstructions("graph_uuid");

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

**graph_uuid:** `string` — Graph UUID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GraphClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.graph.<a href="/src/api/resources/graph/client/Client.ts">setInstructions</a>(graph_uuid, { ...params }) -> Zep.Instructions</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.graph.setInstructions("graph_uuid", {});

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

**graph_uuid:** `string` — Graph UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.Instructions` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GraphClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.graph.<a href="/src/api/resources/graph/client/Client.ts">getObservationSteering</a>(graph_uuid) -> Zep.ObservationSteering</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.graph.getObservationSteering("graph_uuid");

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

**graph_uuid:** `string` — Graph UUID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GraphClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.graph.<a href="/src/api/resources/graph/client/Client.ts">setObservationSteering</a>(graph_uuid, { ...params }) -> Zep.ObservationSteering</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.graph.setObservationSteering("graph_uuid", {});

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

**graph_uuid:** `string` — Graph UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.ObservationSteering` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GraphClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.graph.<a href="/src/api/resources/graph/client/Client.ts">getOntology</a>(graph_uuid) -> Zep.Ontology</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.graph.getOntology("graph_uuid");

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

**graph_uuid:** `string` — Graph UUID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GraphClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.graph.<a href="/src/api/resources/graph/client/Client.ts">setOntology</a>(graph_uuid, { ...params }) -> Zep.Ontology</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.graph.setOntology("graph_uuid", {});

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

**graph_uuid:** `string` — Graph UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.Ontology` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GraphClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.graph.<a href="/src/api/resources/graph/client/Client.ts">searchEdges</a>(graph_uuid, { ...params }) -> core.Page&lt;Zep.JsonObject, Zep.JsonObjectPage&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.graph.searchEdges("graph_uuid", {
    limit: 1,
    cursor: "cursor",
    body: {}
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.graph.searchEdges("graph_uuid", {
    limit: 1,
    cursor: "cursor",
    body: {}
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

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

**graph_uuid:** `string` — Graph UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.GraphSearchEdgesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GraphClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.graph.<a href="/src/api/resources/graph/client/Client.ts">searchEpisodes</a>(graph_uuid, { ...params }) -> core.Page&lt;Zep.JsonObject, Zep.JsonObjectPage&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.graph.searchEpisodes("graph_uuid", {
    limit: 1,
    cursor: "cursor",
    body: {}
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.graph.searchEpisodes("graph_uuid", {
    limit: 1,
    cursor: "cursor",
    body: {}
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

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

**graph_uuid:** `string` — Graph UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.GraphSearchEpisodesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GraphClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.graph.<a href="/src/api/resources/graph/client/Client.ts">searchNodes</a>(graph_uuid, { ...params }) -> core.Page&lt;Zep.JsonObject, Zep.JsonObjectPage&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.graph.searchNodes("graph_uuid", {
    limit: 1,
    cursor: "cursor",
    body: {}
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.graph.searchNodes("graph_uuid", {
    limit: 1,
    cursor: "cursor",
    body: {}
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

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

**graph_uuid:** `string` — Graph UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.GraphSearchNodesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GraphClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.graph.<a href="/src/api/resources/graph/client/Client.ts">searchObservations</a>(graph_uuid, { ...params }) -> core.Page&lt;Zep.JsonObject, Zep.JsonObjectPage&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.graph.searchObservations("graph_uuid", {
    limit: 1,
    cursor: "cursor",
    body: {}
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.graph.searchObservations("graph_uuid", {
    limit: 1,
    cursor: "cursor",
    body: {}
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

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

**graph_uuid:** `string` — Graph UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.GraphSearchObservationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GraphClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.graph.<a href="/src/api/resources/graph/client/Client.ts">searchThreadSummaries</a>(graph_uuid, { ...params }) -> core.Page&lt;Zep.JsonObject, Zep.JsonObjectPage&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.graph.searchThreadSummaries("graph_uuid", {
    limit: 1,
    cursor: "cursor",
    body: {}
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.graph.searchThreadSummaries("graph_uuid", {
    limit: 1,
    cursor: "cursor",
    body: {}
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

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

**graph_uuid:** `string` — Graph UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.GraphSearchThreadSummariesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GraphClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.graph.<a href="/src/api/resources/graph/client/Client.ts">getSubgraph</a>(graph_uuid, { ...params }) -> Zep.JsonObject</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.graph.getSubgraph("graph_uuid");

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

**graph_uuid:** `string` — Graph UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.SubgraphRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GraphClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.graph.<a href="/src/api/resources/graph/client/Client.ts">warm</a>(graph_uuid) -> Zep.AsyncResult</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.graph.warm("graph_uuid");

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

**graph_uuid:** `string` — Graph UUID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GraphClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Lookup
<details><summary><code>client.lookup.<a href="/src/api/resources/lookup/client/Client.ts">batch</a>({ ...params }) -> Zep.LookupBatchResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lookup.batch();

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

**request:** `Zep.BatchLookupRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LookupClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Project
<details><summary><code>client.project.<a href="/src/api/resources/project/client/Client.ts">get</a>() -> Zep.Project</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.project.get();

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

**requestOptions:** `ProjectClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.project.<a href="/src/api/resources/project/client/Client.ts">update</a>({ ...params }) -> Zep.Project</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.project.update();

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

**request:** `Zep.PatchProjectRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProjectClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.project.<a href="/src/api/resources/project/client/Client.ts">getInstructions</a>() -> Zep.Instructions</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.project.getInstructions();

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

**requestOptions:** `ProjectClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.project.<a href="/src/api/resources/project/client/Client.ts">setInstructions</a>({ ...params }) -> Zep.Instructions</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.project.setInstructions({});

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

**request:** `Zep.Instructions` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProjectClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.project.<a href="/src/api/resources/project/client/Client.ts">getObservationSteering</a>() -> Zep.ObservationSteering</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.project.getObservationSteering();

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

**requestOptions:** `ProjectClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.project.<a href="/src/api/resources/project/client/Client.ts">setObservationSteering</a>({ ...params }) -> Zep.ObservationSteering</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.project.setObservationSteering({});

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

**request:** `Zep.ObservationSteering` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProjectClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.project.<a href="/src/api/resources/project/client/Client.ts">getOntology</a>() -> Zep.Ontology</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.project.getOntology();

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

**requestOptions:** `ProjectClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.project.<a href="/src/api/resources/project/client/Client.ts">setOntology</a>({ ...params }) -> Zep.Ontology</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.project.setOntology({});

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

**request:** `Zep.Ontology` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProjectClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.project.<a href="/src/api/resources/project/client/Client.ts">getUserSummaryInstructions</a>() -> Zep.UserSummaryInstructions</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.project.getUserSummaryInstructions();

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

**requestOptions:** `ProjectClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.project.<a href="/src/api/resources/project/client/Client.ts">setUserSummaryInstructions</a>({ ...params }) -> Zep.UserSummaryInstructions</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.project.setUserSummaryInstructions({});

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

**request:** `Zep.UserSummaryInstructions` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProjectClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Task
<details><summary><code>client.task.<a href="/src/api/resources/task/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Zep.Task, Zep.TaskPage&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.task.list({
    limit: 1,
    cursor: "cursor"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.task.list({
    limit: 1,
    cursor: "cursor"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

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

**request:** `Zep.TaskListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TaskClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.task.<a href="/src/api/resources/task/client/Client.ts">get</a>(task_uuid) -> Zep.Task</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.task.get("task_uuid");

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

**task_uuid:** `string` — Task UUID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TaskClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Thread
<details><summary><code>client.thread.<a href="/src/api/resources/thread/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Zep.Thread, Zep.ThreadPage&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.thread.list({
    limit: 1,
    cursor: "cursor",
    orderBy: "order_by",
    order: "order",
    userUuid: "user_uuid"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.thread.list({
    limit: 1,
    cursor: "cursor",
    orderBy: "order_by",
    order: "order",
    userUuid: "user_uuid"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

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

**request:** `Zep.ThreadListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ThreadClient.RequestOptions` 
    
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

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.thread.create();

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

**requestOptions:** `ThreadClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.thread.<a href="/src/api/resources/thread/client/Client.ts">lookup</a>({ ...params }) -> Zep.Thread</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.thread.lookup({});

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

**request:** `Zep.LookupRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ThreadClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.thread.<a href="/src/api/resources/thread/client/Client.ts">get</a>(thread_uuid) -> Zep.Thread</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.thread.get("thread_uuid");

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

**thread_uuid:** `string` — Thread UUID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ThreadClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.thread.<a href="/src/api/resources/thread/client/Client.ts">delete</a>(thread_uuid) -> Zep.ThreadDeleteResult</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.thread.delete("thread_uuid");

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

**thread_uuid:** `string` — Thread UUID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ThreadClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.thread.<a href="/src/api/resources/thread/client/Client.ts">getContext</a>(thread_uuid, { ...params }) -> Zep.ThreadContextResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.thread.getContext("thread_uuid", {
    templateUuid: "template_uuid"
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

**thread_uuid:** `string` — Thread UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.ThreadGetContextRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ThreadClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.thread.<a href="/src/api/resources/thread/client/Client.ts">listEpisodes</a>(thread_uuid, { ...params }) -> core.Page&lt;Zep.JsonObject, Zep.JsonObjectPage&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.thread.listEpisodes("thread_uuid", {
    limit: 1,
    cursor: "cursor"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.thread.listEpisodes("thread_uuid", {
    limit: 1,
    cursor: "cursor"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

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

**thread_uuid:** `string` — Thread UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.ThreadListEpisodesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ThreadClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.thread.<a href="/src/api/resources/thread/client/Client.ts">listMessages</a>(thread_uuid, { ...params }) -> core.Page&lt;Zep.Message, Zep.MessagePage&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.thread.listMessages("thread_uuid", {
    limit: 1,
    cursor: "cursor"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.thread.listMessages("thread_uuid", {
    limit: 1,
    cursor: "cursor"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

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

**thread_uuid:** `string` — Thread UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.ThreadListMessagesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ThreadClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.thread.<a href="/src/api/resources/thread/client/Client.ts">addMessages</a>(thread_uuid, { ...params }) -> Zep.AddMessagesResult</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.thread.addMessages("thread_uuid");

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

**thread_uuid:** `string` — Thread UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.AddMessagesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ThreadClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.thread.<a href="/src/api/resources/thread/client/Client.ts">getSummary</a>(thread_uuid) -> Zep.ThreadSummary</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.thread.getSummary("thread_uuid");

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

**thread_uuid:** `string` — Thread UUID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ThreadClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## User
<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">create</a>({ ...params }) -> Zep.User</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.create();

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

**requestOptions:** `UserClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Zep.User, Zep.UserPage&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.user.list({
    limit: 1,
    cursor: "cursor",
    orderBy: "order_by",
    order: "order"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.user.list({
    limit: 1,
    cursor: "cursor",
    orderBy: "order_by",
    order: "order"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

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

**request:** `Zep.UserListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">lookup</a>({ ...params }) -> Zep.User</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.lookup({});

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

**request:** `Zep.LookupRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">get</a>(user_uuid) -> Zep.User</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.get("user_uuid");

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

**user_uuid:** `string` — User UUID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">delete</a>(user_uuid) -> Zep.UserDeleteResult</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.delete("user_uuid");

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

**user_uuid:** `string` — User UUID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">update</a>(user_uuid, { ...params }) -> Zep.User</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.update("user_uuid");

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

**user_uuid:** `string` — User UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.PatchUserRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">getNode</a>(user_uuid) -> Zep.JsonObject</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.getNode("user_uuid");

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

**user_uuid:** `string` — User UUID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">getSummaryInstructions</a>(user_uuid) -> Zep.UserSummaryInstructions</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.getSummaryInstructions("user_uuid");

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

**user_uuid:** `string` — User UUID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">setSummaryInstructions</a>(user_uuid, { ...params }) -> Zep.UserSummaryInstructions</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.setSummaryInstructions("user_uuid", {});

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

**user_uuid:** `string` — User UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.UserSummaryInstructions` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Graph DocumentSummary
<details><summary><code>client.graph.documentSummary.<a href="/src/api/resources/graph/resources/documentSummary/client/Client.ts">list</a>(graph_uuid, { ...params }) -> core.Page&lt;Zep.JsonObject, Zep.JsonObjectPage&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.graph.documentSummary.list("graph_uuid", {
    limit: 1,
    cursor: "cursor",
    body: {}
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.graph.documentSummary.list("graph_uuid", {
    limit: 1,
    cursor: "cursor",
    body: {}
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

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

**graph_uuid:** `string` — Graph UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.graph.DocumentSummaryListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DocumentSummaryClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Graph Episode
<details><summary><code>client.graph.episode.<a href="/src/api/resources/graph/resources/episode/client/Client.ts">listForDocument</a>(graph_uuid, document_id, { ...params }) -> core.Page&lt;Zep.JsonObject, Zep.JsonObjectPage&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.graph.episode.listForDocument("graph_uuid", "document_id", {
    limit: 1,
    cursor: "cursor"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.graph.episode.listForDocument("graph_uuid", "document_id", {
    limit: 1,
    cursor: "cursor"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

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

**graph_uuid:** `string` — Graph UUID
    
</dd>
</dl>

<dl>
<dd>

**document_id:** `string` — Document ID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.graph.EpisodeListForDocumentRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EpisodeClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.graph.episode.<a href="/src/api/resources/graph/resources/episode/client/Client.ts">add</a>(graph_uuid, { ...params }) -> Zep.AddEpisodeResult</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.graph.episode.add("graph_uuid");

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

**graph_uuid:** `string` — Graph UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.graph.AddEpisodeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EpisodeClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.graph.episode.<a href="/src/api/resources/graph/resources/episode/client/Client.ts">list</a>(graph_uuid, { ...params }) -> core.Page&lt;Zep.JsonObject, Zep.JsonObjectPage&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.graph.episode.list("graph_uuid", {
    limit: 1,
    cursor: "cursor",
    body: {}
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.graph.episode.list("graph_uuid", {
    limit: 1,
    cursor: "cursor",
    body: {}
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

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

**graph_uuid:** `string` — Graph UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.graph.EpisodeListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EpisodeClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.graph.episode.<a href="/src/api/resources/graph/resources/episode/client/Client.ts">get</a>(graph_uuid, episode_uuid) -> Zep.JsonObject</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.graph.episode.get("graph_uuid", "episode_uuid");

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

**graph_uuid:** `string` — Graph UUID
    
</dd>
</dl>

<dl>
<dd>

**episode_uuid:** `string` — Episode UUID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EpisodeClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.graph.episode.<a href="/src/api/resources/graph/resources/episode/client/Client.ts">delete</a>(graph_uuid, episode_uuid) -> Zep.AsyncResult</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.graph.episode.delete("graph_uuid", "episode_uuid");

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

**graph_uuid:** `string` — Graph UUID
    
</dd>
</dl>

<dl>
<dd>

**episode_uuid:** `string` — Episode UUID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EpisodeClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.graph.episode.<a href="/src/api/resources/graph/resources/episode/client/Client.ts">update</a>(graph_uuid, episode_uuid, { ...params }) -> Zep.JsonObject</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.graph.episode.update("graph_uuid", "episode_uuid");

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

**graph_uuid:** `string` — Graph UUID
    
</dd>
</dl>

<dl>
<dd>

**episode_uuid:** `string` — Episode UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.graph.PatchEpisodeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EpisodeClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Graph Edge
<details><summary><code>client.graph.edge.<a href="/src/api/resources/graph/resources/edge/client/Client.ts">add</a>(graph_uuid, { ...params }) -> Zep.AddEdgeResult</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.graph.edge.add("graph_uuid");

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

**graph_uuid:** `string` — Graph UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.graph.AddEdgeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EdgeClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.graph.edge.<a href="/src/api/resources/graph/resources/edge/client/Client.ts">list</a>(graph_uuid, { ...params }) -> core.Page&lt;Zep.JsonObject, Zep.JsonObjectPage&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.graph.edge.list("graph_uuid", {
    limit: 1,
    cursor: "cursor",
    body: {}
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.graph.edge.list("graph_uuid", {
    limit: 1,
    cursor: "cursor",
    body: {}
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

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

**graph_uuid:** `string` — Graph UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.graph.EdgeListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EdgeClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.graph.edge.<a href="/src/api/resources/graph/resources/edge/client/Client.ts">get</a>(graph_uuid, edge_uuid) -> Zep.JsonObject</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.graph.edge.get("graph_uuid", "edge_uuid");

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

**graph_uuid:** `string` — Graph UUID
    
</dd>
</dl>

<dl>
<dd>

**edge_uuid:** `string` — Edge UUID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EdgeClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.graph.edge.<a href="/src/api/resources/graph/resources/edge/client/Client.ts">delete</a>(graph_uuid, edge_uuid) -> Zep.AsyncResult</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.graph.edge.delete("graph_uuid", "edge_uuid");

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

**graph_uuid:** `string` — Graph UUID
    
</dd>
</dl>

<dl>
<dd>

**edge_uuid:** `string` — Edge UUID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EdgeClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.graph.edge.<a href="/src/api/resources/graph/resources/edge/client/Client.ts">update</a>(graph_uuid, edge_uuid, { ...params }) -> Zep.JsonObject</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.graph.edge.update("graph_uuid", "edge_uuid");

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

**graph_uuid:** `string` — Graph UUID
    
</dd>
</dl>

<dl>
<dd>

**edge_uuid:** `string` — Edge UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.graph.PatchEdgeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EdgeClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Graph Node
<details><summary><code>client.graph.node.<a href="/src/api/resources/graph/resources/node/client/Client.ts">add</a>(graph_uuid, { ...params }) -> Zep.AddNodesResult</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.graph.node.add("graph_uuid");

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

**graph_uuid:** `string` — Graph UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.graph.AddNodesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NodeClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.graph.node.<a href="/src/api/resources/graph/resources/node/client/Client.ts">list</a>(graph_uuid, { ...params }) -> core.Page&lt;Zep.JsonObject, Zep.JsonObjectPage&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.graph.node.list("graph_uuid", {
    limit: 1,
    cursor: "cursor",
    body: {}
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.graph.node.list("graph_uuid", {
    limit: 1,
    cursor: "cursor",
    body: {}
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

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

**graph_uuid:** `string` — Graph UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.graph.NodeListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NodeClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.graph.node.<a href="/src/api/resources/graph/resources/node/client/Client.ts">get</a>(graph_uuid, node_uuid) -> Zep.JsonObject</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.graph.node.get("graph_uuid", "node_uuid");

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

**graph_uuid:** `string` — Graph UUID
    
</dd>
</dl>

<dl>
<dd>

**node_uuid:** `string` — Node UUID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NodeClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.graph.node.<a href="/src/api/resources/graph/resources/node/client/Client.ts">delete</a>(graph_uuid, node_uuid) -> Zep.AsyncResult</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.graph.node.delete("graph_uuid", "node_uuid");

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

**graph_uuid:** `string` — Graph UUID
    
</dd>
</dl>

<dl>
<dd>

**node_uuid:** `string` — Node UUID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NodeClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.graph.node.<a href="/src/api/resources/graph/resources/node/client/Client.ts">update</a>(graph_uuid, node_uuid, { ...params }) -> Zep.JsonObject</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.graph.node.update("graph_uuid", "node_uuid");

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

**graph_uuid:** `string` — Graph UUID
    
</dd>
</dl>

<dl>
<dd>

**node_uuid:** `string` — Node UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.graph.PatchNodeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NodeClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.graph.node.<a href="/src/api/resources/graph/resources/node/client/Client.ts">listNeighbors</a>(graph_uuid, node_uuid, { ...params }) -> core.Page&lt;Zep.NeighborEntry, Zep.NeighborPage&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.graph.node.listNeighbors("graph_uuid", "node_uuid", {
    limit: 1,
    cursor: "cursor"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.graph.node.listNeighbors("graph_uuid", "node_uuid", {
    limit: 1,
    cursor: "cursor"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

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

**graph_uuid:** `string` — Graph UUID
    
</dd>
</dl>

<dl>
<dd>

**node_uuid:** `string` — Node UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.graph.NeighborsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NodeClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Graph Observation
<details><summary><code>client.graph.observation.<a href="/src/api/resources/graph/resources/observation/client/Client.ts">list</a>(graph_uuid, { ...params }) -> core.Page&lt;Zep.JsonObject, Zep.JsonObjectPage&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.graph.observation.list("graph_uuid", {
    limit: 1,
    cursor: "cursor",
    body: {}
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.graph.observation.list("graph_uuid", {
    limit: 1,
    cursor: "cursor",
    body: {}
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

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

**graph_uuid:** `string` — Graph UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.graph.ObservationListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ObservationClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.graph.observation.<a href="/src/api/resources/graph/resources/observation/client/Client.ts">get</a>(graph_uuid, observation_uuid) -> Zep.JsonObject</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.graph.observation.get("graph_uuid", "observation_uuid");

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

**graph_uuid:** `string` — Graph UUID
    
</dd>
</dl>

<dl>
<dd>

**observation_uuid:** `string` — Observation UUID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ObservationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Graph ThreadSummary
<details><summary><code>client.graph.threadSummary.<a href="/src/api/resources/graph/resources/threadSummary/client/Client.ts">list</a>(graph_uuid, { ...params }) -> core.Page&lt;Zep.JsonObject, Zep.JsonObjectPage&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.graph.threadSummary.list("graph_uuid", {
    limit: 1,
    cursor: "cursor",
    body: {}
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.graph.threadSummary.list("graph_uuid", {
    limit: 1,
    cursor: "cursor",
    body: {}
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

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

**graph_uuid:** `string` — Graph UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.graph.ThreadSummaryListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ThreadSummaryClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Thread Message
<details><summary><code>client.thread.message.<a href="/src/api/resources/thread/resources/message/client/Client.ts">get</a>(thread_uuid, message_uuid) -> Zep.Message</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.thread.message.get("thread_uuid", "message_uuid");

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

**thread_uuid:** `string` — Thread UUID
    
</dd>
</dl>

<dl>
<dd>

**message_uuid:** `string` — Message UUID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MessageClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.thread.message.<a href="/src/api/resources/thread/resources/message/client/Client.ts">update</a>(thread_uuid, message_uuid, { ...params }) -> Zep.Message</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.thread.message.update("thread_uuid", "message_uuid");

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

**thread_uuid:** `string` — Thread UUID
    
</dd>
</dl>

<dl>
<dd>

**message_uuid:** `string` — Message UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.thread.PatchMessageRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MessageClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

