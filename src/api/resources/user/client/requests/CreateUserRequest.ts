/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Zep from "../../../../index";

/**
 * @example
 *     {}
 */
export interface CreateUserRequest {
    /** The email address of the user. */
    email?: string;
    /** Optional instruction to use for fact rating. */
    factRatingInstruction?: Zep.FactRatingInstruction;
    /** The first name of the user. */
    firstName?: string;
    /** The last name of the user. */
    lastName?: string;
    /** The metadata associated with the user. */
    metadata?: Record<string, unknown>;
    /** The unique identifier of the user. */
    userId?: string;
}
