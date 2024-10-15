/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Zep from "../../../../../api/index";
import * as core from "../../../../../core";
import { Reranker } from "../../../../types/Reranker";
import { GraphSearchScope } from "../../../../types/GraphSearchScope";

export const GraphSearchQuery: core.serialization.Schema<serializers.GraphSearchQuery.Raw, Zep.GraphSearchQuery> =
    core.serialization.object({
        centerNodeUuid: core.serialization.property("center_node_uuid", core.serialization.string().optional()),
        groupId: core.serialization.property("group_id", core.serialization.string().optional()),
        limit: core.serialization.number().optional(),
        minScore: core.serialization.property("min_score", core.serialization.number().optional()),
        mmrLambda: core.serialization.property("mmr_lambda", core.serialization.number().optional()),
        query: core.serialization.string().optional(),
        reranker: Reranker.optional(),
        scope: GraphSearchScope.optional(),
        userId: core.serialization.property("user_id", core.serialization.string().optional()),
    });

export declare namespace GraphSearchQuery {
    interface Raw {
        center_node_uuid?: string | null;
        group_id?: string | null;
        limit?: number | null;
        min_score?: number | null;
        mmr_lambda?: number | null;
        query?: string | null;
        reranker?: Reranker.Raw | null;
        scope?: GraphSearchScope.Raw | null;
        user_id?: string | null;
    }
}
