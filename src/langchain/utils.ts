import { HumanMessage, MessageType } from "@langchain/core/messages";
import { Memory, RoleType } from "../api";

export const getZepMessageRoleType = (role: MessageType): RoleType => {
    switch (role) {
        case "human":
            return "user";
        case "ai":
            return "assistant";
        case "system":
            return "system";
        case "function":
            return "function";
        case "tool":
            return "tool";
        default:
            return "norole";
    }
};

export const condenseZepMemoryIntoHumanMessage = (memory: Memory) => {
    let systemPrompt = "";

    if (memory.facts) {
        systemPrompt += memory.facts.join("\n");
    }

    // Extract summary, if present, and messages
    if (memory.summary && memory.summary?.content) {
        systemPrompt += memory.summary.content;
    }

    let concatMessages = "";

    if (memory.messages) {
        concatMessages = memory.messages
            .map((msg) => {
                return JSON.stringify({
                    role: msg.role,
                    content: msg.content,
                    createdAt: msg.createdAt,
                });
            })
            .join("\n");
    }

    return new HumanMessage(systemPrompt + "\n" + concatMessages);
};
