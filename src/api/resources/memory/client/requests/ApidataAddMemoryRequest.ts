/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Zep from "../../../../index";

/**
 * @example
 *     {
 *         messages: [{}]
 *     }
 */
export interface ApidataAddMemoryRequest {
    /** Additional instruction for generating the facts. Zep Cloud Only, will be ignored on Community Edition. */
    factInstruction?: string;
    /** A list of message objects, where each message contains a role and content. */
    messages: Zep.Message[];
    /** Additional instruction for generating the summary. Zep Cloud Only, will be ignored on Community Edition. */
    summaryInstruction?: string;
}