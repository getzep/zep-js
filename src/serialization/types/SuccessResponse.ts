/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index.js";
import * as Zep from "../../api/index.js";
import * as core from "../../core/index.js";

export const SuccessResponse: core.serialization.ObjectSchema<serializers.SuccessResponse.Raw, Zep.SuccessResponse> =
    core.serialization.object({
        message: core.serialization.string().optional(),
    });

export declare namespace SuccessResponse {
    export interface Raw {
        message?: string | null;
    }
}
