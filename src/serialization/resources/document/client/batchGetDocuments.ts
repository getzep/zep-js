/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Zep from "../../../../api/index";
import * as core from "../../../../core";
import { ApidataDocument } from "../../../types/ApidataDocument";

export const Response: core.serialization.Schema<
    serializers.document.batchGetDocuments.Response.Raw,
    Zep.ApidataDocument[][]
> = core.serialization.list(core.serialization.list(ApidataDocument));

export declare namespace Response {
    type Raw = ApidataDocument.Raw[][];
}
