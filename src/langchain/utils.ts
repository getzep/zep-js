import { MessageType } from "@langchain/core/messages";
import { RoleType } from "../api";

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
