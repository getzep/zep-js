/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as core from "../../../../core";

export const Request: core.serialization.Schema<serializers.document.batchDeleteDocuments.Request.Raw, string[]> =
    core.serialization.list(core.serialization.string());

export declare namespace Request {
    type Raw = string[];
}
