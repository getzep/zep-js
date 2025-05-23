/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Zep from "../../api/index";
import * as core from "../../core";
import { RoleType } from "./RoleType";

export const Message: core.serialization.ObjectSchema<serializers.Message.Raw, Zep.Message> = core.serialization.object(
    {
        content: core.serialization.string(),
        createdAt: core.serialization.property("created_at", core.serialization.string().optional()),
        metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
        processed: core.serialization.boolean().optional(),
        role: core.serialization.string().optional(),
        roleType: core.serialization.property("role_type", RoleType),
        tokenCount: core.serialization.property("token_count", core.serialization.number().optional()),
        updatedAt: core.serialization.property("updated_at", core.serialization.string().optional()),
        uuid: core.serialization.string().optional(),
    },
);

export declare namespace Message {
    export interface Raw {
        content: string;
        created_at?: string | null;
        metadata?: Record<string, unknown> | null;
        processed?: boolean | null;
        role?: string | null;
        role_type: RoleType.Raw;
        token_count?: number | null;
        updated_at?: string | null;
        uuid?: string | null;
    }
}
