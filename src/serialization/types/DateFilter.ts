/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Zep from "../../api/index";
import * as core from "../../core";
import { ComparisonOperator } from "./ComparisonOperator";

export const DateFilter: core.serialization.ObjectSchema<serializers.DateFilter.Raw, Zep.DateFilter> =
    core.serialization.object({
        comparisonOperator: core.serialization.property("comparison_operator", ComparisonOperator),
        date: core.serialization.string(),
    });

export declare namespace DateFilter {
    export interface Raw {
        comparison_operator: ComparisonOperator.Raw;
        date: string;
    }
}
