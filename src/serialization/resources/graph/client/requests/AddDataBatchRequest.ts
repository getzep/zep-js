/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index.js";
import * as Zep from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import { EpisodeData } from "../../../../types/EpisodeData.js";

export const AddDataBatchRequest: core.serialization.Schema<
    serializers.AddDataBatchRequest.Raw,
    Zep.AddDataBatchRequest
> = core.serialization.object({
    episodes: core.serialization.list(EpisodeData),
    graphId: core.serialization.property("graph_id", core.serialization.string().optional()),
    userId: core.serialization.property("user_id", core.serialization.string().optional()),
});

export declare namespace AddDataBatchRequest {
    export interface Raw {
        episodes: EpisodeData.Raw[];
        graph_id?: string | null;
        user_id?: string | null;
    }
}
