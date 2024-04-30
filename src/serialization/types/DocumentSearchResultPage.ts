/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Zep from "../../api";
import * as core from "../../core";
import { DocumentSearchResult } from "./DocumentSearchResult";

export const DocumentSearchResultPage: core.serialization.ObjectSchema<
    serializers.DocumentSearchResultPage.Raw,
    Zep.DocumentSearchResultPage
> = core.serialization.object({
    currentPage: core.serialization.property("current_page", core.serialization.number().optional()),
    queryVector: core.serialization.property(
        "query_vector",
        core.serialization.list(core.serialization.number()).optional()
    ),
    resultCount: core.serialization.property("result_count", core.serialization.number().optional()),
    results: core.serialization.list(DocumentSearchResult).optional(),
    totalPages: core.serialization.property("total_pages", core.serialization.number().optional()),
});

export declare namespace DocumentSearchResultPage {
    interface Raw {
        current_page?: number | null;
        query_vector?: number[] | null;
        result_count?: number | null;
        results?: DocumentSearchResult.Raw[] | null;
        total_pages?: number | null;
    }
}
