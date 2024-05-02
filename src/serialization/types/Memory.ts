/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Zep from "../../api/index";
import * as core from "../../core";
import { Message } from "./Message";
import { Summary } from "./Summary";

export const Memory: core.serialization.ObjectSchema<serializers.Memory.Raw, Zep.Memory> = core.serialization.object({
    facts: core.serialization.list(core.serialization.string()).optional(),
    messages: core.serialization.list(Message).optional(),
    metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    summary: Summary.optional(),
});

export declare namespace Memory {
    interface Raw {
        facts?: string[] | null;
        messages?: Message.Raw[] | null;
        metadata?: Record<string, unknown> | null;
        summary?: Summary.Raw | null;
    }
}
