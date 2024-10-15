/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Zep from "../../../../../api/index";
import * as core from "../../../../../core";

export const CreateGroupRequest: core.serialization.Schema<serializers.CreateGroupRequest.Raw, Zep.CreateGroupRequest> =
    core.serialization.object({
        description: core.serialization.string().optional(),
        groupId: core.serialization.property("group_id", core.serialization.string().optional()),
        name: core.serialization.string().optional(),
        userIds: core.serialization.property(
            "user_ids",
            core.serialization.list(core.serialization.string()).optional()
        ),
    });

export declare namespace CreateGroupRequest {
    interface Raw {
        description?: string | null;
        group_id?: string | null;
        name?: string | null;
        user_ids?: string[] | null;
    }
}