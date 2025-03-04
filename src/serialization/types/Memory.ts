/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Zep from "../../api/index";
import * as core from "../../core";
import { Message } from "./Message";
import { Fact } from "./Fact";
import { Summary } from "./Summary";

export const Memory: core.serialization.ObjectSchema<serializers.Memory.Raw, Zep.Memory> = core.serialization.object({
    context: core.serialization.string().optional(),
    facts: core.serialization.list(core.serialization.string()),
    messages: core.serialization.list(Message),
    metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    relevantFacts: core.serialization.property("relevant_facts", core.serialization.list(Fact)),
    summary: Summary.optional(),
});

export declare namespace Memory {
    export interface Raw {
        context?: string | null;
        facts: string[];
        messages: Message.Raw[];
        metadata?: Record<string, unknown> | null;
        relevant_facts: Fact.Raw[];
        summary?: Summary.Raw | null;
    }
}
