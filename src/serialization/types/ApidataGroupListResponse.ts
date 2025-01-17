/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Zep from "../../api/index";
import * as core from "../../core";
import { Group } from "./Group";

export const ApidataGroupListResponse: core.serialization.ObjectSchema<
    serializers.ApidataGroupListResponse.Raw,
    Zep.ApidataGroupListResponse
> = core.serialization.object({
    groups: core.serialization.list(Group).optional(),
    rowCount: core.serialization.property("row_count", core.serialization.number().optional()),
    totalCount: core.serialization.property("total_count", core.serialization.number().optional()),
});

export declare namespace ApidataGroupListResponse {
    export interface Raw {
        groups?: Group.Raw[] | null;
        row_count?: number | null;
        total_count?: number | null;
    }
}
