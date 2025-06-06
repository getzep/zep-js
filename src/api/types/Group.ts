/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Zep from "../index";

export interface Group {
    createdAt?: string;
    description?: string;
    /** Deprecated */
    externalId?: string;
    factRatingInstruction?: Zep.FactRatingInstruction;
    groupId?: string;
    id?: number;
    name?: string;
    projectUuid?: string;
    uuid?: string;
}
