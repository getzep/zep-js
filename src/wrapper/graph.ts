import { Graph as BaseGraph } from "../api/resources/graph/client/Client";
import { Zep } from "../index";
import { EdgeType, entityModelToAPISchema, edgeModelToAPISchema, EntityType } from "./ontology";

export class Graph extends BaseGraph {
    public async setEntityTypes(
        entityTypes: Record<string, EntityType>,
        edgeTypes: Record<string, EdgeType>,
        requestOptions?: BaseGraph.RequestOptions,
    ): Promise<Zep.SuccessResponse> {
        const validatedEntityTypes: Zep.EntityType[] = Object.keys(entityTypes).map((key) => {
            const schema = entityTypes[key];
            return entityModelToAPISchema(schema, key);
        });

        const validatedEdgeTypes: Zep.EdgeType[] = Object.keys(edgeTypes).map((key) => {
            const schema = edgeTypes[key];
            return edgeModelToAPISchema(schema, key);
        })

        return this.setEntityTypesInternal(
            {
                entityTypes: validatedEntityTypes,
                edgeTypes: validatedEdgeTypes,
            },
            requestOptions,
        );
    }
}
