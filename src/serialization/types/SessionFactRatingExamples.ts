/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Zep from "../../api/index";
import * as core from "../../core";

export const SessionFactRatingExamples: core.serialization.ObjectSchema<
    serializers.SessionFactRatingExamples.Raw,
    Zep.SessionFactRatingExamples
> = core.serialization.object({
    high: core.serialization.string().optional(),
    low: core.serialization.string().optional(),
    medium: core.serialization.string().optional(),
});

export declare namespace SessionFactRatingExamples {
    interface Raw {
        high?: string | null;
        low?: string | null;
        medium?: string | null;
    }
}