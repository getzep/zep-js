/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index.js";
import * as Zep from "../../api/index.js";
import * as core from "../../core/index.js";
import { EntityProperty } from "./EntityProperty.js";

export const EntityType: core.serialization.ObjectSchema<serializers.EntityType.Raw, Zep.EntityType> =
    core.serialization.object({
        description: core.serialization.string(),
        name: core.serialization.string(),
        properties: core.serialization.list(EntityProperty).optional(),
    });

export declare namespace EntityType {
    export interface Raw {
        description: string;
        name: string;
        properties?: EntityProperty.Raw[] | null;
    }
}
