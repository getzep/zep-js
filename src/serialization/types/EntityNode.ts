/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index.js";
import * as Zep from "../../api/index.js";
import * as core from "../../core/index.js";

export const EntityNode: core.serialization.ObjectSchema<serializers.EntityNode.Raw, Zep.EntityNode> =
    core.serialization.object({
        attributes: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
        createdAt: core.serialization.property("created_at", core.serialization.string()),
        labels: core.serialization.list(core.serialization.string()).optional(),
        name: core.serialization.string(),
        score: core.serialization.number().optional(),
        summary: core.serialization.string(),
        uuid: core.serialization.string(),
    });

export declare namespace EntityNode {
    export interface Raw {
        attributes?: Record<string, unknown> | null;
        created_at: string;
        labels?: string[] | null;
        name: string;
        score?: number | null;
        summary: string;
        uuid: string;
    }
}
