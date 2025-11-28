var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Graph as BaseGraph } from "../api/resources/graph/client/Client.mjs";
import { entityModelToAPISchema, edgeModelToAPISchema } from "./ontology.mjs";
export class Graph extends BaseGraph {
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
    setEntityTypes(entityTypes, edgeTypes, ontologyTargets, requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            const validatedEntityTypes = Object.keys(entityTypes).map((key) => {
                const schema = entityTypes[key];
                return entityModelToAPISchema(schema, key);
            });
            const validatedEdgeTypes = Object.keys(edgeTypes).map((key) => {
                const schema = edgeTypes[key];
                return edgeModelToAPISchema(schema, key);
            });
            return this.setEntityTypesInternal({
                entityTypes: validatedEntityTypes,
                edgeTypes: validatedEdgeTypes,
                userIds: ontologyTargets === null || ontologyTargets === void 0 ? void 0 : ontologyTargets.userIds,
                graphIds: ontologyTargets === null || ontologyTargets === void 0 ? void 0 : ontologyTargets.graphIds,
            }, requestOptions);
        });
    }
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
    setOntology(entityTypes, edgeTypes, ontologyTargets, requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.setEntityTypes(entityTypes, edgeTypes, ontologyTargets, requestOptions);
        });
    }
}
