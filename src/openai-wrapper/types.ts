import OpenAI from "openai";

export interface ZepChatCompletionCreateParams {
    /** Optional thread ID for Zep memory integration */
    thread_id?: string;
    /** Optional user ID for Zep memory integration */  
    user_id?: string;
    /** Context placeholder string to replace with Zep context. Defaults to "{context}" */
    context_placeholder?: string;
    /** The model to use for completion */
    model: string;
    /** Messages for the conversation */
    messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[];
    /** Whether to stream the response */
    stream?: boolean;
    /** Temperature for randomness */
    temperature?: number;
    /** Maximum tokens to generate */
    max_tokens?: number;
    /** Top-p sampling */
    top_p?: number;
    /** Frequency penalty */
    frequency_penalty?: number;
    /** Presence penalty */
    presence_penalty?: number;
    /** Stop sequences */
    stop?: string | string[];
    /** Tool choice */
    tool_choice?: OpenAI.Chat.Completions.ChatCompletionToolChoiceOption;
    /** Tools available to the model */
    tools?: OpenAI.Chat.Completions.ChatCompletionTool[];
    /** User identifier */
    user?: string;
}

export interface ZepStreamWrapper<T> {
    [Symbol.asyncIterator](): AsyncIterator<T>;
    tee(): [ZepStreamWrapper<T>, ZepStreamWrapper<T>];
    controller: ReadableStreamDefaultController<T>;
}

export interface ZepChatCompletionsWrapper {
    create(
        params: ZepChatCompletionCreateParams,
        options?: OpenAI.RequestOptions
    ): Promise<OpenAI.Chat.Completions.ChatCompletion>;
    
    create(
        params: ZepChatCompletionCreateParams & { stream: true },
        options?: OpenAI.RequestOptions
    ): Promise<ZepStreamWrapper<OpenAI.Chat.Completions.ChatCompletionChunk>>;
}

export interface ZepChatWrapper {
    completions: ZepChatCompletionsWrapper;
}