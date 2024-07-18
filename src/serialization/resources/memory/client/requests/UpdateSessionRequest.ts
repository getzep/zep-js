/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Zep from "../../../../../api/index";
import * as core from "../../../../../core";
import { FactRatingInstruction } from "../../../../types/FactRatingInstruction";

export const UpdateSessionRequest: core.serialization.Schema<
    serializers.UpdateSessionRequest.Raw,
    Zep.UpdateSessionRequest
> = core.serialization.object({
    factRatingInstruction: core.serialization.property("fact_rating_instruction", FactRatingInstruction.optional()),
    metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()),
});

export declare namespace UpdateSessionRequest {
    interface Raw {
        fact_rating_instruction?: FactRatingInstruction.Raw | null;
        metadata: Record<string, unknown>;
    }
}
