/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index.js";
import * as Zep from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import { FactRatingInstruction } from "../../../../types/FactRatingInstruction.js";

export const UpdateUserRequest: core.serialization.Schema<serializers.UpdateUserRequest.Raw, Zep.UpdateUserRequest> =
    core.serialization.object({
        email: core.serialization.string().optional(),
        factRatingInstruction: core.serialization.property("fact_rating_instruction", FactRatingInstruction.optional()),
        firstName: core.serialization.property("first_name", core.serialization.string().optional()),
        lastName: core.serialization.property("last_name", core.serialization.string().optional()),
        metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    });

export declare namespace UpdateUserRequest {
    export interface Raw {
        email?: string | null;
        fact_rating_instruction?: FactRatingInstruction.Raw | null;
        first_name?: string | null;
        last_name?: string | null;
        metadata?: Record<string, unknown> | null;
    }
}
