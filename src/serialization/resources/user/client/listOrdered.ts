/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Zep from "../../../../api";
import * as core from "../../../../core";
import { User } from "../../../types/User";

export const Response: core.serialization.Schema<serializers.user.listOrdered.Response.Raw, Zep.User[]> =
    core.serialization.list(User);

export declare namespace Response {
    type Raw = User.Raw[];
}