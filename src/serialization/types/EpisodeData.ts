/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index.js";
import * as Zep from "../../api/index.js";
import * as core from "../../core/index.js";
import { GraphDataType } from "./GraphDataType.js";

export const EpisodeData: core.serialization.ObjectSchema<serializers.EpisodeData.Raw, Zep.EpisodeData> =
    core.serialization.object({
        createdAt: core.serialization.property("created_at", core.serialization.string().optional()),
        data: core.serialization.string(),
        sourceDescription: core.serialization.property("source_description", core.serialization.string().optional()),
        type: GraphDataType,
    });

export declare namespace EpisodeData {
    export interface Raw {
        created_at?: string | null;
        data: string;
        source_description?: string | null;
        type: GraphDataType.Raw;
    }
}
