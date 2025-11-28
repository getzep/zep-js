import { EntityEdge, EntityNode, Episode } from "./api/index.mjs";
/**
 * Format the date range of an entity edge.
 *
 * @param edge - The entity edge to format.
 * @returns A string representation of the date range.
 */
export declare function formatEdgeDateRange(edge: EntityEdge): string;
/**
 * Compose a search context from entity edges, nodes, and episodes.
 *
 * @param edges - List of entity edges.
 * @param nodes - List of entity nodes.
 * @param episodes - List of episodes.
 * @returns A formatted string containing facts, entities, and episodes.
 */
export declare function composeContextString(edges: EntityEdge[], nodes: EntityNode[], episodes?: Episode[]): string;
