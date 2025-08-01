import { Graph as BaseGraph } from "../api/resources/graph/client/Client.js";
import { Zep } from "../index.js";
import { EdgeType, entityModelToAPISchema, edgeModelToAPISchema, EntityType } from "./ontology.js";

export class Graph extends BaseGraph {
    /**
     * Sets the entity and edge types for a project, replacing any existing ones.
     *
     * @param {Record<string, EntityType>} entityTypes
     * @param {Record<string, EdgeType>} edgeTypes
     * @param {Graph.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Zep.BadRequestError}
     * @throws {@link Zep.InternalServerError}
     *
     * @example
     *     const travelDestinationSchema: EntityType = {
     *         description: "A travel destination entity",
     *         fields: {
     *             destination_name: entityFields.text("The name of travel destination"),
     *         },
     *     };
     *
     *     const isTravelingTo: EdgeType = {
     *         description: "An edge representing a traveler going to a destination.",
     *         fields: {
     *             travel_date: entityFields.text("The date of the travel"),
     *             purpose: entityFields.text("The purpose of the travel"),
     *         },
     *         sourceTargets: [
     *             {
     *                 source: "User",
     *                 target: "TravelDestination",
     *             }
     *         ]
     *     }
     *
     *     await client.graph.setEntityTypes({
     *         TravelDestination: travelDestinationSchema,
     *     }, {
     *         IS_TRAVELING_TO: isTravelingTo,
     *     });
     */
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

    /**
     * Sets the entity and edge types for a project, replacing any existing ones.
     *
     * @param {Record<string, EntityType>} entityTypes
     * @param {Record<string, EdgeType>} edgeTypes
     * @param {Graph.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Zep.BadRequestError}
     * @throws {@link Zep.InternalServerError}
     *
     * @example
     *     const travelDestinationSchema: EntityType = {
     *         description: "A travel destination entity",
     *         fields: {
     *             destination_name: entityFields.text("The name of travel destination"),
     *         },
     *     };
     *
     *     const isTravelingTo: EdgeType = {
     *         description: "An edge representing a traveler going to a destination.",
     *         fields: {
     *             travel_date: entityFields.text("The date of the travel"),
     *             purpose: entityFields.text("The purpose of the travel"),
     *         },
     *         sourceTargets: [
     *             {
     *                 source: "User",
     *                 target: "TravelDestination",
     *             }
     *         ]
     *     }
     *
     *     await client.graph.setOntology({
     *         TravelDestination: travelDestinationSchema,
     *     }, {
     *         IS_TRAVELING_TO: isTravelingTo,
     *     });
     */
    public async setOntology(
        entityTypes: Record<string, EntityType>,
        edgeTypes: Record<string, EdgeType>,
        requestOptions?: BaseGraph.RequestOptions,
    ): Promise<Zep.SuccessResponse> {
        return this.setEntityTypes(entityTypes, edgeTypes, requestOptions);
    }
}
