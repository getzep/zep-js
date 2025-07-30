# Zep OpenAI Integration

This directory contains an example of how to use the Zep OpenAI wrapper, which provides seamless integration between OpenAI's chat completions and Zep's memory capabilities.

## Features

- **Drop-in replacement**: Use `ZepOpenAI` just like the regular OpenAI client
- **Automatic context injection**: Relevant conversation history is automatically injected into prompts
- **Memory storage**: Conversations are automatically stored in Zep for future context
- **Streaming support**: Full support for OpenAI's streaming responses
- **TypeScript support**: Complete type safety with TypeScript

## Setup

1. Install required dependencies:
```bash
npm install openai @getzep/zep-cloud
```

2. Set environment variables:
```bash
export OPENAI_API_KEY="your-openai-api-key"
export ZEP_API_KEY="your-zep-api-key"
```

## Usage

```typescript
import { OpenAI } from "openai";
import { ZepClient, createZepOpenAI } from "@getzep/zep-cloud";

// Initialize clients
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const zep = new ZepClient({ apiKey: process.env.ZEP_API_KEY });

// Create ZepOpenAI wrapper
const zepOpenAI = createZepOpenAI(openai, zep);

// Use with memory integration
const response = await zepOpenAI.chat.completions.create({
    model: "gpt-3.5-turbo",
    thread_id: "unique-thread-id", // Enables memory integration
    user_id: "user-id",
    messages: [
        { role: "user", content: "Hello! My name is Alice." }
    ],
});
```

## How it works

1. **Thread Validation**: When you provide a `thread_id`, the wrapper first validates that the thread exists in Zep. If the thread doesn't exist, it throws an error instead of creating it automatically.

2. **Context Injection**: The wrapper fetches relevant context from Zep and injects it into the conversation. You can control where context is placed using:
   - **Custom placeholders**: Use `context_placeholder` parameter (defaults to `"{context}"`) to specify exactly where context should be injected in your messages
   - **Automatic injection**: If no placeholder is found, context is automatically added to the system message

3. **Memory Storage**: After each completion, the conversation (both user and assistant messages) is automatically stored in Zep for future reference.

4. **Streaming Support**: For streaming responses, the wrapper collects the complete response and stores it in Zep once the stream is finished.

## API Reference

### `createZepOpenAI(openaiClient, zepClient)`

Creates a new ZepOpenAI instance that wraps the provided OpenAI client with Zep memory capabilities.

**Parameters:**
- `openaiClient`: An instance of the OpenAI client
- `zepClient`: An instance of the ZepClient

**Returns:** A ZepOpenAI instance that can be used like a regular OpenAI client

### Extended Parameters

The `chat.completions.create()` method accepts all standard OpenAI parameters plus:

- `thread_id` (optional): Unique identifier for the conversation thread. Thread must exist or an error will be thrown.
- `user_id` (optional): Unique identifier for the user
- `context_placeholder` (optional): String to replace with Zep context in messages. Defaults to `"{context}"`

### Context Placement Examples

**Using custom placeholder:**
```typescript
const response = await zepOpenAI.chat.completions.create({
    model: "gpt-3.5-turbo",
    thread_id: "thread-123",
    context_placeholder: "{context}",
    messages: [
        { 
            role: "system", 
            content: "You are a helpful assistant. User context: {context}" 
        },
        { role: "user", content: "What do you know about me?" }
    ],
});
```

**Automatic context injection (no placeholder):**
```typescript
const response = await zepOpenAI.chat.completions.create({
    model: "gpt-3.5-turbo", 
    thread_id: "thread-123",
    messages: [
        { role: "user", content: "What do you remember about me?" }
    ],
});
// Context will be automatically added to system message
```

## Example

Run the example:

```bash
npx ts-node examples/openai/openai_example.ts
```

This example demonstrates:
- Basic chat completion with memory
- Context retrieval from previous conversations
- Streaming responses
- Error handling