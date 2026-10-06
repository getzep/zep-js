# Reference
## Agent
<details><summary><code>client.agent.<a href="/src/api/resources/agent/client/Client.ts">create</a>({ ...params }) -> Zep.Agent</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.create({
    agentId: "agent_id",
    name: "name",
    securityDomain: "security_domain"
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

**request:** `Zep.CreateAgentRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AgentClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.<a href="/src/api/resources/agent/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Zep.Agent, Zep.AgentPage&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.agent.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.agent.list();
while (page.hasNextPage()) {
    page = await page.getNextPage();
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

**request:** `Zep.AgentListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AgentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.<a href="/src/api/resources/agent/client/Client.ts">get</a>(agent_uuid) -> Zep.Agent</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.get("agent_uuid");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AgentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.<a href="/src/api/resources/agent/client/Client.ts">delete</a>(agent_uuid, { ...params }) -> Zep.AgentDeleteResult</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.delete("agent_uuid", {
    expectedRevision: 1
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

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.DeleteAgentRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AgentClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.<a href="/src/api/resources/agent/client/Client.ts">update</a>(agent_uuid, { ...params }) -> Zep.Agent</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.update("agent_uuid", {
    expectedRevision: 1
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

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.PatchAgentRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AgentClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.<a href="/src/api/resources/agent/client/Client.ts">declareBreakingChange</a>(agent_uuid, { ...params }) -> Zep.AgentBreakingChange</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.declareBreakingChange("agent_uuid", {
    expectedRevision: 1,
    version: "version"
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

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.DeclareAgentBreakingChangeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AgentClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.<a href="/src/api/resources/agent/client/Client.ts">getContext</a>(agent_uuid, { ...params }) -> Zep.AgentContext</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.getContext("agent_uuid");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.GetAgentContextRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AgentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

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
const pageableResponse = await client.batch.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.batch.list();
while (page.hasNextPage()) {
    page = await page.getNextPage();
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

<details><summary><code>client.batch.<a href="/src/api/resources/batch/client/Client.ts">listItems</a>(batch_uuid, { ...params }) -> core.Page&lt;Zep.BatchItem, Zep.BatchItemPage&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.batch.listItems("batch_uuid");
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.batch.listItems("batch_uuid");
while (page.hasNextPage()) {
    page = await page.getNextPage();
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
await client.batch.addItems("batch_uuid", {
    items: [{
            type: "graph_episode"
        }]
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
const pageableResponse = await client.context.listTemplates();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.context.listTemplates();
while (page.hasNextPage()) {
    page = await page.getNextPage();
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

**requestOptions:** `ContextClient.RequestOptions` 
    
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

## DebugLog
<details><summary><code>client.debugLog.<a href="/src/api/resources/debugLog/client/Client.ts">enable</a>() -> Zep.DebugLoggingEnablement</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Enables debug logging for the project for one hour, or for 24 hours on the Enterprise plan. Episodes ingested while debug logging is enabled have a debug log (see `graph.episode.get_debug_logs`). On the Flex, Flex Plus, and Enterprise plans, the operation also enables ingestion tracing (see `graph.episode.list_ingestion_traces`); `ingestion_trace_enabled` reports the result. A repeated call starts the duration again.
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
await client.debugLog.enable();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `DebugLogClient.IdempotentRequestOptions` 
    
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
const pageableResponse = await client.graph.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.graph.list();
while (page.hasNextPage()) {
    page = await page.getNextPage();
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

**requestOptions:** `GraphClient.RequestOptions` 
    
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

**requestOptions:** `GraphClient.RequestOptions` 
    
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
await client.graph.clone("graph_uuid", {
    "key": "value"
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

<details><summary><code>client.graph.<a href="/src/api/resources/graph/client/Client.ts">getContentPolicy</a>(graph_uuid) -> Zep.GraphContentPolicy</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the content policy the graph bound at creation. The policy of a graph does not change after creation. A graph without a content policy returns revision 0 with no categories and no rules.
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
await client.graph.getContentPolicy("graph_uuid");

```
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

<details><summary><code>client.graph.<a href="/src/api/resources/graph/client/Client.ts">listContentPolicyEvents</a>(graph_uuid, { ...params }) -> core.Page&lt;Zep.ContentPolicyEvent, Zep.ContentPolicyEventPage&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the content policy decisions recorded for a graph, newest first. Each event carries identifiers only. A graph without a content policy returns an empty list.
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
const pageableResponse = await client.graph.listContentPolicyEvents("graph_uuid");
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.graph.listContentPolicyEvents("graph_uuid");
while (page.hasNextPage()) {
    page = await page.getNextPage();
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

**request:** `Zep.ContentPolicyEventListRequest` 
    
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

<details><summary><code>client.graph.<a href="/src/api/resources/graph/client/Client.ts">getContext</a>(graph_uuid, { ...params }) -> Zep.GraphContextResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.graph.getContext("graph_uuid", {
    query: "query"
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

**requestOptions:** `GraphClient.RequestOptions` 
    
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

<details><summary><code>client.graph.<a href="/src/api/resources/graph/client/Client.ts">searchEdges</a>(graph_uuid, { ...params }) -> core.Page&lt;Zep.Edge, Zep.EdgePage&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.graph.searchEdges("graph_uuid", {
    body: {
        query: "query"
    }
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.graph.searchEdges("graph_uuid", {
    body: {
        query: "query"
    }
});
while (page.hasNextPage()) {
    page = await page.getNextPage();
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

**requestOptions:** `GraphClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.graph.<a href="/src/api/resources/graph/client/Client.ts">searchEpisodes</a>(graph_uuid, { ...params }) -> core.Page&lt;Zep.Episode, Zep.EpisodePage&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.graph.searchEpisodes("graph_uuid", {
    body: {
        query: "query"
    }
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.graph.searchEpisodes("graph_uuid", {
    body: {
        query: "query"
    }
});
while (page.hasNextPage()) {
    page = await page.getNextPage();
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

**requestOptions:** `GraphClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.graph.<a href="/src/api/resources/graph/client/Client.ts">searchNodes</a>(graph_uuid, { ...params }) -> core.Page&lt;Zep.Node, Zep.NodePage&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.graph.searchNodes("graph_uuid", {
    body: {
        query: "query"
    }
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.graph.searchNodes("graph_uuid", {
    body: {
        query: "query"
    }
});
while (page.hasNextPage()) {
    page = await page.getNextPage();
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

**requestOptions:** `GraphClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.graph.<a href="/src/api/resources/graph/client/Client.ts">searchObservations</a>(graph_uuid, { ...params }) -> core.Page&lt;Zep.Observation, Zep.ObservationPage&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.graph.searchObservations("graph_uuid", {
    body: {
        query: "query"
    }
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.graph.searchObservations("graph_uuid", {
    body: {
        query: "query"
    }
});
while (page.hasNextPage()) {
    page = await page.getNextPage();
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

**requestOptions:** `GraphClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.graph.<a href="/src/api/resources/graph/client/Client.ts">searchThreadSummaries</a>(graph_uuid, { ...params }) -> core.Page&lt;Zep.ThreadSummary, Zep.ThreadSummaryPage&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.graph.searchThreadSummaries("graph_uuid", {
    body: {
        query: "query"
    }
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.graph.searchThreadSummaries("graph_uuid", {
    body: {
        query: "query"
    }
});
while (page.hasNextPage()) {
    page = await page.getNextPage();
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

**requestOptions:** `GraphClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.graph.<a href="/src/api/resources/graph/client/Client.ts">getSubgraph</a>(graph_uuid, { ...params }) -> Zep.SubgraphResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.graph.getSubgraph("graph_uuid", {
    seedNodeUuids: ["seed_node_uuids"]
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

**requestOptions:** `GraphClient.RequestOptions` 
    
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

**requestOptions:** `LookupClient.RequestOptions` 
    
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

<details><summary><code>client.project.<a href="/src/api/resources/project/client/Client.ts">getContentPolicy</a>() -> Zep.ContentPolicy</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the current content policy revision of the project. A new graph binds this revision at creation.
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
await client.project.getContentPolicy();

```
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

<details><summary><code>client.project.<a href="/src/api/resources/project/client/Client.ts">setContentPolicy</a>({ ...params }) -> Zep.ContentPolicy</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Replaces the project content policy and creates a new immutable revision. Graphs that already exist keep the revision they bound. An empty policy (no categories and no rules) removes the content policy for new graphs.
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
await client.project.setContentPolicy();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Zep.ContentPolicyRequest` 
    
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

<details><summary><code>client.project.<a href="/src/api/resources/project/client/Client.ts">listContentPolicyRevisions</a>({ ...params }) -> core.Page&lt;Zep.ContentPolicy, Zep.ContentPolicyRevisionPage&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists every revision of the project content policy, newest first, including revision 0.
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
const pageableResponse = await client.project.listContentPolicyRevisions();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.project.listContentPolicyRevisions();
while (page.hasNextPage()) {
    page = await page.getNextPage();
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

**request:** `Zep.ProjectListContentPolicyRevisionsRequest` 
    
</dd>
</dl>

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

<details><summary><code>client.project.<a href="/src/api/resources/project/client/Client.ts">getContentPolicyRevision</a>(revision_uuid) -> Zep.ContentPolicy</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.project.getContentPolicyRevision("revision_uuid");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**revision_uuid:** `string` — Revision UUID
    
</dd>
</dl>

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

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Replaces the entity types and the edge types that the project uses.
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
const pageableResponse = await client.task.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.task.list();
while (page.hasNextPage()) {
    page = await page.getNextPage();
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
const pageableResponse = await client.thread.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.thread.list();
while (page.hasNextPage()) {
    page = await page.getNextPage();
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
await client.thread.create({
    userUuid: "user_uuid"
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

**requestOptions:** `ThreadClient.RequestOptions` 
    
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
await client.thread.getContext("thread_uuid");

```
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

<details><summary><code>client.thread.<a href="/src/api/resources/thread/client/Client.ts">listEpisodes</a>(thread_uuid, { ...params }) -> core.Page&lt;Zep.Episode, Zep.EpisodePage&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.thread.listEpisodes("thread_uuid");
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.thread.listEpisodes("thread_uuid");
while (page.hasNextPage()) {
    page = await page.getNextPage();
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
const pageableResponse = await client.thread.listMessages("thread_uuid");
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.thread.listMessages("thread_uuid");
while (page.hasNextPage()) {
    page = await page.getNextPage();
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
await client.thread.addMessages("thread_uuid", {
    messages: [{}]
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

## TraceConnection
<details><summary><code>client.traceConnection.<a href="/src/api/resources/traceConnection/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Zep.TraceConnection, Zep.TraceConnectionPage&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List trace connections in the current Zep project.
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
const pageableResponse = await client.traceConnection.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.traceConnection.list();
while (page.hasNextPage()) {
    page = await page.getNextPage();
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

**request:** `Zep.TraceConnectionListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TraceConnectionClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.traceConnection.<a href="/src/api/resources/traceConnection/client/Client.ts">create</a>({ ...params }) -> Zep.TraceConnection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Verify the provider credential before Zep stores it. Example request: `{"name":"Support traces","provider":"braintrust","credential":"secret","requests_per_minute":10}`.
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
await client.traceConnection.create();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Zep.CreateTraceConnectionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TraceConnectionClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.traceConnection.<a href="/src/api/resources/traceConnection/client/Client.ts">get</a>(connection_uuid) -> Zep.TraceConnection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Read one trace connection. The response includes a credential hint and never includes the credential.
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
await client.traceConnection.get("connection_uuid");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**connection_uuid:** `string` — Trace connection UUID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TraceConnectionClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.traceConnection.<a href="/src/api/resources/traceConnection/client/Client.ts">delete</a>(connection_uuid) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a trace connection that no active trajectory import uses.
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
await client.traceConnection.delete("connection_uuid");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**connection_uuid:** `string` — Trace connection UUID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TraceConnectionClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.traceConnection.<a href="/src/api/resources/traceConnection/client/Client.ts">update</a>(connection_uuid, { ...params }) -> Zep.TraceConnection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Verify changed provider settings before Zep stores them. Example request: `{"credential":"new-secret","requests_per_minute":20}`.
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
await client.traceConnection.update("connection_uuid");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**connection_uuid:** `string` — Trace connection UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.UpdateTraceConnectionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TraceConnectionClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.traceConnection.<a href="/src/api/resources/traceConnection/client/Client.ts">verify</a>(connection_uuid) -> Zep.TraceConnection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Check the provider credential and update the connection status.
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
await client.traceConnection.verify("connection_uuid");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**connection_uuid:** `string` — Trace connection UUID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TraceConnectionClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## UserGroup
<details><summary><code>client.userGroup.<a href="/src/api/resources/userGroup/client/Client.ts">create</a>({ ...params }) -> Zep.UserGroup</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Requires a project API key, or an account-admin bearer token with the X-Zep-Project header. The account must be entitled to attribute-based access control.
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
await client.userGroup.create({
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

**request:** `Zep.CreateUserGroupRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserGroupClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.userGroup.<a href="/src/api/resources/userGroup/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Zep.UserGroup, Zep.UserGroupPage&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Requires a project API key, or an account-admin bearer token with the X-Zep-Project header. The account must be entitled to attribute-based access control.
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
const pageableResponse = await client.userGroup.list({
    body: {}
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.userGroup.list({
    body: {}
});
while (page.hasNextPage()) {
    page = await page.getNextPage();
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

**request:** `Zep.UserGroupListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserGroupClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.userGroup.<a href="/src/api/resources/userGroup/client/Client.ts">get</a>(group_uuid) -> Zep.UserGroup</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Requires a project API key, or an account-admin bearer token with the X-Zep-Project header. The account must be entitled to attribute-based access control.
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
await client.userGroup.get("group_uuid");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**group_uuid:** `string` — User group UUID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserGroupClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.userGroup.<a href="/src/api/resources/userGroup/client/Client.ts">delete</a>(group_uuid) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Requires a project API key, or an account-admin bearer token with the X-Zep-Project header. The account must be entitled to attribute-based access control.
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
await client.userGroup.delete("group_uuid");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**group_uuid:** `string` — User group UUID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserGroupClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.userGroup.<a href="/src/api/resources/userGroup/client/Client.ts">update</a>(group_uuid, { ...params }) -> Zep.UserGroup</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Requires a project API key, or an account-admin bearer token with the X-Zep-Project header. The account must be entitled to attribute-based access control.
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
await client.userGroup.update("group_uuid");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**group_uuid:** `string` — User group UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.PatchUserGroupRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserGroupClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.userGroup.<a href="/src/api/resources/userGroup/client/Client.ts">listMemberCandidates</a>(group_uuid, { ...params }) -> core.Page&lt;Zep.User, Zep.UserPage&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Requires a project API key, or an account-admin bearer token with the X-Zep-Project header. The account must be entitled to attribute-based access control.
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
const pageableResponse = await client.userGroup.listMemberCandidates("group_uuid", {
    body: {}
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.userGroup.listMemberCandidates("group_uuid", {
    body: {}
});
while (page.hasNextPage()) {
    page = await page.getNextPage();
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

**group_uuid:** `string` — User group UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.UserGroupListMemberCandidatesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserGroupClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.userGroup.<a href="/src/api/resources/userGroup/client/Client.ts">addMembers</a>(group_uuid, { ...params }) -> Zep.MembershipMutationResult</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Requires a project API key, or an account-admin bearer token with the X-Zep-Project header. The account must be entitled to attribute-based access control.
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
await client.userGroup.addMembers("group_uuid", {
    userUuids: ["user_uuids"]
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

**group_uuid:** `string` — User group UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.MutateMembersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserGroupClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.userGroup.<a href="/src/api/resources/userGroup/client/Client.ts">listMembers</a>(group_uuid, { ...params }) -> core.Page&lt;Zep.User, Zep.UserPage&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Requires a project API key, or an account-admin bearer token with the X-Zep-Project header. The account must be entitled to attribute-based access control.
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
const pageableResponse = await client.userGroup.listMembers("group_uuid", {
    body: {}
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.userGroup.listMembers("group_uuid", {
    body: {}
});
while (page.hasNextPage()) {
    page = await page.getNextPage();
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

**group_uuid:** `string` — User group UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.UserGroupListMembersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserGroupClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.userGroup.<a href="/src/api/resources/userGroup/client/Client.ts">removeMembers</a>(group_uuid, { ...params }) -> Zep.MembershipMutationResult</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Requires a project API key, or an account-admin bearer token with the X-Zep-Project header. The account must be entitled to attribute-based access control.
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
await client.userGroup.removeMembers("group_uuid", {
    userUuids: ["user_uuids"]
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

**group_uuid:** `string` — User group UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.MutateMembersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserGroupClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.userGroup.<a href="/src/api/resources/userGroup/client/Client.ts">removeMember</a>(group_uuid, user_uuid) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Requires a project API key, or an account-admin bearer token with the X-Zep-Project header. The account must be entitled to attribute-based access control.
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
await client.userGroup.removeMember("group_uuid", "user_uuid");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**group_uuid:** `string` — User group UUID
    
</dd>
</dl>

<dl>
<dd>

**user_uuid:** `string` — User UUID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserGroupClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.userGroup.<a href="/src/api/resources/userGroup/client/Client.ts">listForUser</a>(user_uuid, { ...params }) -> core.Page&lt;Zep.UserGroup, Zep.UserGroupPage&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Requires a project API key, or an account-admin bearer token with the X-Zep-Project header. The account must be entitled to attribute-based access control.
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
const pageableResponse = await client.userGroup.listForUser("user_uuid");
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.userGroup.listForUser("user_uuid");
while (page.hasNextPage()) {
    page = await page.getNextPage();
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

**user_uuid:** `string` — User UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.UserGroupListForUserRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserGroupClient.RequestOptions` 
    
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
const pageableResponse = await client.user.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.user.list();
while (page.hasNextPage()) {
    page = await page.getNextPage();
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

**requestOptions:** `UserClient.RequestOptions` 
    
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

**requestOptions:** `UserClient.RequestOptions` 
    
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

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">getNode</a>(user_uuid) -> Zep.Node</code></summary>
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

## Agent Learning
<details><summary><code>client.agent.learning.<a href="/src/api/resources/agent/resources/learning/client/Client.ts">get</a>(agent_uuid, { ...params }) -> Zep.AgentLearningState</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.learning.get("agent_uuid", {
    taskFamily: "task_family"
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

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.agent.LearningGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LearningClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.learning.<a href="/src/api/resources/agent/resources/learning/client/Client.ts">listRuns</a>(agent_uuid, { ...params }) -> core.Page&lt;Zep.AgentSkillCompilationOutcome, Zep.Pagev4AgentSkillCompilationOutcome&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.agent.learning.listRuns("agent_uuid");
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.agent.learning.listRuns("agent_uuid");
while (page.hasNextPage()) {
    page = await page.getNextPage();
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

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.agent.LearningListRunsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LearningClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Agent LiteralPolicy
<details><summary><code>client.agent.literalPolicy.<a href="/src/api/resources/agent/resources/literalPolicy/client/Client.ts">get</a>(agent_uuid) -> Zep.AgentLiteralPolicy</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.literalPolicy.get("agent_uuid");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LiteralPolicyClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.literalPolicy.<a href="/src/api/resources/agent/resources/literalPolicy/client/Client.ts">update</a>(agent_uuid, { ...params }) -> Zep.AgentLiteralPolicy</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.literalPolicy.update("agent_uuid", {
    allowlistedClasses: {
        environments: ["environments"],
        tools: ["tools"]
    },
    allowlistedValues: {
        environments: ["environments"],
        tools: ["tools"]
    },
    "default": "parameterize"
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

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.agent.UpdateAgentLiteralPolicyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LiteralPolicyClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Agent Skill
<details><summary><code>client.agent.skill.<a href="/src/api/resources/agent/resources/skill/client/Client.ts">create</a>(agent_uuid, { ...params }) -> Zep.AgentSkill</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.skill.create("agent_uuid", {
    definition: {}
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

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.agent.CreateAgentSkillRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SkillClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.skill.<a href="/src/api/resources/agent/resources/skill/client/Client.ts">list</a>(agent_uuid, { ...params }) -> core.Page&lt;Zep.AgentSkillSearchHit, Zep.Pagev4AgentSkillSearchHit&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.agent.skill.list("agent_uuid");
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.agent.skill.list("agent_uuid");
while (page.hasNextPage()) {
    page = await page.getNextPage();
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

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.agent.AgentSkillListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SkillClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.skill.<a href="/src/api/resources/agent/resources/skill/client/Client.ts">search</a>(agent_uuid, { ...params }) -> core.Page&lt;Zep.AgentSkillSearchHit, Zep.AgentSkillSearchResponse&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.agent.skill.search("agent_uuid", {
    query: "query"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.agent.skill.search("agent_uuid", {
    query: "query"
});
while (page.hasNextPage()) {
    page = await page.getNextPage();
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

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.agent.AgentSkillSearchRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SkillClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.skill.<a href="/src/api/resources/agent/resources/skill/client/Client.ts">get</a>(agent_uuid, skill_uuid) -> Zep.AgentSkill</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.skill.get("agent_uuid", "skill_uuid");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**skill_uuid:** `string` — Skill UUID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SkillClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.skill.<a href="/src/api/resources/agent/resources/skill/client/Client.ts">approve</a>(agent_uuid, skill_uuid, { ...params }) -> Zep.AgentSkillAdmissionDecision</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.skill.approve("agent_uuid", "skill_uuid", {
    expectedVersion: 1
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

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**skill_uuid:** `string` — Skill UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.agent.ApproveAgentSkillRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SkillClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.skill.<a href="/src/api/resources/agent/resources/skill/client/Client.ts">retire</a>(agent_uuid, skill_uuid, { ...params }) -> Zep.AgentSkill</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.skill.retire("agent_uuid", "skill_uuid", {
    expectedVersion: 1
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

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**skill_uuid:** `string` — Skill UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.agent.RetireAgentSkillRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SkillClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.skill.<a href="/src/api/resources/agent/resources/skill/client/Client.ts">createVersion</a>(agent_uuid, skill_uuid, { ...params }) -> Zep.AgentSkillVersion</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.skill.createVersion("agent_uuid", "skill_uuid", {
    definition: {},
    expectedVersion: 1
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

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**skill_uuid:** `string` — Skill UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.agent.CreateAgentSkillVersionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SkillClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Agent Split
<details><summary><code>client.agent.split.<a href="/src/api/resources/agent/resources/split/client/Client.ts">plan</a>(agent_uuid, { ...params }) -> Zep.AgentSplitPlan</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.split.plan("agent_uuid", {
    destinations: [{
            agent: {
                agentId: "agent_id",
                name: "name",
                securityDomain: "security_domain"
            },
            skills: [{
                    skillUuid: "skill_uuid",
                    skillVersionUuid: "skill_version_uuid",
                    version: 1
                }]
        }],
    expectedRevision: 1,
    rationale: "rationale",
    reviewAcknowledged: true
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

**agent_uuid:** `string` — Source Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.agent.CreateAgentSplitPlanRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SplitClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Agent Trajectory
<details><summary><code>client.agent.trajectory.<a href="/src/api/resources/agent/resources/trajectory/client/Client.ts">create</a>(agent_uuid, { ...params }) -> Zep.AgentTrajectory</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.trajectory.create("agent_uuid", {
    objective: "objective",
    taskFamily: "task_family"
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

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.agent.CreateAgentTrajectoryRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TrajectoryClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.trajectory.<a href="/src/api/resources/agent/resources/trajectory/client/Client.ts">list</a>(agent_uuid, { ...params }) -> core.Page&lt;Zep.AgentTrajectory, Zep.AgentTrajectoryPage&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.agent.trajectory.list("agent_uuid");
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.agent.trajectory.list("agent_uuid");
while (page.hasNextPage()) {
    page = await page.getNextPage();
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

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.agent.AgentTrajectoryListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TrajectoryClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.trajectory.<a href="/src/api/resources/agent/resources/trajectory/client/Client.ts">get</a>(agent_uuid, trajectory_uuid) -> Zep.AgentTrajectory</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.trajectory.get("agent_uuid", "trajectory_uuid");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**trajectory_uuid:** `string` — Trajectory UUID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TrajectoryClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.trajectory.<a href="/src/api/resources/agent/resources/trajectory/client/Client.ts">delete</a>(agent_uuid, trajectory_uuid, { ...params }) -> Zep.AgentTrajectorySourceDeletionResult</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.trajectory.delete("agent_uuid", "trajectory_uuid", {
    expectedRevision: 1
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

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**trajectory_uuid:** `string` — Trajectory UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.DeleteAgentTrajectoryRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TrajectoryClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.trajectory.<a href="/src/api/resources/agent/resources/trajectory/client/Client.ts">update</a>(agent_uuid, trajectory_uuid, { ...params }) -> Zep.AgentTrajectory</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.trajectory.update("agent_uuid", "trajectory_uuid", {
    expectedRevision: 1
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

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**trajectory_uuid:** `string` — Trajectory UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.agent.PatchAgentTrajectoryRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TrajectoryClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.trajectory.<a href="/src/api/resources/agent/resources/trajectory/client/Client.ts">abandon</a>(agent_uuid, trajectory_uuid, { ...params }) -> Zep.AgentTrajectoryFinalizationResult</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.trajectory.abandon("agent_uuid", "trajectory_uuid", {
    highestAcceptedSequence: 1
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

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**trajectory_uuid:** `string` — Trajectory UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.agent.AbandonAgentTrajectoryRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TrajectoryClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.trajectory.<a href="/src/api/resources/agent/resources/trajectory/client/Client.ts">close</a>(agent_uuid, trajectory_uuid, { ...params }) -> Zep.AgentTrajectoryFinalizationResult</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.trajectory.close("agent_uuid", "trajectory_uuid");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**trajectory_uuid:** `string` — Trajectory UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.agent.CloseAgentTrajectoryRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TrajectoryClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.trajectory.<a href="/src/api/resources/agent/resources/trajectory/client/Client.ts">correctTaskFamily</a>(agent_uuid, trajectory_uuid, { ...params }) -> Zep.AgentTrajectoryFinalizationResult</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.trajectory.correctTaskFamily("agent_uuid", "trajectory_uuid", {
    expectedRevision: 1,
    reason: "reason"
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

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**trajectory_uuid:** `string` — Trajectory UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.agent.CorrectAgentTrajectoryTaskFamilyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TrajectoryClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.trajectory.<a href="/src/api/resources/agent/resources/trajectory/client/Client.ts">listEvents</a>(agent_uuid, trajectory_uuid, { ...params }) -> core.Page&lt;Zep.AgentTrajectoryEvent, Zep.AgentTrajectoryEventPage&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.agent.trajectory.listEvents("agent_uuid", "trajectory_uuid");
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.agent.trajectory.listEvents("agent_uuid", "trajectory_uuid");
while (page.hasNextPage()) {
    page = await page.getNextPage();
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

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**trajectory_uuid:** `string` — Trajectory UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.agent.TrajectoryListEventsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TrajectoryClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.trajectory.<a href="/src/api/resources/agent/resources/trajectory/client/Client.ts">appendEvent</a>(agent_uuid, trajectory_uuid, { ...params }) -> Zep.AgentTrajectoryEvent</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.trajectory.appendEvent("agent_uuid", "trajectory_uuid", {
    eventType: "input_reference"
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

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**trajectory_uuid:** `string` — Trajectory UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.agent.AppendAgentTrajectoryEventRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TrajectoryClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.trajectory.<a href="/src/api/resources/agent/resources/trajectory/client/Client.ts">deleteEvent</a>(agent_uuid, trajectory_uuid, event_uuid, { ...params }) -> Zep.AgentTrajectorySourceDeletionResult</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.trajectory.deleteEvent("agent_uuid", "trajectory_uuid", "event_uuid", {
    expectedRevision: 1
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

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**trajectory_uuid:** `string` — Trajectory UUID
    
</dd>
</dl>

<dl>
<dd>

**event_uuid:** `string` — Event UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.DeleteAgentTrajectoryRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TrajectoryClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.trajectory.<a href="/src/api/resources/agent/resources/trajectory/client/Client.ts">reopen</a>(agent_uuid, trajectory_uuid, { ...params }) -> Zep.AgentTrajectory</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.trajectory.reopen("agent_uuid", "trajectory_uuid", {
    expectedRevision: 1
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

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**trajectory_uuid:** `string` — Trajectory UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.agent.ReopenAgentTrajectoryRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TrajectoryClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.trajectory.<a href="/src/api/resources/agent/resources/trajectory/client/Client.ts">getSummary</a>(agent_uuid, trajectory_uuid) -> Zep.AgentTrajectorySummaryVersion</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.trajectory.getSummary("agent_uuid", "trajectory_uuid");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**trajectory_uuid:** `string` — Trajectory UUID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TrajectoryClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.trajectory.<a href="/src/api/resources/agent/resources/trajectory/client/Client.ts">listSummaryVersions</a>(agent_uuid, trajectory_uuid, { ...params }) -> core.Page&lt;Zep.AgentTrajectorySummaryVersion, Zep.AgentTrajectorySummaryPage&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.agent.trajectory.listSummaryVersions("agent_uuid", "trajectory_uuid");
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.agent.trajectory.listSummaryVersions("agent_uuid", "trajectory_uuid");
while (page.hasNextPage()) {
    page = await page.getNextPage();
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

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**trajectory_uuid:** `string` — Trajectory UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.agent.TrajectoryListSummaryVersionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TrajectoryClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Agent TrajectoryImport
<details><summary><code>client.agent.trajectoryImport.<a href="/src/api/resources/agent/resources/trajectoryImport/client/Client.ts">list</a>(agent_uuid, { ...params }) -> core.Page&lt;Zep.TrajectoryImport, Zep.TrajectoryImportPage&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List trajectory imports that belong to this Agent.
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
const pageableResponse = await client.agent.trajectoryImport.list("agent_uuid");
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.agent.trajectoryImport.list("agent_uuid");
while (page.hasNextPage()) {
    page = await page.getNextPage();
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

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.agent.TrajectoryImportListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TrajectoryImportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.trajectoryImport.<a href="/src/api/resources/agent/resources/trajectoryImport/client/Client.ts">create</a>(agent_uuid, { ...params }) -> Zep.TrajectoryImport</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a scheduled import or queue a one-time import. Example request: `{"connection_uuid":"8c78a85e-eac2-4f57-b5f5-59a68a1e77a1","provider_project_id":"project-123","name":"Support traces","selection":{"trace_ids":["trace-123"]},"mapping":{"task_family":{"source":"fixed","value":"support"}}}`.
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
await client.agent.trajectoryImport.create("agent_uuid");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.agent.CreateTrajectoryImportRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TrajectoryImportClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.trajectoryImport.<a href="/src/api/resources/agent/resources/trajectoryImport/client/Client.ts">get</a>(agent_uuid, import_uuid) -> Zep.TrajectoryImport</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Read one trajectory import. The response does not include its source cursor.
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
await client.agent.trajectoryImport.get("agent_uuid", "import_uuid");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**import_uuid:** `string` — Trajectory import UUID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TrajectoryImportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.trajectoryImport.<a href="/src/api/resources/agent/resources/trajectoryImport/client/Client.ts">delete</a>(agent_uuid, import_uuid, { ...params }) -> Zep.Task | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Set `trajectories=delete` to queue asynchronous Trajectory deletion. The default keeps Trajectories. Example query: `?trajectories=delete`.
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
await client.agent.trajectoryImport.delete("agent_uuid", "import_uuid");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**import_uuid:** `string` — Trajectory import UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.agent.TrajectoryImportDeleteRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TrajectoryImportClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.trajectoryImport.<a href="/src/api/resources/agent/resources/trajectoryImport/client/Client.ts">update</a>(agent_uuid, import_uuid, { ...params }) -> Zep.TrajectoryImport</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use `expected_revision` to reject a stale update. Example request: `{"expected_revision":1,"name":"Updated support traces"}`.
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
await client.agent.trajectoryImport.update("agent_uuid", "import_uuid");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**import_uuid:** `string` — Trajectory import UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.agent.UpdateTrajectoryImportRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TrajectoryImportClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.trajectoryImport.<a href="/src/api/resources/agent/resources/trajectoryImport/client/Client.ts">pause</a>(agent_uuid, import_uuid) -> Zep.TrajectoryImport</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Pause a scheduled trajectory import. One-time imports cannot be paused.
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
await client.agent.trajectoryImport.pause("agent_uuid", "import_uuid");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**import_uuid:** `string` — Trajectory import UUID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TrajectoryImportClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.trajectoryImport.<a href="/src/api/resources/agent/resources/trajectoryImport/client/Client.ts">resume</a>(agent_uuid, import_uuid) -> Zep.TrajectoryImport</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Resume a scheduled trajectory import. Zep verifies credentials first when they caused the pause.
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
await client.agent.trajectoryImport.resume("agent_uuid", "import_uuid");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**import_uuid:** `string` — Trajectory import UUID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TrajectoryImportClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Agent Verifier
<details><summary><code>client.agent.verifier.<a href="/src/api/resources/agent/resources/verifier/client/Client.ts">list</a>(agent_uuid, { ...params }) -> core.Page&lt;Zep.AgentVerifier, Zep.Pagev4AgentVerifier&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.agent.verifier.list("agent_uuid");
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.agent.verifier.list("agent_uuid");
while (page.hasNextPage()) {
    page = await page.getNextPage();
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

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.agent.AgentVerifierListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VerifierClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.verifier.<a href="/src/api/resources/agent/resources/verifier/client/Client.ts">get</a>(agent_uuid, verifier_uuid) -> Zep.AgentVerifier</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.verifier.get("agent_uuid", "verifier_uuid");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**verifier_uuid:** `string` — Verifier UUID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VerifierClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.verifier.<a href="/src/api/resources/agent/resources/verifier/client/Client.ts">update</a>(agent_uuid, verifier_uuid, { ...params }) -> Zep.AgentVerifier</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.verifier.update("agent_uuid", "verifier_uuid", {
    expectedRevision: 1
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

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**verifier_uuid:** `string` — Verifier UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.agent.PatchAgentVerifierRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VerifierClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.verifier.<a href="/src/api/resources/agent/resources/verifier/client/Client.ts">invalidateEvidence</a>(agent_uuid, verifier_uuid, { ...params }) -> Zep.AgentVerifierEvidenceInvalidationResult</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.verifier.invalidateEvidence("agent_uuid", "verifier_uuid", {
    reason: "reason",
    verifierRevisions: [1]
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

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**verifier_uuid:** `string` — Verifier UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.agent.InvalidateAgentVerifierEvidenceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VerifierClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.verifier.<a href="/src/api/resources/agent/resources/verifier/client/Client.ts">revoke</a>(agent_uuid, verifier_uuid, { ...params }) -> Zep.AgentVerifier</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.verifier.revoke("agent_uuid", "verifier_uuid", {
    expectedRevision: 1
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

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**verifier_uuid:** `string` — Verifier UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.agent.RevokeAgentVerifierRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VerifierClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Agent Skill Candidate
<details><summary><code>client.agent.skill.candidate.<a href="/src/api/resources/agent/resources/skill/resources/candidate/client/Client.ts">list</a>(agent_uuid, { ...params }) -> core.Page&lt;Zep.AgentSkillCandidateReviewSummary, Zep.Pagev4AgentSkillCandidateReviewSummary&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.agent.skill.candidate.list("agent_uuid");
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.agent.skill.candidate.list("agent_uuid");
while (page.hasNextPage()) {
    page = await page.getNextPage();
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

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.agent.skill.CandidateListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CandidateClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.skill.candidate.<a href="/src/api/resources/agent/resources/skill/resources/candidate/client/Client.ts">get</a>(agent_uuid, review_uuid) -> Zep.AgentSkillCandidateReview</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.skill.candidate.get("agent_uuid", "review_uuid");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**review_uuid:** `string` — Candidate review UUID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CandidateClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Agent Skill Evaluation
<details><summary><code>client.agent.skill.evaluation.<a href="/src/api/resources/agent/resources/skill/resources/evaluation/client/Client.ts">createForCandidate</a>(agent_uuid, review_uuid, candidate_uuid, { ...params }) -> Zep.AgentSkillCandidateEvaluation</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.skill.evaluation.createForCandidate("agent_uuid", "review_uuid", "candidate_uuid", {
    evaluatedBy: "customer",
    evaluatorVersion: "evaluator_version",
    expectedRevision: 1,
    verdict: "succeeded"
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

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**review_uuid:** `string` — Candidate review UUID
    
</dd>
</dl>

<dl>
<dd>

**candidate_uuid:** `string` — Candidate UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.agent.skill.CreateAgentSkillCandidateEvaluationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EvaluationClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.skill.evaluation.<a href="/src/api/resources/agent/resources/skill/resources/evaluation/client/Client.ts">create</a>(agent_uuid, skill_uuid, { ...params }) -> Zep.AgentSkillEvaluation</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.skill.evaluation.create("agent_uuid", "skill_uuid", {
    evaluatedBy: "customer",
    evaluatorVersion: "evaluator_version",
    skillVersion: 1,
    verdict: "succeeded"
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

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**skill_uuid:** `string` — Skill UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.agent.skill.CreateAgentSkillEvaluationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EvaluationClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Agent Skill Publication
<details><summary><code>client.agent.skill.publication.<a href="/src/api/resources/agent/resources/skill/resources/publication/client/Client.ts">lookup</a>(agent_uuid, { ...params }) -> Zep.AgentSkillPublicationLineage</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Find a destination Skill by its source Agent, Skill, and version. The endpoint returns 404 until an automatic publication is ready or after it is invalidated.
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
await client.agent.skill.publication.lookup("agent_uuid", {
    sourceAgentUuid: "source_agent_uuid",
    sourceSkillUuid: "source_skill_uuid",
    sourceVersion: 1
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

**agent_uuid:** `string` — Destination Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.agent.skill.PublicationLookupRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PublicationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.skill.publication.<a href="/src/api/resources/agent/resources/skill/resources/publication/client/Client.ts">get</a>(agent_uuid, skill_uuid) -> Zep.AgentSkillPublicationLineage</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the publication that created a destination Skill. Use its source version and policy identity to verify a copied Skill. The endpoint returns 404 for unpublished and invalidated Skills.
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
await client.agent.skill.publication.get("agent_uuid", "skill_uuid");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agent_uuid:** `string` — Destination Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**skill_uuid:** `string` — Destination Skill UUID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PublicationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Agent Skill Evidence
<details><summary><code>client.agent.skill.evidence.<a href="/src/api/resources/agent/resources/skill/resources/evidence/client/Client.ts">list</a>(agent_uuid, skill_uuid, { ...params }) -> core.Page&lt;Zep.AgentSkillEvidence, Zep.Pagev4AgentSkillEvidence&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.agent.skill.evidence.list("agent_uuid", "skill_uuid");
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.agent.skill.evidence.list("agent_uuid", "skill_uuid");
while (page.hasNextPage()) {
    page = await page.getNextPage();
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

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**skill_uuid:** `string` — Skill UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.agent.skill.EvidenceListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EvidenceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Agent Skill Relation
<details><summary><code>client.agent.skill.relation.<a href="/src/api/resources/agent/resources/skill/resources/relation/client/Client.ts">list</a>(agent_uuid, skill_uuid, { ...params }) -> core.Page&lt;Zep.AgentSkillRelationship, Zep.Pagev4AgentSkillRelationship&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.agent.skill.relation.list("agent_uuid", "skill_uuid");
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.agent.skill.relation.list("agent_uuid", "skill_uuid");
while (page.hasNextPage()) {
    page = await page.getNextPage();
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

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**skill_uuid:** `string` — Skill UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.agent.skill.RelationListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RelationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Agent Skill Version
<details><summary><code>client.agent.skill.version.<a href="/src/api/resources/agent/resources/skill/resources/version/client/Client.ts">restoreVersion</a>(agent_uuid, skill_uuid, { ...params }) -> Zep.AgentSkillVersion</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.skill.version.restoreVersion("agent_uuid", "skill_uuid", {
    expectedVersion: 1,
    version: 1
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

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**skill_uuid:** `string` — Skill UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.agent.skill.RestoreAgentSkillVersionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VersionClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.skill.version.<a href="/src/api/resources/agent/resources/skill/resources/version/client/Client.ts">list</a>(agent_uuid, skill_uuid, { ...params }) -> core.Page&lt;Zep.AgentSkillVersion, Zep.Pagev4AgentSkillVersion&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.agent.skill.version.list("agent_uuid", "skill_uuid");
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.agent.skill.version.list("agent_uuid", "skill_uuid");
while (page.hasNextPage()) {
    page = await page.getNextPage();
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

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**skill_uuid:** `string` — Skill UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.agent.skill.VersionListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VersionClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.skill.version.<a href="/src/api/resources/agent/resources/skill/resources/version/client/Client.ts">compare</a>(agent_uuid, skill_uuid, { ...params }) -> Zep.AgentSkillVersionComparison</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.skill.version.compare("agent_uuid", "skill_uuid", {
    fromVersion: 1,
    toVersion: 1
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

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**skill_uuid:** `string` — Skill UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.agent.skill.CompareAgentSkillVersionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VersionClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.skill.version.<a href="/src/api/resources/agent/resources/skill/resources/version/client/Client.ts">get</a>(agent_uuid, skill_uuid, version, { ...params }) -> Zep.AgentSkillVersion</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.skill.version.get("agent_uuid", "skill_uuid", 1);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**skill_uuid:** `string` — Skill UUID
    
</dd>
</dl>

<dl>
<dd>

**version:** `number` — Skill version
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.agent.skill.VersionGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VersionClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Agent Skill Use
<details><summary><code>client.agent.skill.use.<a href="/src/api/resources/agent/resources/skill/resources/use/client/Client.ts">create</a>(agent_uuid, skill_uuid, { ...params }) -> Zep.AgentSkillUse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.skill.use.create("agent_uuid", "skill_uuid", {
    searchId: "search_id",
    trajectoryUuid: "trajectory_uuid",
    usage: "selected"
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

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**skill_uuid:** `string` — Skill UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.agent.skill.CreateAgentSkillUseRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UseClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.skill.use.<a href="/src/api/resources/agent/resources/skill/resources/use/client/Client.ts">addOutcome</a>(agent_uuid, skill_uuid, use_uuid, { ...params }) -> Zep.AgentSkillUseOutcome</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.skill.use.addOutcome("agent_uuid", "skill_uuid", "use_uuid", {
    outcome: "succeeded"
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

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**skill_uuid:** `string` — Skill UUID
    
</dd>
</dl>

<dl>
<dd>

**use_uuid:** `string` — Skill use UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.AddAgentSkillUseOutcomeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UseClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Agent Skill Export
<details><summary><code>client.agent.skill.export.<a href="/src/api/resources/agent/resources/skill/resources/export/client/Client.ts">create</a>(agent_uuid, skill_uuid, version) -> Zep.Task</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.skill.export.create("agent_uuid", "skill_uuid", 1);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**skill_uuid:** `string` — Skill UUID
    
</dd>
</dl>

<dl>
<dd>

**version:** `number` — Skill version
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExportClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.skill.export.<a href="/src/api/resources/agent/resources/skill/resources/export/client/Client.ts">get</a>(agent_uuid, skill_uuid, version, task_uuid) -> core.BinaryResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.skill.export.get("agent_uuid", "skill_uuid", 1, "task_uuid");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**skill_uuid:** `string` — Skill UUID
    
</dd>
</dl>

<dl>
<dd>

**version:** `number` — Skill version
    
</dd>
</dl>

<dl>
<dd>

**task_uuid:** `string` — Export Task UUID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Agent TrajectoryImport Run
<details><summary><code>client.agent.trajectoryImport.run.<a href="/src/api/resources/agent/resources/trajectoryImport/resources/run/client/Client.ts">list</a>(agent_uuid, import_uuid, { ...params }) -> core.Page&lt;Zep.TrajectoryImportRun, Zep.TrajectoryImportRunPage&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List runs that belong to this trajectory import.
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
const pageableResponse = await client.agent.trajectoryImport.run.list("agent_uuid", "import_uuid");
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.agent.trajectoryImport.run.list("agent_uuid", "import_uuid");
while (page.hasNextPage()) {
    page = await page.getNextPage();
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

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**import_uuid:** `string` — Trajectory import UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.agent.trajectoryImport.RunListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RunClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.trajectoryImport.run.<a href="/src/api/resources/agent/resources/trajectoryImport/resources/run/client/Client.ts">create</a>(agent_uuid, import_uuid) -> Zep.Task</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a pending run and its Task. This operation does not start the run.
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
await client.agent.trajectoryImport.run.create("agent_uuid", "import_uuid");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**import_uuid:** `string` — Trajectory import UUID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RunClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.trajectoryImport.run.<a href="/src/api/resources/agent/resources/trajectoryImport/resources/run/client/Client.ts">get</a>(agent_uuid, import_uuid, run_uuid) -> Zep.TrajectoryImportRun</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Read one run that belongs to this trajectory import.
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
await client.agent.trajectoryImport.run.get("agent_uuid", "import_uuid", "run_uuid");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**import_uuid:** `string` — Trajectory import UUID
    
</dd>
</dl>

<dl>
<dd>

**run_uuid:** `string` — Run UUID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RunClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Agent TrajectoryImport Run Item
<details><summary><code>client.agent.trajectoryImport.run.item.<a href="/src/api/resources/agent/resources/trajectoryImport/resources/run/resources/item/client/Client.ts">list</a>(agent_uuid, import_uuid, run_uuid, { ...params }) -> core.Page&lt;Zep.TrajectoryImportRunItem, Zep.TrajectoryImportRunItemPage&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List trace results for this run. Run items do not include source payload.
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
const pageableResponse = await client.agent.trajectoryImport.run.item.list("agent_uuid", "import_uuid", "run_uuid");
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.agent.trajectoryImport.run.item.list("agent_uuid", "import_uuid", "run_uuid");
while (page.hasNextPage()) {
    page = await page.getNextPage();
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

**agent_uuid:** `string` — Agent UUID
    
</dd>
</dl>

<dl>
<dd>

**import_uuid:** `string` — Trajectory import UUID
    
</dd>
</dl>

<dl>
<dd>

**run_uuid:** `string` — Run UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.agent.trajectoryImport.run.ItemListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Graph DocumentSummary
<details><summary><code>client.graph.documentSummary.<a href="/src/api/resources/graph/resources/documentSummary/client/Client.ts">list</a>(graph_uuid, { ...params }) -> core.Page&lt;Zep.DocumentSummary, Zep.DocumentSummaryPage&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.graph.documentSummary.list("graph_uuid", {
    body: {}
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.graph.documentSummary.list("graph_uuid", {
    body: {}
});
while (page.hasNextPage()) {
    page = await page.getNextPage();
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

**requestOptions:** `DocumentSummaryClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Graph Episode
<details><summary><code>client.graph.episode.<a href="/src/api/resources/graph/resources/episode/client/Client.ts">listForDocument</a>(graph_uuid, document_id, { ...params }) -> core.Page&lt;Zep.Episode, Zep.EpisodePage&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.graph.episode.listForDocument("graph_uuid", "document_id");
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.graph.episode.listForDocument("graph_uuid", "document_id");
while (page.hasNextPage()) {
    page = await page.getNextPage();
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
await client.graph.episode.add("graph_uuid", {
    data: "data"
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

<details><summary><code>client.graph.episode.<a href="/src/api/resources/graph/resources/episode/client/Client.ts">list</a>(graph_uuid, { ...params }) -> core.Page&lt;Zep.Episode, Zep.EpisodePage&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the episodes of a graph. `filters.mentioned_node_uuids` restricts
the results to episodes that mention any of the listed node UUIDs. The
list can also contain episode UUIDs: an episode UUID matches that episode,
so one request can return a known set of episodes. At most 256 entries.
`filters.metadata_filters` restricts the results to episodes whose stored
metadata matches the predicate.
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
const pageableResponse = await client.graph.episode.list("graph_uuid", {
    body: {}
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.graph.episode.list("graph_uuid", {
    body: {}
});
while (page.hasNextPage()) {
    page = await page.getNextPage();
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

**requestOptions:** `EpisodeClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.graph.episode.<a href="/src/api/resources/graph/resources/episode/client/Client.ts">get</a>(graph_uuid, episode_uuid) -> Zep.Episode</code></summary>
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

<details><summary><code>client.graph.episode.<a href="/src/api/resources/graph/resources/episode/client/Client.ts">update</a>(graph_uuid, episode_uuid, { ...params }) -> Zep.Episode</code></summary>
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

<details><summary><code>client.graph.episode.<a href="/src/api/resources/graph/resources/episode/client/Client.ts">getDebugLogs</a>(graph_uuid, episode_uuid) -> Zep.EpisodeDebugLog</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the ingestion workflow log of an episode. The log exists only when debug logging was enabled for the project when the episode was ingested (see `debug_log.enable`). The log holds episode content, so an API key with an ABAC policy needs an explicit grant of this action; the `readonly` macro does not grant it.
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
await client.graph.episode.getDebugLogs("graph_uuid", "episode_uuid");

```
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

<details><summary><code>client.graph.episode.<a href="/src/api/resources/graph/resources/episode/client/Client.ts">listIngestionTraces</a>(graph_uuid, episode_uuid, { ...params }) -> core.Page&lt;Zep.IngestionTrace, Zep.IngestionTracePage&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the ingestion traces of an episode, oldest first. Each trace records the input and the output of one ingestion step, with an explanation on each output entry that has one. Traces exist only when ingestion tracing was enabled for the project when the episode was ingested (see `debug_log.enable`). An episode with no traces returns a page with an empty `items` array. Traces hold episode content, prompt input, and model output, so an API key with an ABAC policy needs an explicit grant of this action; the `readonly` macro does not grant it.
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
const pageableResponse = await client.graph.episode.listIngestionTraces("graph_uuid", "episode_uuid");
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.graph.episode.listIngestionTraces("graph_uuid", "episode_uuid");
while (page.hasNextPage()) {
    page = await page.getNextPage();
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

**episode_uuid:** `string` — Episode UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.graph.EpisodeListIngestionTracesRequest` 
    
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

## Graph Edge
<details><summary><code>client.graph.edge.<a href="/src/api/resources/graph/resources/edge/client/Client.ts">add</a>(graph_uuid, { ...params }) -> Zep.AddEdgesResult</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Adds 1 to 100 edges. A name creates a node when deduplicate is false. When deduplicate is true, Zep matches a node by name first.
Example: {"edges":[{"fact":"Ada works at Acme Corp","fact_name":"WORKS_AT","source_node":{"uuid":"f47ac10b-58cc-4372-a567-0e02b2c3d479"},"target_node":{"uuid":"f47ac10b-58cc-4372-a567-0e02b2c3d480"}},{"fact":"Ada leads a team","fact_name":"LEADS","source_node":{"name":"Ada Lovelace","labels":["Person"]},"target_node":{"name":"Engineering","labels":["Department"]}}],"deduplicate":false}
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
await client.graph.edge.add("graph_uuid", {
    edges: [{
            fact: "Ada works at Acme Corp",
            factName: "WORKS_AT",
            sourceNode: {},
            targetNode: {}
        }]
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

**graph_uuid:** `string` — Graph UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.graph.AddEdgesRequest` 
    
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

<details><summary><code>client.graph.edge.<a href="/src/api/resources/graph/resources/edge/client/Client.ts">list</a>(graph_uuid, { ...params }) -> core.Page&lt;Zep.Edge, Zep.EdgePage&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.graph.edge.list("graph_uuid", {
    body: {}
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.graph.edge.list("graph_uuid", {
    body: {}
});
while (page.hasNextPage()) {
    page = await page.getNextPage();
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

**requestOptions:** `EdgeClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.graph.edge.<a href="/src/api/resources/graph/resources/edge/client/Client.ts">get</a>(graph_uuid, edge_uuid) -> Zep.Edge</code></summary>
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

<details><summary><code>client.graph.edge.<a href="/src/api/resources/graph/resources/edge/client/Client.ts">update</a>(graph_uuid, edge_uuid, { ...params }) -> Zep.Edge</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates one edge. When the edge belongs to a hyperedge, changing fact
rewrites it on every member of that hyperedge in one all-or-nothing
write, because the members share it. Attribute-only edits touch this
edge alone.
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

## Graph Hyperedge
<details><summary><code>client.graph.hyperedge.<a href="/src/api/resources/graph/resources/hyperedge/client/Client.ts">add</a>(graph_uuid, { ...params }) -> Zep.AddHyperedgeResult</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates one hyperedge: a fact that relates more than two nodes, written
onto one member edge per node pair. The member edges must span at least
three distinct nodes, since two nodes are a pair of edges rather than a
hyperedge; a single pair uses graph.edge.add. Zep assigns the hyperedge
identifier and every member edge identifier at accept time, and the
members become readable when the task completes.
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
await client.graph.hyperedge.add("graph_uuid", {
    edges: [{
            name: "name",
            sourceNode: {},
            targetNode: {}
        }],
    fact: "fact"
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

**graph_uuid:** `string` — Graph UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.graph.AddHyperedgeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `HyperedgeClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.graph.hyperedge.<a href="/src/api/resources/graph/resources/hyperedge/client/Client.ts">list</a>(graph_uuid, { ...params }) -> core.Page&lt;Zep.Hyperedge, Zep.HyperedgePage&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the graph's hyperedges. A hyperedge is listed while it has at
least one member edge. Supported filters are node_uuids, edge_uuids and
episode_uuids: a hyperedge matches a list when any of its members does,
and must match every list supplied.
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
const pageableResponse = await client.graph.hyperedge.list("graph_uuid", {
    body: {}
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.graph.hyperedge.list("graph_uuid", {
    body: {}
});
while (page.hasNextPage()) {
    page = await page.getNextPage();
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

**request:** `Zep.graph.HyperedgeListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `HyperedgeClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.graph.hyperedge.<a href="/src/api/resources/graph/resources/hyperedge/client/Client.ts">get</a>(graph_uuid, hyperedge_uuid) -> Zep.Hyperedge</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns one hyperedge assembled from its member edges. The fact and the
validity timestamps are shared by every member and are reported on the
hyperedge; each member reports only its own name and endpoints.
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
await client.graph.hyperedge.get("graph_uuid", "hyperedge_uuid");

```
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

**hyperedge_uuid:** `string` — Hyperedge UUID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `HyperedgeClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.graph.hyperedge.<a href="/src/api/resources/graph/resources/hyperedge/client/Client.ts">delete</a>(graph_uuid, hyperedge_uuid) -> Zep.AsyncResult</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes every member edge of the hyperedge. After the task completes the
hyperedge and each of its members are gone.
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
await client.graph.hyperedge.delete("graph_uuid", "hyperedge_uuid");

```
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

**hyperedge_uuid:** `string` — Hyperedge UUID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `HyperedgeClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.graph.hyperedge.<a href="/src/api/resources/graph/resources/hyperedge/client/Client.ts">update</a>(graph_uuid, hyperedge_uuid, { ...params }) -> Zep.Hyperedge</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the shared fact and writes it onto every member edge in one
all-or-nothing write: either every member carries the new fact or none
does. Only fact is accepted, because it is the only field the members
share. name belongs to each member edge, and membership changes use
create_edge and delete_edge. Updating fact on one member through
graph.edge.update cascades the same way.
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
await client.graph.hyperedge.update("graph_uuid", "hyperedge_uuid");

```
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

**hyperedge_uuid:** `string` — Hyperedge UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.graph.PatchHyperedgeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `HyperedgeClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.graph.hyperedge.<a href="/src/api/resources/graph/resources/hyperedge/client/Client.ts">createEdge</a>(graph_uuid, hyperedge_uuid, { ...params }) -> Zep.AddHyperedgeEdgeResult</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Adds one member edge to an existing hyperedge. The new member inherits the
hyperedge's fact and timestamps and joins its episodes, so only its own
name and node pair are supplied.
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
await client.graph.hyperedge.createEdge("graph_uuid", "hyperedge_uuid", {
    name: "name",
    sourceNode: {},
    targetNode: {}
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

**graph_uuid:** `string` — Graph UUID
    
</dd>
</dl>

<dl>
<dd>

**hyperedge_uuid:** `string` — Hyperedge UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.graph.AddHyperedgeEdgeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `HyperedgeClient.IdempotentRequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.graph.hyperedge.<a href="/src/api/resources/graph/resources/hyperedge/client/Client.ts">deleteEdge</a>(graph_uuid, hyperedge_uuid, edge_uuid) -> Zep.AsyncResult</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Removes one member edge from the hyperedge. The remaining members stay in
the hyperedge, and deleting the last member removes the hyperedge itself.
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
await client.graph.hyperedge.deleteEdge("graph_uuid", "hyperedge_uuid", "edge_uuid");

```
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

**hyperedge_uuid:** `string` — Hyperedge UUID
    
</dd>
</dl>

<dl>
<dd>

**edge_uuid:** `string` — Edge UUID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `HyperedgeClient.IdempotentRequestOptions` 
    
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
await client.graph.node.add("graph_uuid", {
    nodes: [{
            name: "name"
        }]
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

<details><summary><code>client.graph.node.<a href="/src/api/resources/graph/resources/node/client/Client.ts">list</a>(graph_uuid, { ...params }) -> core.Page&lt;Zep.Node, Zep.NodePage&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.graph.node.list("graph_uuid", {
    body: {}
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.graph.node.list("graph_uuid", {
    body: {}
});
while (page.hasNextPage()) {
    page = await page.getNextPage();
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

**requestOptions:** `NodeClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.graph.node.<a href="/src/api/resources/graph/resources/node/client/Client.ts">get</a>(graph_uuid, node_uuid) -> Zep.Node</code></summary>
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

<details><summary><code>client.graph.node.<a href="/src/api/resources/graph/resources/node/client/Client.ts">update</a>(graph_uuid, node_uuid, { ...params }) -> Zep.Node</code></summary>
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
const pageableResponse = await client.graph.node.listNeighbors("graph_uuid", "node_uuid");
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.graph.node.listNeighbors("graph_uuid", "node_uuid");
while (page.hasNextPage()) {
    page = await page.getNextPage();
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

**requestOptions:** `NodeClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Graph Observation
<details><summary><code>client.graph.observation.<a href="/src/api/resources/graph/resources/observation/client/Client.ts">list</a>(graph_uuid, { ...params }) -> core.Page&lt;Zep.Observation, Zep.ObservationPage&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.graph.observation.list("graph_uuid", {
    body: {}
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.graph.observation.list("graph_uuid", {
    body: {}
});
while (page.hasNextPage()) {
    page = await page.getNextPage();
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

**requestOptions:** `ObservationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.graph.observation.<a href="/src/api/resources/graph/resources/observation/client/Client.ts">get</a>(graph_uuid, observation_uuid) -> Zep.Observation</code></summary>
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
<details><summary><code>client.graph.threadSummary.<a href="/src/api/resources/graph/resources/threadSummary/client/Client.ts">list</a>(graph_uuid, { ...params }) -> core.Page&lt;Zep.ThreadSummary, Zep.ThreadSummaryPage&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.graph.threadSummary.list("graph_uuid", {
    body: {}
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.graph.threadSummary.list("graph_uuid", {
    body: {}
});
while (page.hasNextPage()) {
    page = await page.getNextPage();
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

**requestOptions:** `ThreadSummaryClient.RequestOptions` 
    
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

## TraceConnection Project
<details><summary><code>client.traceConnection.project.<a href="/src/api/resources/traceConnection/resources/project/client/Client.ts">list</a>(connection_uuid, { ...params }) -> core.Page&lt;Zep.TraceProviderProject, Zep.TraceProviderProjectPage&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List provider projects with the `limit` and `cursor` query parameters.
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
const pageableResponse = await client.traceConnection.project.list("connection_uuid");
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.traceConnection.project.list("connection_uuid");
while (page.hasNextPage()) {
    page = await page.getNextPage();
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

**connection_uuid:** `string` — Trace connection UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.traceConnection.ProjectListRequest` 
    
</dd>
</dl>

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

## TraceConnection Trace
<details><summary><code>client.traceConnection.trace.<a href="/src/api/resources/traceConnection/resources/trace/client/Client.ts">get</a>(connection_uuid, { ...params }) -> Zep.SourceTraceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Read one trace and optionally preview a mapping. Example body: `{"provider_project_id":"project_123","trace_id":"trace-123","mapping":{"task_family":{"source":"fixed","value":"support"}}}`.
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
await client.traceConnection.trace.get("connection_uuid", {
    providerProjectId: "project_123",
    traceId: "trace_123"
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

**connection_uuid:** `string` — Trace connection UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.traceConnection.SourceTraceGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TraceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.traceConnection.trace.<a href="/src/api/resources/traceConnection/resources/trace/client/Client.ts">list</a>(connection_uuid, { ...params }) -> core.Page&lt;Zep.SourceTraceSummary, Zep.SourceTracePage&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Filter provider traces. Example body: `{"provider_project_id":"project_123","filter":{"started_after":"2026-01-01T00:00:00Z"}}`.
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
const pageableResponse = await client.traceConnection.trace.list("connection_uuid", {
    providerProjectId: "project_123"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.traceConnection.trace.list("connection_uuid", {
    providerProjectId: "project_123"
});
while (page.hasNextPage()) {
    page = await page.getNextPage();
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

**connection_uuid:** `string` — Trace connection UUID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Zep.traceConnection.SourceTraceListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TraceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

