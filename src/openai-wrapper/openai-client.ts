import OpenAI from "openai";
import { Stream } from "openai/streaming";
import { ZepClient } from "../wrapper";
import { ZepOpenAIError } from "./openai-error";
import type { 
    ZepChatCompletionCreateParams, 
    ZepStreamWrapper, 
    ZepChatCompletionsWrapper,
    ZepChatWrapper
} from "./types";

class ChatCompletionsWrapper implements ZepChatCompletionsWrapper {
    private openaiCompletions: OpenAI.Chat.Completions;
    private zepClient: ZepClient;

    constructor(openaiCompletions: OpenAI.Chat.Completions, zepClient: ZepClient) {
        this.openaiCompletions = openaiCompletions;
        this.zepClient = zepClient;
    }

    async create(
        params: ZepChatCompletionCreateParams,
        options?: OpenAI.RequestOptions
    ): Promise<OpenAI.Chat.Completions.ChatCompletion>;
    
    async create(
        params: ZepChatCompletionCreateParams & { stream: true },
        options?: OpenAI.RequestOptions
    ): Promise<ZepStreamWrapper<OpenAI.Chat.Completions.ChatCompletionChunk>>;

    async create(
        params: ZepChatCompletionCreateParams,
        options?: OpenAI.RequestOptions
    ): Promise<OpenAI.Chat.Completions.ChatCompletion | ZepStreamWrapper<OpenAI.Chat.Completions.ChatCompletionChunk>> {
        const { thread_id, user_id, context_placeholder = "{context}", ...openaiParams } = params;

        // If thread_id is provided, validate thread exists and inject context from Zep
        if (thread_id) {
            try {
                // First, ensure the thread exists by trying to get its context
                const contextResponse = await this.zepClient.thread.getUserContext(thread_id, {});
                
                if (contextResponse && contextResponse.context && contextResponse.context.trim()) {
                    // Check if any messages contain the context placeholder
                    const messages = [...openaiParams.messages];
                    let contextInjected = false;

                    // Look for context placeholder in existing messages
                    for (const message of messages) {
                        if (typeof message.content === "string" && message.content.includes(context_placeholder)) {
                            message.content = message.content.replace(context_placeholder, contextResponse.context);
                            contextInjected = true;
                        }
                    }

                    // If no placeholder was found, fall back to adding context to system message
                    if (!contextInjected) {
                        const systemMessage: OpenAI.Chat.Completions.ChatCompletionSystemMessageParam = {
                            role: "system",
                            content: `Context from previous conversations:\n${contextResponse.context}`
                        };

                        const hasSystemMessage = messages.some(msg => msg.role === "system");
                        
                        if (!hasSystemMessage) {
                            messages.unshift(systemMessage);
                        } else {
                            // Append to existing system message
                            const systemMsgIndex = messages.findIndex(msg => msg.role === "system");
                            if (systemMsgIndex >= 0) {
                                const existingSystemMsg = messages[systemMsgIndex];
                                if (typeof existingSystemMsg.content === "string") {
                                    existingSystemMsg.content += `\n\n${systemMessage.content}`;
                                }
                            }
                        }
                    }
                    
                    openaiParams.messages = messages;
                }
            } catch (error) {
                // Check if it's a thread not found error
                const errorStr = String(error).toLowerCase();
                if (errorStr.includes("not found") || errorStr.includes("404")) {
                    throw new ZepOpenAIError(`Thread with ID '${thread_id}' not found. Please create the thread first.`);
                }
                // For other errors, log warning and continue
                console.warn("Failed to fetch Zep context:", error);
            }
        }

        // Handle streaming response
        if (params.stream) {
            const streamParams = { ...openaiParams, stream: true } as OpenAI.Chat.Completions.ChatCompletionCreateParamsStreaming;
            const stream = await this.openaiCompletions.create(streamParams, options);
            return this.wrapStream(stream, thread_id, user_id, openaiParams.messages[openaiParams.messages.length - 1]);
        }

        // Handle regular response
        const nonStreamParams = { ...openaiParams } as OpenAI.Chat.Completions.ChatCompletionCreateParamsNonStreaming;
        const response = await this.openaiCompletions.create(nonStreamParams, options);
        
        // Store the conversation in Zep if thread_id is provided
        if (thread_id && response.choices?.[0]?.message) {
            try {
                const userMessage = openaiParams.messages[openaiParams.messages.length - 1];
                const assistantMessage = response.choices[0].message;

                await this.zepClient.thread.addMessages(thread_id, {
                    messages: [
                        {
                            role: userMessage.role as any,
                            content: typeof userMessage.content === "string" ? userMessage.content : JSON.stringify(userMessage.content)
                        },
                        {
                            role: assistantMessage.role as any,
                            content: assistantMessage.content || ""
                        }
                    ]
                });
            } catch (error) {
                console.warn("Failed to store conversation in Zep:", error);
            }
        }

        return response;
    }

