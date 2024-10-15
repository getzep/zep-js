/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Zep from "../../../../../api/index";
import * as core from "../../../../../core";
import { Message } from "../../../../types/Message";

export const ApidataAddMemoryRequest: core.serialization.Schema<
    serializers.ApidataAddMemoryRequest.Raw,
    Zep.ApidataAddMemoryRequest
> = core.serialization.object({
    factInstruction: core.serialization.property("fact_instruction", core.serialization.string().optional()),
    messages: core.serialization.list(Message),
    summaryInstruction: core.serialization.property("summary_instruction", core.serialization.string().optional()),
});

export declare namespace ApidataAddMemoryRequest {
    interface Raw {
        fact_instruction?: string | null;
        messages: Message.Raw[];
        summary_instruction?: string | null;
    }
}