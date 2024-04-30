/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Zep from "../../api";
import * as core from "../../core";
import { Message } from "./Message";
import { Summary } from "./Summary";

export const MemorySearchResult: core.serialization.ObjectSchema<
    serializers.MemorySearchResult.Raw,
    Zep.MemorySearchResult
> = core.serialization.object({
    embedding: core.serialization.list(core.serialization.number()).optional(),
    message: Message.optional(),
    metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    score: core.serialization.number().optional(),
    summary: Summary.optional(),
});

export declare namespace MemorySearchResult {
    interface Raw {
        embedding?: number[] | null;
        message?: Message.Raw | null;
        metadata?: Record<string, unknown> | null;
        score?: number | null;
        summary?: Summary.Raw | null;
    }
}
