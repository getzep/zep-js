/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Zep from "../../api/index";
import * as core from "../../core";
import { Session } from "./Session";

export const EndSessionsResponse: core.serialization.ObjectSchema<
    serializers.EndSessionsResponse.Raw,
    Zep.EndSessionsResponse
> = core.serialization.object({
    sessions: core.serialization.list(Session).optional(),
});

export declare namespace EndSessionsResponse {
    export interface Raw {
        sessions?: Session.Raw[] | null;
    }
}
