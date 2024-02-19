![npm](https://img.shields.io/npm/dw/%40getzep/zep-js) [![node-build-test](https://github.com/getzep/zep-js/actions/workflows/node-build-test.yml/badge.svg)](https://github.com/getzep/zep-js/actions/workflows/node-build-test.yml) [![CodeQL](https://github.com/getzep/zep-js/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/getzep/zep-js/actions/workflows/github-code-scanning/codeql)

<p align="center">
  <a href="https://squidfunk.github.io/mkdocs-material/">
    <img src="https://github.com/getzep/zep/blob/main/assets/zep-bot-square-200x200.png?raw=true" width="150" alt="Zep Logo">
  </a>
</p>

<h1 align="center">
Zep: Fast, scalable building blocks for LLM apps
</h1>
<h2 align="center">Chat history memory, embedding, vector search, data enrichment, and more.</h2>

<p align="center">
<a href="https://docs.getzep.com/deployment/quickstart/">Quick Start</a> | 
<a href="https://docs.getzep.com/">Documentation</a> | 
<a href="https://docs.getzep.com/sdk/langchain/">LangChain</a> and 
<a href="https://docs.getzep.com/sdk/langchain/">LlamaIndex</a> Support | 
<a href="https://discord.gg/W8Kw6bsgXQ">Discord</a><br />
<a href="https://www.getzep.com">www.getzep.com</a>
</p>

## What is Zep?
Zep is an open source platform for productionizing LLM apps. Zep summarizes, embeds, and enriches chat histories and documents asynchronously, ensuring these operations don't impact your user's chat experience. Data is persisted to database, allowing you to scale out when growth demands. As drop-in replacements for popular LangChain components, you can get to production in minutes without rewriting code.

[![Zep Demo Video](https://img.youtube.com/vi/d6ryNEvMXno/maxresdefault.jpg)](https://vimeo.com/865785086?share=copy)


## Zep TypeScript / JavaScript Client

This is the TypeScript / JavaScript client package for the Zep service. For more information about Zep, see https://github.com/getzep/zep

## Installation

```bash
npm install @getzep/zep-js
```

## Zep cloud Installation
In order to install zep js sdk with zep-cloud support, you will need to install
a pre-release version tagged with `@next`.

```bash
npm install @getzep/zep-js@next
```

You will also need to provide a Zep Project API key to your zep client for cloud support.
You can find out about zep projects in our [cloud docs](https://help.getzep.com/projects.html)

### Using langchain zep classes with `zep-js@next`:
In the pre-release version `zep-js` sdk comes with `ZepChatMessageHistory`, `ZepVectorStore` and `ZepMemory`
classes that are compatible with [`Langchain's JS expression language`](https://js.langchain.com/docs/expression_language/)

In order to use these classes in your application, you need to make sure that you have 
`langchain` package installed:

```bash
npm install langchain@^0.1.23
```

You can import these classes in the following way:

```typescript
import { ZepChatMessageHistory, ZepVectorStore, ZepMemory } from "@getzep/zep-js/langchain"
```

