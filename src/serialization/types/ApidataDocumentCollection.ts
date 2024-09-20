/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Zep from "../../api/index";
import * as core from "../../core";

export const ApidataDocumentCollection: core.serialization.ObjectSchema<
    serializers.ApidataDocumentCollection.Raw,
    Zep.ApidataDocumentCollection
> = core.serialization.object({
    createdAt: core.serialization.property("created_at", core.serialization.string().optional()),
    description: core.serialization.string().optional(),
    documentCount: core.serialization.property("document_count", core.serialization.number().optional()),
    documentEmbeddedCount: core.serialization.property(
        "document_embedded_count",
        core.serialization.number().optional()
    ),
    embeddingDimensions: core.serialization.property("embedding_dimensions", core.serialization.number().optional()),
    embeddingModelName: core.serialization.property("embedding_model_name", core.serialization.string().optional()),
    isAutoEmbedded: core.serialization.property("is_auto_embedded", core.serialization.boolean().optional()),
    isIndexed: core.serialization.property("is_indexed", core.serialization.boolean().optional()),
    isNormalized: core.serialization.property("is_normalized", core.serialization.boolean().optional()),
    metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    name: core.serialization.string().optional(),
    updatedAt: core.serialization.property("updated_at", core.serialization.string().optional()),
    uuid: core.serialization.string().optional(),
});

export declare namespace ApidataDocumentCollection {
    interface Raw {
        created_at?: string | null;
        description?: string | null;
        document_count?: number | null;
        document_embedded_count?: number | null;
        embedding_dimensions?: number | null;
        embedding_model_name?: string | null;
        is_auto_embedded?: boolean | null;
        is_indexed?: boolean | null;
        is_normalized?: boolean | null;
        metadata?: Record<string, unknown> | null;
        name?: string | null;
        updated_at?: string | null;
        uuid?: string | null;
    }
}
