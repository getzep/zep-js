/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Zep from "../../api/index";
import * as core from "../../core";

export const NewFact: core.serialization.ObjectSchema<serializers.NewFact.Raw, Zep.NewFact> = core.serialization.object(
    {
        fact: core.serialization.string().optional(),
    }
);

export declare namespace NewFact {
    interface Raw {
        fact?: string | null;
    }
}
