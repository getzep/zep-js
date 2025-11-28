import { Graph as BaseGraph } from "../api/resources/graph/client/Client.mjs";
import { Zep } from "../index.mjs";
import { EdgeType, EntityType } from "./ontology.mjs";
interface OntologyTargets {
    userIds?: string[];
    graphIds?: string[];
}
export declare class Graph extends BaseGraph {
    /**
     * Sets the entity and edge types for the specified targets, replacing any existing ones in those targets. If no targets are specified, it sets the ontology for the entire project.
     *
     * @param {Record<string, EntityType>} entityTypes
     * @param {Record<string, EdgeType>} edgeTypes
     * @param {OntologyTargets} [ontologyTargets] - The targets for which to set the ontology. Can include userIds or graphIds. If none specified, sets for the entire project.
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
     *     }, {userIds: ['user_1234']});
     */
    setEntityTypes(entityTypes: Record<string, EntityType>, edgeTypes: Record<string, EdgeType>, ontologyTargets?: OntologyTargets, requestOptions?: BaseGraph.RequestOptions): Promise<Zep.SuccessResponse>;
    /**
     * Sets the entity and edge types for the specified targets, replacing any existing ones in those targets. If no targets are specified, it sets the ontology for the entire project.
     *
     * @param {Record<string, EntityType>} entityTypes
     * @param {Record<string, EdgeType>} edgeTypes
     * @param {OntologyTargets} [ontologyTargets] - The targets for which to set the ontology. Can include userIds or graphIds. If none specified, sets for the entire project.
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
     *     }, {userIds: ['user_1234']});
     */
    setOntology(entityTypes: Record<string, EntityType>, edgeTypes: Record<string, EdgeType>, ontologyTargets?: OntologyTargets, requestOptions?: BaseGraph.RequestOptions): Promise<Zep.SuccessResponse>;
}
export {};
