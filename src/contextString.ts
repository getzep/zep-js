import { EntityEdge, EntityNode } from "./api/types";

const TEMPLATE_STRING = `
FACTS and ENTITIES represent relevant context to the current conversation.

# These are the most relevant facts and their valid date ranges
# format: FACT (Date range: from - to)
<FACTS>
%s
</FACTS>

# These are the most relevant entities
# ENTITY_NAME: entity summary
<ENTITIES>
%s
</ENTITIES>
`;

/**
 * Format the date range of an entity edge.
 *
 * @param edge - The entity edge to format.
 * @returns A string representation of the date range.
 */
export function formatEdgeDateRange(edge: EntityEdge): string {
    let validAt = "date unknown";
    let invalidAt = "present";

    if (edge.validAt) {
        validAt = formatDate(new Date(edge.validAt));
    }
    if (edge.invalidAt) {
        invalidAt = formatDate(new Date(edge.invalidAt));
    }

    return `${validAt} - ${invalidAt}`;
}

/**
 * Format a date according to the memory context format.
 *
 * @param date - The date to format.
 * @returns A formatted date string.
 */
function formatDate(date: Date): string {
    return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
    })
        .format(date)
        .replace(/\//g, "-")
        .replace(",", "")
        .replace(/^(\d{2})-(\d{2})-(\d{4})/, "$3-$1-$2");
}

/**
 * Compose a search context from entity edges and nodes.
 *
 * @param edges - List of entity edges.
 * @param nodes - List of entity nodes.
 * @returns A formatted string containing facts and entities.
 */
export function composeContextString(edges: EntityEdge[], nodes: EntityNode[]): string {
    const facts = edges.map((edge) => {
        return `  - ${edge.fact} (${formatEdgeDateRange(edge)})`;
    });

    const entities = nodes.map((node) => {
        return `  - ${node.name}: ${node.summary}`;
    });

    const factsStr = facts.join("\n");
    const entitiesStr = entities.join("\n");

    return TEMPLATE_STRING.replace("%s", factsStr).replace("%s", entitiesStr);
}
