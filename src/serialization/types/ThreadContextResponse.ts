/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Zep from "../../api/index";
import * as core from "../../core";
import { Message } from "./Message";
import { Fact } from "./Fact";

export const ThreadContextResponse: core.serialization.ObjectSchema<
    serializers.ThreadContextResponse.Raw,
    Zep.ThreadContextResponse
> = core.serialization.object({
    context: core.serialization.string().optional(),
    messages: core.serialization.list(Message).optional(),
    relevantFacts: core.serialization.property("relevant_facts", core.serialization.list(Fact).optional()),
});

export declare namespace ThreadContextResponse {
    export interface Raw {
        context?: string | null;
        messages?: Message.Raw[] | null;
        relevant_facts?: Fact.Raw[] | null;
    }
}
