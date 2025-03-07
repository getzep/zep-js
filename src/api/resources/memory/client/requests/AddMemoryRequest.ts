/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Zep from "../../../../index";

/**
 * @example
 *     {
 *         messages: [{
 *                 content: "content",
 *                 roleType: "norole"
 *             }]
 *     }
 */
export interface AddMemoryRequest {
    /** Deprecated */
    factInstruction?: string;
    /** A list of message objects, where each message contains a role and content. */
    messages: Zep.Message[];
    /** Optionally return memory context relevant to the most recent messages. */
    returnContext?: boolean;
    /** Deprecated */
    summaryInstruction?: string;
}
