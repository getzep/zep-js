/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Zep from "../../api/index";
import * as core from "../../core";

export const Fact: core.serialization.ObjectSchema<serializers.Fact.Raw, Zep.Fact> = core.serialization.object({
    content: core.serialization.string(),
    createdAt: core.serialization.property("created_at", core.serialization.string()),
    expiredAt: core.serialization.property("expired_at", core.serialization.string().optional()),
    fact: core.serialization.string(),
    invalidAt: core.serialization.property("invalid_at", core.serialization.string().optional()),
    name: core.serialization.string().optional(),
    rating: core.serialization.number().optional(),
    sourceNodeName: core.serialization.property("source_node_name", core.serialization.string().optional()),
    targetNodeName: core.serialization.property("target_node_name", core.serialization.string().optional()),
    uuid: core.serialization.string(),
    validAt: core.serialization.property("valid_at", core.serialization.string().optional()),
});

export declare namespace Fact {
    export interface Raw {
        content: string;
        created_at: string;
        expired_at?: string | null;
        fact: string;
        invalid_at?: string | null;
        name?: string | null;
        rating?: number | null;
        source_node_name?: string | null;
        target_node_name?: string | null;
        uuid: string;
        valid_at?: string | null;
    }
}
