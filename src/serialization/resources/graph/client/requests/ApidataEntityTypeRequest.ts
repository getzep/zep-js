/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Zep from "../../../../../api/index";
import * as core from "../../../../../core";
import { EntityType } from "../../../../types/EntityType";

export const ApidataEntityTypeRequest: core.serialization.Schema<
    serializers.ApidataEntityTypeRequest.Raw,
    Zep.ApidataEntityTypeRequest
> = core.serialization.object({
    entityTypes: core.serialization.property("entity_types", core.serialization.list(EntityType)),
});

export declare namespace ApidataEntityTypeRequest {
    export interface Raw {
        entity_types: EntityType.Raw[];
    }
}
