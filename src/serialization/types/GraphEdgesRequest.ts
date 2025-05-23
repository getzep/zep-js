/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Zep from "../../api/index";
import * as core from "../../core";

export const GraphEdgesRequest: core.serialization.ObjectSchema<
    serializers.GraphEdgesRequest.Raw,
    Zep.GraphEdgesRequest
> = core.serialization.object({
    limit: core.serialization.number().optional(),
    uuidCursor: core.serialization.property("uuid_cursor", core.serialization.string().optional()),
});

export declare namespace GraphEdgesRequest {
    export interface Raw {
        limit?: number | null;
        uuid_cursor?: string | null;
    }
}
