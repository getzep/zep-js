import { buildOntology, entityFields } from "../src/ontology";
import { Ontology } from "../src/serialization/types/Ontology";

const Traveler = {
    description: "Someone who takes trips.",
    fields: {
        homeCity: entityFields.text("The city they live in", { identity: true }),
        trips: entityFields.integer("How many trips they have taken"),
        rating: entityFields.float("Their average trip rating"),
        frequent: entityFields.boolean("Whether they travel often"),
    },
} as const;

const TraveledTo = {
    description: "A traveler visiting a destination.",
    fields: { purpose: entityFields.text("Why they went") },
    sourceTargets: [{ source: "Traveler", target: "Destination" }],
} as const;

describe("buildOntology", () => {
    it("produces the documented payload", () => {
        expect(buildOntology({ entities: { Traveler }, edges: { TRAVELED_TO: TraveledTo } })).toEqual({
            entityTypes: [
                {
                    name: "Traveler",
                    description: "Someone who takes trips.",
                    identityProperties: ["homeCity"],
                    properties: [
                        { name: "homeCity", description: "The city they live in", type: "text" },
                        { name: "trips", description: "How many trips they have taken", type: "int" },
                        { name: "rating", description: "Their average trip rating", type: "float" },
                        { name: "frequent", description: "Whether they travel often", type: "boolean" },
                    ],
                },
            ],
            edgeTypes: [
                {
                    name: "TRAVELED_TO",
                    description: "A traveler visiting a destination.",
                    properties: [{ name: "purpose", description: "Why they went", type: "text" }],
                    sourceTargets: [{ source: "Traveler", target: "Destination" }],
                },
            ],
        });
    });

    it("survives the serialization the client puts it through", () => {
        // The DSL builds the camelCase type; what reaches the API is what the
        // generated serializer makes of it, which is where a wrong key shows up.
        const ontology = buildOntology({ entities: { Traveler }, edges: { TRAVELED_TO: TraveledTo } });

        expect(Ontology.jsonOrThrow(ontology)).toEqual({
            entity_types: [
                {
                    name: "Traveler",
                    description: "Someone who takes trips.",
                    identity_properties: ["homeCity"],
                    properties: [
                        { name: "homeCity", description: "The city they live in", type: "text" },
                        { name: "trips", description: "How many trips they have taken", type: "int" },
                        { name: "rating", description: "Their average trip rating", type: "float" },
                        { name: "frequent", description: "Whether they travel often", type: "boolean" },
                    ],
                },
            ],
            edge_types: [
                {
                    name: "TRAVELED_TO",
                    description: "A traveler visiting a destination.",
                    properties: [{ name: "purpose", description: "Why they went", type: "text" }],
                    source_targets: [{ source: "Traveler", target: "Destination" }],
                },
            ],
        });
    });

    it("omits identityProperties when no field is one", () => {
        const Place = { description: "A place.", fields: { country: entityFields.text("Its country") } } as const;

        expect(buildOntology({ entities: { Place } }).entityTypes?.[0]).not.toHaveProperty("identityProperties");
    });

    it("omits sourceTargets when the edge does not limit them", () => {
        const Mentions = { description: "A mention.", fields: { note: entityFields.text("The note") } } as const;

        expect(buildOntology({ edges: { MENTIONS: Mentions } }).edgeTypes?.[0]).not.toHaveProperty("sourceTargets");
    });

    it("lists identity properties in declaration order", () => {
        const Place = {
            description: "A place.",
            fields: {
                country: entityFields.text("Its country", { identity: true }),
                region: entityFields.text("Its region"),
                city: entityFields.text("Its city", { identity: true }),
            },
        } as const;

        expect(buildOntology({ entities: { Place } }).entityTypes?.[0]?.identityProperties).toEqual([
            "country",
            "city",
        ]);
    });

    it("builds an empty ontology from no declarations", () => {
        // Sending an empty ontology is how a graph is handed back to the project
        // default, so it has to build rather than throw.
        expect(buildOntology({})).toEqual({ entityTypes: [], edgeTypes: [] });
    });

    it("rejects a type with no description, naming it", () => {
        const Place = { description: "  ", fields: { country: entityFields.text("Its country") } } as const;

        expect(() => buildOntology({ entities: { Place } })).toThrow(/^Place: a type needs a description/);
    });

    it("rejects a property with no description, naming it", () => {
        const Place = { description: "A place.", fields: { country: entityFields.text("") } } as const;

        expect(() => buildOntology({ entities: { Place } })).toThrow("Place.country: a property needs a description");
    });

    it("rejects an edge type with no description, naming it", () => {
        const Mentions = { description: "", fields: { note: entityFields.text("The note") } } as const;

        expect(() => buildOntology({ edges: { MENTIONS: Mentions } })).toThrow(/^MENTIONS: a type needs a description/);
    });
});
