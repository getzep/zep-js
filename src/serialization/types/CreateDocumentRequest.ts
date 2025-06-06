/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Zep from "../../api/index";
import * as core from "../../core";

export const CreateDocumentRequest: core.serialization.ObjectSchema<
    serializers.CreateDocumentRequest.Raw,
    Zep.CreateDocumentRequest
> = core.serialization.object({
    content: core.serialization.string(),
    documentId: core.serialization.property("document_id", core.serialization.string().optional()),
    metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
});

export declare namespace CreateDocumentRequest {
    export interface Raw {
        content: string;
        document_id?: string | null;
        metadata?: Record<string, unknown> | null;
    }
}
