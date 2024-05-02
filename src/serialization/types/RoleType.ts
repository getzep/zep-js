/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Zep from "../../api";
import * as core from "../../core";

export const RoleType: core.serialization.Schema<serializers.RoleType.Raw, Zep.RoleType> = core.serialization.enum_([
    "norole",
    "system",
    "assistant",
    "user",
    "function",
    "tool",
]);

export declare namespace RoleType {
    type Raw = "norole" | "system" | "assistant" | "user" | "function" | "tool";
}
