/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         lastN: 1,
 *         modelSchema: "model_schema"
 *     }
 */
export interface ExtractDataRequest {
    /** Your current date and time in ISO 8601 format including timezone. This is used for determining relative dates. */
    currentDateTime?: string;
    /**
     * The artifact from which to extract data. "messages" or "facts". default: "messages"
     * ExtractArtifact ExtractArtifact `json:"extract_artifact" validate:"required"`
     * The number of messages in the chat history from which to extract data
     */
    lastN: number;
    /** The schema describing the data to be extracted. See Zep's SDKs for more details. */
    modelSchema: string;
    /**
     * Validate that the extracted data is present in the dialog and correct per the field description.
     * Mitigates hallucination, but is slower and may result in false negatives.
     */
    validate?: boolean;
}
