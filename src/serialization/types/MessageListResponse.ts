/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Zep from "../../api/index";
import * as core from "../../core";
import { Message } from "./Message";

export const MessageListResponse: core.serialization.ObjectSchema<
    serializers.MessageListResponse.Raw,
    Zep.MessageListResponse
> = core.serialization.object({
    messages: core.serialization.list(Message).optional(),
    rowCount: core.serialization.property("row_count", core.serialization.number().optional()),
    totalCount: core.serialization.property("total_count", core.serialization.number().optional()),
});

export declare namespace MessageListResponse {
    interface Raw {
        messages?: Message.Raw[] | null;
        row_count?: number | null;
        total_count?: number | null;
    }
}