/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Zep from "../../api/index";
import * as core from "../../core";

export const EntityEdge: core.serialization.ObjectSchema<serializers.EntityEdge.Raw, Zep.EntityEdge> =
    core.serialization.object({
        uuid: core.serialization.string(),
        sourceNodeUuid: core.serialization.property("source_node_uuid", core.serialization.string()),
        targetNodeUuid: core.serialization.property("target_node_uuid", core.serialization.string()),
        createdAt: core.serialization.property("created_at", core.serialization.string()),
        episodes: core.serialization.list(core.serialization.string()),
        expiredAt: core.serialization.property("expired_at", core.serialization.string().optional()),
        fact: core.serialization.string(),
        invalidAt: core.serialization.property("invalid_at", core.serialization.string().optional()),
        name: core.serialization.string(),
        validAt: core.serialization.property("valid_at", core.serialization.string().optional()),
    });

export declare namespace EntityEdge {
    export interface Raw {
        uuid: string;
        source_node_uuid: string;
        target_node_uuid: string;
        created_at: string;
        episodes: string[];
        expired_at?: string | null;
        fact: string;
        invalid_at?: string | null;
        name: string;
        valid_at?: string | null;
    }
}
