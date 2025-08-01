/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index.js";
import * as Zep from "../../api/index.js";
import * as core from "../../core/index.js";
import { FactRatingInstruction } from "./FactRatingInstruction.js";

export const Graph: core.serialization.ObjectSchema<serializers.Graph.Raw, Zep.Graph> = core.serialization.object({
    createdAt: core.serialization.property("created_at", core.serialization.string().optional()),
    description: core.serialization.string().optional(),
    factRatingInstruction: core.serialization.property("fact_rating_instruction", FactRatingInstruction.optional()),
    graphId: core.serialization.property("graph_id", core.serialization.string().optional()),
    id: core.serialization.number().optional(),
    name: core.serialization.string().optional(),
    projectUuid: core.serialization.property("project_uuid", core.serialization.string().optional()),
    uuid: core.serialization.string().optional(),
});

export declare namespace Graph {
    export interface Raw {
        created_at?: string | null;
        description?: string | null;
        fact_rating_instruction?: FactRatingInstruction.Raw | null;
        graph_id?: string | null;
        id?: number | null;
        name?: string | null;
        project_uuid?: string | null;
        uuid?: string | null;
    }
}
