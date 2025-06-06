/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Zep from "../../api/index";
import * as core from "../../core";
import { EntityEdge } from "./EntityEdge";
import { Episode } from "./Episode";
import { EntityNode } from "./EntityNode";

export const GraphSearchResults: core.serialization.ObjectSchema<
    serializers.GraphSearchResults.Raw,
    Zep.GraphSearchResults
> = core.serialization.object({
    edges: core.serialization.list(EntityEdge).optional(),
    episodes: core.serialization.list(Episode).optional(),
    nodes: core.serialization.list(EntityNode).optional(),
});

export declare namespace GraphSearchResults {
    export interface Raw {
        edges?: EntityEdge.Raw[] | null;
        episodes?: Episode.Raw[] | null;
        nodes?: EntityNode.Raw[] | null;
    }
}
