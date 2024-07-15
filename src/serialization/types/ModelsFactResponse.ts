/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Zep from "../../api/index";
import * as core from "../../core";
import { Fact } from "./Fact";

export const ModelsFactResponse: core.serialization.ObjectSchema<
    serializers.ModelsFactResponse.Raw,
    Zep.ModelsFactResponse
> = core.serialization.object({
    fact: Fact.optional(),
});

export declare namespace ModelsFactResponse {
    interface Raw {
        fact?: Fact.Raw | null;
    }
}
