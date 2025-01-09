/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Zep from "../../api/index";
import * as core from "../../core";

export const ApidataDocument: core.serialization.ObjectSchema<serializers.ApidataDocument.Raw, Zep.ApidataDocument> =
    core.serialization.object({
        content: core.serialization.string().optional(),
        createdAt: core.serialization.property("created_at", core.serialization.string().optional()),
        documentId: core.serialization.property("document_id", core.serialization.string().optional()),
        embedding: core.serialization.list(core.serialization.number()).optional(),
        isEmbedded: core.serialization.property("is_embedded", core.serialization.boolean().optional()),
        metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
        updatedAt: core.serialization.property("updated_at", core.serialization.string().optional()),
        uuid: core.serialization.string().optional(),
    });

export declare namespace ApidataDocument {
    export interface Raw {
        content?: string | null;
        created_at?: string | null;
        document_id?: string | null;
        embedding?: number[] | null;
        is_embedded?: boolean | null;
        metadata?: Record<string, unknown> | null;
        updated_at?: string | null;
        uuid?: string | null;
    }
}