    private wrapStream(
        stream: Stream<OpenAI.Chat.Completions.ChatCompletionChunk>,
        threadId?: string,
        userId?: string,
        userMessage?: OpenAI.Chat.Completions.ChatCompletionMessageParam
    ): ZepStreamWrapper<OpenAI.Chat.Completions.ChatCompletionChunk> {
        let collectedContent = "";
        const zepClient = this.zepClient;
        
        const wrappedStream = {
            async *[Symbol.asyncIterator]() {
                for await (const chunk of stream) {
                    // Collect content for storage in Zep
                    if (chunk.choices?.[0]?.delta?.content) {
                        collectedContent += chunk.choices[0].delta.content;
                    }
                    yield chunk;
                }

                // Store the complete response in Zep if thread_id is provided
                if (threadId && collectedContent && userMessage) {
                    try {
                        await zepClient.thread.addMessages(threadId, {
                            messages: [
                                {
                                    role: userMessage.role as any,
                                    content: typeof userMessage.content === "string" ? userMessage.content : JSON.stringify(userMessage.content)
                                },
                                {
                                    role: "assistant",
                                    content: collectedContent
                                }
                            ]
                        });
                    } catch (error) {
                        console.warn("Failed to store streaming response in Zep:", error);
                    }
                }
            },
            
            tee(): [ZepStreamWrapper<OpenAI.Chat.Completions.ChatCompletionChunk>, ZepStreamWrapper<OpenAI.Chat.Completions.ChatCompletionChunk>] {
                // Simple implementation - in a real scenario, you'd want to properly tee the stream  
                return [this, this];
            },

            controller: new ReadableStreamDefaultController()
        };

        return wrappedStream;
    }
}

class ChatWrapper implements ZepChatWrapper {
    public completions: ZepChatCompletionsWrapper;

    constructor(openaiChat: OpenAI.Chat, zepClient: ZepClient) {
        this.completions = new ChatCompletionsWrapper(openaiChat.completions, zepClient);
    }
}

export class ZepOpenAI {
    public readonly openaiClient: OpenAI;
    private zepClient: ZepClient;
    public chat: ZepChatWrapper;

    constructor(openaiClient: OpenAI, zepClient: ZepClient) {
        this.openaiClient = openaiClient;
        this.zepClient = zepClient;
        this.chat = new ChatWrapper(openaiClient.chat, zepClient);
    }

    // Pass through all other OpenAI client properties
    get [Symbol.toStringTag]() {
        return "ZepOpenAI";
    }
}

// Set up proxy to pass through unknown properties to the OpenAI client
export const createZepOpenAI = (openaiClient: OpenAI, zepClient: ZepClient): ZepOpenAI => {
    const zepOpenAI = new ZepOpenAI(openaiClient, zepClient);
    
    return new Proxy(zepOpenAI, {
        get(target, prop, receiver) {
            // Return existing properties first
            if (prop in target) {
                return Reflect.get(target, prop, receiver);
            }
            
            // Pass through to the original OpenAI client
            const value = Reflect.get(target.openaiClient, prop, target.openaiClient);
            if (typeof value === "function") {
                return value.bind(target.openaiClient);
            }
            return value;
        },
        
        has(target, prop) {
            return prop in target || prop in target.openaiClient;
        },
        
        ownKeys(target) {
            return Array.from(new Set([
                ...Reflect.ownKeys(target),
                ...Reflect.ownKeys(target.openaiClient)
            ]));
        }
    });
};