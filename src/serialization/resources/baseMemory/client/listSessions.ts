/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Zep from "../../../../api";
import * as core from "../../../../core";
import { Session } from "../../../types/Session";

export const Response: core.serialization.Schema<serializers.baseMemory.listSessions.Response.Raw, Zep.Session[][]> =
    core.serialization.list(core.serialization.list(Session));

export declare namespace Response {
    type Raw = Session.Raw[][];
}
