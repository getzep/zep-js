/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Zep from "../../api/index";
import * as core from "../../core";

export const AddMemoryResponse: core.serialization.ObjectSchema<
    serializers.AddMemoryResponse.Raw,
    Zep.AddMemoryResponse
> = core.serialization.object({
    context: core.serialization.string().optional(),
});

export declare namespace AddMemoryResponse {
    interface Raw {
        context?: string | null;
    }
}
