/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface EntityNode {
    /** Creation time of the node */
    createdAt: string;
    /** Labels associated with the node */
    labels?: string[];
    /** Name of the node */
    name: string;
    /** Regional summary of surrounding edges */
    summary: string;
    /** UUID of the node */
    uuid: string;
}