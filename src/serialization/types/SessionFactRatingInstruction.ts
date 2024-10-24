/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Zep from "../../api/index";
import * as core from "../../core";
import { SessionFactRatingExamples } from "./SessionFactRatingExamples";

export const SessionFactRatingInstruction: core.serialization.ObjectSchema<
    serializers.SessionFactRatingInstruction.Raw,
    Zep.SessionFactRatingInstruction
> = core.serialization.object({
    examples: SessionFactRatingExamples.optional(),
    instruction: core.serialization.string().optional(),
});

export declare namespace SessionFactRatingInstruction {
    interface Raw {
        examples?: SessionFactRatingExamples.Raw | null;
        instruction?: string | null;
    }
}
