/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Zep from "../../api/index";
import * as core from "../../core";
import { FactRatingExamples } from "./FactRatingExamples";

export const FactRatingInstruction: core.serialization.ObjectSchema<
    serializers.FactRatingInstruction.Raw,
    Zep.FactRatingInstruction
> = core.serialization.object({
    examples: FactRatingExamples.optional(),
    instruction: core.serialization.string().optional(),
});

export declare namespace FactRatingInstruction {
    export interface Raw {
        examples?: FactRatingExamples.Raw | null;
        instruction?: string | null;
    }
}
