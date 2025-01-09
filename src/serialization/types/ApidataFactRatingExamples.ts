/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Zep from "../../api/index";
import * as core from "../../core";

export const ApidataFactRatingExamples: core.serialization.ObjectSchema<
    serializers.ApidataFactRatingExamples.Raw,
    Zep.ApidataFactRatingExamples
> = core.serialization.object({
    high: core.serialization.string().optional(),
    low: core.serialization.string().optional(),
    medium: core.serialization.string().optional(),
});

export declare namespace ApidataFactRatingExamples {
    export interface Raw {
        high?: string | null;
        low?: string | null;
        medium?: string | null;
    }
}
