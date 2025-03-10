/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Zep from "../../../../../api/index";
import * as core from "../../../../../core";
import { RoleType } from "../../../../types/RoleType";
import { Message } from "../../../../types/Message";

export const AddMemoryRequest: core.serialization.Schema<serializers.AddMemoryRequest.Raw, Zep.AddMemoryRequest> =
    core.serialization.object({
        factInstruction: core.serialization.property("fact_instruction", core.serialization.string().optional()),
        ignoreRoles: core.serialization.property("ignore_roles", core.serialization.list(RoleType).optional()),
        messages: core.serialization.list(Message),
        returnContext: core.serialization.property("return_context", core.serialization.boolean().optional()),
        summaryInstruction: core.serialization.property("summary_instruction", core.serialization.string().optional()),
    });

export declare namespace AddMemoryRequest {
    export interface Raw {
        fact_instruction?: string | null;
        ignore_roles?: RoleType.Raw[] | null;
        messages: Message.Raw[];
        return_context?: boolean | null;
        summary_instruction?: string | null;
    }
}
