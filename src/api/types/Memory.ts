/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Zep from "../index";

export interface Memory {
    /**
     * Most recent list of facts derived from the session. Included only with perpetual memory type.
     * Deprecated: Facts will be deprecated in future releases and relevant_facts should be used instead.
     */
    facts?: string[];
    /** A list of message objects, where each message contains a role and content. */
    messages?: Zep.Message[];
    /** A dictionary containing metadata associated with the memory. */
    metadata?: Record<string, unknown>;
    relevantFacts?: Zep.Fact[];
    /** Summary list result from Summary Retriever Memory Type. */
    relevantSummaries?: Zep.Summary[];
    /** A Summary object. */
    summary?: Zep.Summary;
}
