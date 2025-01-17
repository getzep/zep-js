/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Zep from "../index";

export interface Memory {
    /** Memory context containing relevant facts and entities for the session. Can be put into the prompt directly. */
    context?: string;
    /**
     * Most recent list of facts derived from the session. (cloud only)
     * Deprecated: Facts will be deprecated in future releases and relevant_facts should be used instead.
     */
    facts?: string[];
    /** A list of message objects, where each message contains a role and content. Only last_n messages will be returned */
    messages?: Zep.Message[];
    /** A dictionary containing metadata associated with the memory. */
    metadata?: Record<string, unknown>;
    /** Most relevant facts to the recent messages in the session. */
    relevantFacts?: Zep.Fact[];
    /**
     * The most relevant summaries to the recent conversation. (cloud only)
     * Deprecated: Please use context string instead.
     */
    summary?: Zep.Summary;
}
