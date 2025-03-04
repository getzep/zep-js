import { Graph as BaseGraph } from "../api/resources/graph/client/Client";
import { Zep } from "../index";
import { entitySchemaToGoJson, SupportedEntityField } from "./ontology";

export class Graph extends BaseGraph {
    public async setEntityTypes(
        entityTypes: Record<string, Record<string, SupportedEntityField>>,
        requestOptions?: BaseGraph.RequestOptions,
    ): Promise<Zep.SuccessResponse> {
        const validatedEntityTypes: Zep.EntityType[] = Object.keys(entityTypes).map((key) => {
            const schema = entityTypes[key];
            const entityType = entitySchemaToGoJson(schema, key);

            return entityType;
        });

        console.log(validatedEntityTypes);

        return this.setEntityTypesInternal(
            {
                entityTypes: validatedEntityTypes,
            },
            requestOptions,
        );
    }
}
