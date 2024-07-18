/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Zep from "../../api/index";
import * as core from "../../core";
import { Fact } from "./Fact";

export const FactResponse: core.serialization.ObjectSchema<serializers.FactResponse.Raw, Zep.FactResponse> =
    core.serialization.object({
        fact: Fact.optional(),
    });

export declare namespace FactResponse {
    interface Raw {
        fact?: Fact.Raw | null;
    }
}
