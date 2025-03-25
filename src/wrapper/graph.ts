import { Graph as BaseGraph } from "../api/resources/graph/client/Client";
import { Zep } from "../index";
import { entityModelToAPISchema, EntityType, SupportedEntityField } from "./ontology";

export class Graph extends BaseGraph {
    public async setEntityTypes(
        entityTypes: Record<string, EntityType>,
        requestOptions?: BaseGraph.RequestOptions,
    ): Promise<Zep.SuccessResponse> {
        const validatedEntityTypes: Zep.EntityType[] = Object.keys(entityTypes).map((key) => {
            const schema = entityTypes[key];
            const entityType = entityModelToAPISchema(schema, key);

            return entityType;
        });

        return this.setEntityTypesInternal(
            {
                entityTypes: validatedEntityTypes,
            },
            requestOptions,
        );
    }
}
