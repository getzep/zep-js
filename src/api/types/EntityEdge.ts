/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface EntityEdge {
    /** UUID of the edge */
    uuid: string;
    /** UUID of the source node */
    sourceNodeUuid: string;
    /** UUID of the target node */
    targetNodeUuid: string;
    /** Creation time of the edge */
    createdAt: string;
    /** List of episode ids that reference these entity edges */
    episodes?: string[];
    /** Datetime of when the node was invalidated */
    expiredAt?: string;
    /** Fact representing the edge and nodes that it connects */
    fact: string;
    /** Datetime of when the fact stopped being true */
    invalidAt?: string;
    /** Name of the edge, relation name */
    name: string;
    /** Datetime of when the fact became true */
    validAt?: string;
}
