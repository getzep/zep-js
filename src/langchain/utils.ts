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

    if (memory.relevantFacts) {
        const relevantFactStrings: string[] = memory.relevantFacts.map(({fact}) => fact).filter(x => !!x) as string[];
        systemPrompt += relevantFactStrings.join("\n");
    }

    // Extract summary, if present, and messages
    if (memory.summary && memory.summary?.content) {
        systemPrompt += memory.summary.content;
    }

    let concatMessages = "";

    if (memory.messages) {
        concatMessages = memory.messages
            .map((msg) => {
                return `${msg.role ?? msg.roleType}: ${msg.content}`;
            })
            .join("\n");
    }

    return new HumanMessage(systemPrompt + "\n" + concatMessages);
};
