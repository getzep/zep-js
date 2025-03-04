/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Zep from "../../api/index";
import * as core from "../../core";

export const SessionClassification: core.serialization.ObjectSchema<
    serializers.SessionClassification.Raw,
    Zep.SessionClassification
> = core.serialization.object({
    class: core.serialization.string(),
    label: core.serialization.string(),
});

export declare namespace SessionClassification {
    export interface Raw {
        class: string;
        label: string;
    }
}
