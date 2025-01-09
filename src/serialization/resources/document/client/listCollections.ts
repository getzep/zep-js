/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Zep from "../../../../api/index";
import * as core from "../../../../core";
import { ApidataDocumentCollection } from "../../../types/ApidataDocumentCollection";

export const Response: core.serialization.Schema<
    serializers.document.listCollections.Response.Raw,
    Zep.ApidataDocumentCollection[][]
> = core.serialization.list(core.serialization.list(ApidataDocumentCollection));

export declare namespace Response {
    export type Raw = ApidataDocumentCollection.Raw[][];
}
