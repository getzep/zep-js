/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Zep from "../../../../../api/index";
import * as core from "../../../../../core";
import { GraphDataType } from "../../../../types/GraphDataType";

export const AddDataRequest: core.serialization.Schema<serializers.AddDataRequest.Raw, Zep.AddDataRequest> =
    core.serialization.object({
        data: core.serialization.string(),
        groupId: core.serialization.property("group_id", core.serialization.string().optional()),
        sourceDescription: core.serialization.property("source_description", core.serialization.string().optional()),
        type: GraphDataType,
        userId: core.serialization.property("user_id", core.serialization.string().optional()),
    });

export declare namespace AddDataRequest {
    export interface Raw {
        data: string;
        group_id?: string | null;
        source_description?: string | null;
        type: GraphDataType.Raw;
        user_id?: string | null;
    }
}
