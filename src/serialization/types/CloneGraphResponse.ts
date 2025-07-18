/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Zep from "../../api/index";
import * as core from "../../core";

export const CloneGraphResponse: core.serialization.ObjectSchema<
    serializers.CloneGraphResponse.Raw,
    Zep.CloneGraphResponse
> = core.serialization.object({
    groupId: core.serialization.property("group_id", core.serialization.string().optional()),
    userId: core.serialization.property("user_id", core.serialization.string().optional()),
});

export declare namespace CloneGraphResponse {
    export interface Raw {
        group_id?: string | null;
        user_id?: string | null;
    }
}
