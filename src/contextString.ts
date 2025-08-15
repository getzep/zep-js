import { EntityEdge, EntityNode, Episode } from "./api/index.js";

const TEMPLATE_STRING = `
FACTS and ENTITIES%episodesHeader% represent relevant context to the current conversation.

# These are the most relevant facts and their valid date ranges
# format: FACT (Date range: from - to)
<FACTS>
%facts%
</FACTS>

# These are the most relevant entities
# Name: ENTITY_NAME
# Label: entity_label (if present)
# Attributes: (if present)
#   attr_name: attr_value
# Summary: entity summary
<ENTITIES>
%entities%
</ENTITIES>
%episodesSection%
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
 * Compose a search context from entity edges, nodes, and episodes.
 *
 * @param edges - List of entity edges.
 * @param nodes - List of entity nodes.
 * @param episodes - List of episodes.
 * @returns A formatted string containing facts, entities, and episodes.
 */
export function composeContextString(edges: EntityEdge[], nodes: EntityNode[], episodes: Episode[] = []): string {
    const facts = edges.map((edge) => {
        return `  - ${edge.fact} (Date range: ${formatEdgeDateRange(edge)})`;
    });

    const entities = nodes.map((node) => {
        const entityParts = [`Name: ${node.name}`];
        
        if (node.labels && node.labels.length > 0) {
            const labels = [...node.labels];
            const entityIndex = labels.indexOf('Entity');
            if (entityIndex > -1) {
                labels.splice(entityIndex, 1);
            }
            if (labels.length > 0) {
                entityParts.push(`Label: ${labels[0]}`);
            }
        }
        
        if (node.attributes && Object.keys(node.attributes).length > 0) {
            const filteredAttributes = { ...node.attributes };
            delete filteredAttributes.labels;
            if (Object.keys(filteredAttributes).length > 0) {
                entityParts.push('Attributes:');
                Object.entries(filteredAttributes).forEach(([key, value]) => {
                    entityParts.push(`  ${key}: ${value}`);
                });
            }
        }
        
        if (node.summary && node.summary.trim()) {
            entityParts.push(`Summary: ${node.summary}`);
        }
        
        return entityParts.join('\n');
    });

    const episodesList: string[] = [];
    if (episodes.length > 0) {
        episodes.forEach((episode) => {
            let rolePrefix = "";
            if (episode.role && episode.roleType) {
                rolePrefix = `${episode.role} (${episode.roleType}): `;
            } else if (episode.role) {
                rolePrefix = `${episode.role}: `;
            } else if (episode.roleType) {
                rolePrefix = `(${episode.roleType}): `;
            }
            
            const timestamp = formatDate(new Date(episode.createdAt));
            
            const episodeStr = `  - ${rolePrefix}${episode.content} (${timestamp})`;
            episodesList.push(episodeStr);
        });
    }

    const factsStr = facts.join("\n");
    const entitiesStr = entities.join("\n");
    const episodesStr = episodesList.join("\n");
    
    const episodesHeader = episodes.length > 0 ? ", and EPISODES" : "";
    const episodesSection = episodes.length > 0 
        ? `\n# These are the most relevant episodes\n<EPISODES>\n${episodesStr}\n</EPISODES>` 
        : "";
    
    return TEMPLATE_STRING
        .replace("%episodesHeader%", episodesHeader)
        .replace("%facts%", factsStr)
        .replace("%entities%", entitiesStr)
        .replace("%episodesSection%", episodesSection);
}
