/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Zep from "../../api/index";
import * as core from "../../core";

export const Session: core.serialization.ObjectSchema<serializers.Session.Raw, Zep.Session> = core.serialization.object(
    {
        classifications: core.serialization.record(core.serialization.string(), core.serialization.string()).optional(),
        createdAt: core.serialization.property("created_at", core.serialization.string().optional()),
        deletedAt: core.serialization.property("deleted_at", core.serialization.string().optional()),
        endedAt: core.serialization.property("ended_at", core.serialization.string().optional()),
        factVersionUuid: core.serialization.property("fact_version_uuid", core.serialization.string().optional()),
        facts: core.serialization.list(core.serialization.string()).optional(),
        id: core.serialization.number().optional(),
        metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
        projectUuid: core.serialization.property("project_uuid", core.serialization.string().optional()),
        sessionId: core.serialization.property("session_id", core.serialization.string().optional()),
        updatedAt: core.serialization.property("updated_at", core.serialization.string().optional()),
        userId: core.serialization.property("user_id", core.serialization.string().optional()),
        uuid: core.serialization.string().optional(),
    }
);

export declare namespace Session {
    interface Raw {
        classifications?: Record<string, string> | null;
        created_at?: string | null;
        deleted_at?: string | null;
        ended_at?: string | null;
        fact_version_uuid?: string | null;
        facts?: string[] | null;
        id?: number | null;
        metadata?: Record<string, unknown> | null;
        project_uuid?: string | null;
        session_id?: string | null;
        updated_at?: string | null;
        user_id?: string | null;
        uuid?: string | null;
    }
}
