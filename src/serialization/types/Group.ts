/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Zep from "../../api/index";
import * as core from "../../core";

export const Group: core.serialization.ObjectSchema<serializers.Group.Raw, Zep.Group> = core.serialization.object({
    createdAt: core.serialization.property("created_at", core.serialization.string().optional()),
    description: core.serialization.string().optional(),
    externalId: core.serialization.property("external_id", core.serialization.string().optional()),
    id: core.serialization.number().optional(),
    name: core.serialization.string().optional(),
    projectUuid: core.serialization.property("project_uuid", core.serialization.string().optional()),
    uuid: core.serialization.string().optional(),
});

export declare namespace Group {
    export interface Raw {
        created_at?: string | null;
        description?: string | null;
        external_id?: string | null;
        id?: number | null;
        name?: string | null;
        project_uuid?: string | null;
        uuid?: string | null;
    }
}
