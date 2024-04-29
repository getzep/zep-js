/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Zep from "../../api";
import * as core from "../../core";

export const ClassifySessionResponse: core.serialization.ObjectSchema<
    serializers.ClassifySessionResponse.Raw,
    Zep.ClassifySessionResponse
> = core.serialization.object({
    class: core.serialization.string().optional(),
    name: core.serialization.string().optional(),
});

export declare namespace ClassifySessionResponse {
    interface Raw {
        class?: string | null;
        name?: string | null;
    }
}