/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Zep from "../../../../../api/index";
import * as core from "../../../../../core";

export const ExtractDataRequest: core.serialization.Schema<serializers.ExtractDataRequest.Raw, Zep.ExtractDataRequest> =
    core.serialization.object({
        currentDateTime: core.serialization.property("current_date_time", core.serialization.string().optional()),
        lastN: core.serialization.property("last_n", core.serialization.number()),
        modelSchema: core.serialization.property("model_schema", core.serialization.string()),
        validate: core.serialization.boolean().optional(),
    });

export declare namespace ExtractDataRequest {
    export interface Raw {
        current_date_time?: string | null;
        last_n: number;
        model_schema: string;
        validate?: boolean | null;
    }
}
