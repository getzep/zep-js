/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Zep from "../../../../../api/index";
import * as core from "../../../../../core";

export const CloneGraphRequest: core.serialization.Schema<serializers.CloneGraphRequest.Raw, Zep.CloneGraphRequest> =
    core.serialization.object({
        sourceGroupId: core.serialization.property("source_group_id", core.serialization.string().optional()),
        sourceUserId: core.serialization.property("source_user_id", core.serialization.string().optional()),
        targetGroupId: core.serialization.property("target_group_id", core.serialization.string().optional()),
        targetUserId: core.serialization.property("target_user_id", core.serialization.string().optional()),
    });

export declare namespace CloneGraphRequest {
    export interface Raw {
        source_group_id?: string | null;
        source_user_id?: string | null;
        target_group_id?: string | null;
        target_user_id?: string | null;
    }
}
