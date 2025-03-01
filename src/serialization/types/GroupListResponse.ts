/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Zep from "../../api/index";
import * as core from "../../core";
import { Group } from "./Group";

export const GroupListResponse: core.serialization.ObjectSchema<
    serializers.GroupListResponse.Raw,
    Zep.GroupListResponse
> = core.serialization.object({
    groups: core.serialization.list(Group).optional(),
    totalCount: core.serialization.property("total_count", core.serialization.number().optional()),
    rowCount: core.serialization.property("row_count", core.serialization.number().optional()),
});

export declare namespace GroupListResponse {
    export interface Raw {
        groups?: Group.Raw[] | null;
        total_count?: number | null;
        row_count?: number | null;
    }
}
