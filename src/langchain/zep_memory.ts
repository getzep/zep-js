/* eslint import/no-extraneous-dependencies: 0 */

import { getInputValue, getOutputValue, InputValues, MemoryVariables, OutputValues } from "@langchain/core/memory";

import { BaseChatMemory, BaseChatMemoryInput } from "langchain/memory";
import { ZepClient } from "../";
import { Memory, NotFoundError } from "../api";
import { condenseZepMemoryIntoHumanMessage } from "./utils";

export interface ZepMemoryInput extends BaseChatMemoryInput {
    humanPrefix?: string;

    aiPrefix?: string;

    memoryKey?: string;

    baseURL?: string;

    sessionId: string;

    apiKey: string;
}

/**
 * Class used to manage the memory of a chat session, including loading
 * and saving the chat history, and clearing the memory when needed. It
 * uses the ZepClient to interact with the Zep service for managing the
 * chat session's memory.
 * @example
 * ```typescript
 * const sessionId = randomUUID();
 *
 * // Initialize ZepMemory with session ID, base URL, and API key
 * const memory = new ZepMemory({
 *   sessionId,
 *   apiKey: "change_this_key",
 * });
 *
 * // Create a ChatOpenAI model instance with specific parameters
 * const model = new ChatOpenAI({
 *   modelName: "gpt-3.5-turbo",
 *   temperature: 0,
 * });
 *
 * // Create a ConversationChain with the model and memory
 * const chain = new ConversationChain({ llm: model, memory });
 *
 * // Example of calling the chain with an input
 * const res1 = await chain.call({ input: "Hi! I'm Jim." });
 * console.log({ res1 });
 *
 * // Follow-up call to the chain to demonstrate memory usage
 * const res2 = await chain.call({ input: "What did I just say my name was?" });
 * console.log({ res2 });
 *
 * // Output the session ID and the current state of memory
 * console.log("Session ID: ", sessionId);
 * console.log("Memory: ", await memory.loadMemoryVariables({}));
 *
 * ```
 */
export class ZepMemory extends BaseChatMemory implements ZepMemoryInput {
    humanPrefix = "Human";

    aiPrefix = "AI";

    memoryKey = "history";

    apiKey: string;

    sessionId: string;

    zepClient: ZepClient;

    constructor(fields: ZepMemoryInput) {
        super({
            returnMessages: fields?.returnMessages ?? false,
            inputKey: fields?.inputKey,
            outputKey: fields?.outputKey,
        });

        this.humanPrefix = fields.humanPrefix ?? this.humanPrefix;
        this.aiPrefix = fields.aiPrefix ?? this.aiPrefix;
        this.memoryKey = fields.memoryKey ?? this.memoryKey;
        this.apiKey = fields.apiKey;
        this.sessionId = fields.sessionId;
        this.zepClient = new ZepClient({
            environment: fields.baseURL,
            apiKey: this.apiKey,
        });
    }

    get memoryKeys() {
        return [this.memoryKey];
    }

    /**
     * Method that retrieves the chat history from the Zep service and formats
     * it into a list of messages.
     * @param values Input values for the method.
     * @returns Promise that resolves with the chat history formatted into a list of messages.
     */
    async loadMemoryVariables(values: InputValues): Promise<MemoryVariables> {
        // use either lastN provided by developer or undefined to use the
        // server preset.

        const memoryType = values.memoryType ?? "perpetual";
        let memory: Memory | null = null;
        try {
            memory = await this.zepClient.memory.get(this.sessionId, {
                memoryType: memoryType,
            });
        } catch (error) {
            if (error instanceof NotFoundError) {
                return this.returnMessages ? { [this.memoryKey]: [] } : { [this.memoryKey]: "" };
            }
            throw error;
        }

        if (this.returnMessages) {
            return {
                [this.memoryKey]: [condenseZepMemoryIntoHumanMessage(memory)],
            };
        }
        return {
            [this.memoryKey]: condenseZepMemoryIntoHumanMessage(memory).content,
        };
    }

    /**
     * Method that saves the input and output messages to the Zep service.
     * @param inputValues Input messages to be saved.
     * @param outputValues Output messages to be saved.
     * @returns Promise that resolves when the messages have been saved.
     */
    async saveContext(inputValues: InputValues, outputValues: OutputValues): Promise<void> {
        const input = getInputValue(inputValues, this.inputKey);
        const output = getOutputValue(outputValues, this.outputKey);

        // Add the new memory to the session using the ZepClient
        if (this.sessionId) {
            try {
                await this.zepClient.memory.add(this.sessionId, {
                    messages: [
                        {
                            role: this.humanPrefix,
                            roleType: "user",
                            content: `${input}`,
                        },
                        {
                            role: this.aiPrefix,
                            roleType: "assistant",
                            content: `${output}`,
                        },
                    ],
                });
            } catch (error) {
                console.error("Error adding memory: ", error);
            }
        }

        // Call the superclass's saveContext method
        await super.saveContext(inputValues, outputValues);
    }

    /**
     * Method that deletes the chat history from the Zep service.
     * @returns Promise that resolves when the chat history has been deleted.
     */
    async clear(): Promise<void> {
        try {
            await this.zepClient.memory.delete(this.sessionId);
        } catch (error) {
            console.error("Error deleting session: ", error);
        }

        // Clear the superclass's chat history
        await super.clear();
    }
}
