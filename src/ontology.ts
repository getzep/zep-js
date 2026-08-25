/**
 * Declare a Zep ontology with field builders.
 *
 * `graph.setOntology` and `project.setOntology` take an `Ontology` holding
 * `EntityType` and `EdgeType` objects. Building those by hand means repeating
 * every property's name, type and description as data. This module lets an
 * ontology be declared once and derives the payload from it:
 *
 * ```ts
 * import { buildOntology, entityFields } from "@getzep/zep-cloud";
 *
 * const Traveler = {
 *     description: "Someone who takes trips.",
 *     fields: {
 *         homeCity: entityFields.text("The city they live in", { identity: true }),
 *         trips: entityFields.integer("How many trips they have taken"),
 *     },
 * } as const;
 *
 * const TraveledTo = {
 *     description: "A traveler visiting a destination.",
 *     fields: { purpose: entityFields.text("Why they went") },
 *     sourceTargets: [{ sourceEntityType: "Traveler", targetEntityType: "Destination" }],
 * } as const;
 *
 * const ontology = buildOntology({
 *     entities: { Traveler },
 *     edges: { TRAVELED_TO: TraveledTo },
 * });
 * await client.graph.setOntology(graphUuid, ontology);
 * ```
 *
 * The same object goes to `project.setOntology` for the project default. v3
 * addressed many graphs in one call; v4 has one ontology endpoint per scope, so
 * a caller targeting several graphs sends the same payload once per graph.
 *
 * These are plain functions rather than client methods on purpose: the generated
 * clients already define `setOntology`, so extending them collides.
 */

import type * as Zep from "./api/index.js";
import { EntityPropertyType } from "./api/index.js";

/**
 * One property of an entity or edge type.
 *
 * `value` is never populated. It carries the property's TypeScript type so that
 * {@link EntityData} can read it back off a declaration, which is how data
 * extracted for a type gets a type of its own.
 */
export interface PropertyDefinition<Value = unknown> {
    readonly type: Zep.EntityPropertyType;
    readonly description: string;
    /**
     * Whether the property is one of those that tell two nodes of the same type
     * apart. Identity properties are sent in the type's `identityProperties`.
     */
    readonly identity?: boolean;
    readonly value?: Value;
}

/** Options accepted by every field builder. */
export interface FieldOptions {
    readonly identity?: boolean;
}

/**
 * The four property types the API accepts. Declared once: a change to the wire
 * spelling is a change in the generated `EntityPropertyType` and nowhere here.
 */
export const entityFields = {
    text: (description: string, options?: FieldOptions): PropertyDefinition<string> => ({
        type: EntityPropertyType.Text,
        description,
        identity: options?.identity,
    }),
    integer: (description: string, options?: FieldOptions): PropertyDefinition<number> => ({
        type: EntityPropertyType.Int,
        description,
        identity: options?.identity,
    }),
    float: (description: string, options?: FieldOptions): PropertyDefinition<number> => ({
        type: EntityPropertyType.Float,
        description,
        identity: options?.identity,
    }),
    boolean: (description: string, options?: FieldOptions): PropertyDefinition<boolean> => ({
        type: EntityPropertyType.Boolean,
        description,
        identity: options?.identity,
    }),
};

/** An entity type declaration: a description the extraction model reads, and its properties. */
export interface EntityDefinition {
    readonly description: string;
    readonly fields: Readonly<Record<string, PropertyDefinition>>;
}

/** An edge type declaration, which may also limit the entity type pairs it connects. */
export interface EdgeDefinition extends EntityDefinition {
    readonly sourceTargets?: readonly Zep.EdgeSourceTarget[];
}

/**
 * The shape of the data extracted for a declared type, so a property bag read
 * back off a node or edge can be typed by the declaration that produced it.
 */
export type EntityData<Definition extends EntityDefinition> = {
    [Property in keyof Definition["fields"]]?: Definition["fields"][Property] extends PropertyDefinition<infer Value>
        ? Value
        : never;
};

export interface BuildOntologyInput {
    /** Entity types by name. The API expects PascalCase names. */
    readonly entities?: Readonly<Record<string, EntityDefinition>>;
    /** Edge types by name. The API expects SCREAMING_SNAKE_CASE names. */
    readonly edges?: Readonly<Record<string, EdgeDefinition>>;
}

/**
 * Derive an `Ontology` from the given declarations.
 *
 * Pass the result to `graph.setOntology` for one graph, or to
 * `project.setOntology` for the project default.
 *
 * A missing description throws rather than being sent empty: the extraction
 * model reads descriptions to decide what belongs to a type, and the write path
 * does not reject an empty one.
 */
export function buildOntology(input: BuildOntologyInput): Zep.Ontology {
    const entityTypes: Zep.EntityType[] = [];
    for (const [name, definition] of Object.entries(input.entities ?? {})) {
        const { properties, identityProperties } = readFields(name, definition);
        entityTypes.push({
            name,
            description: readDescription(name, definition),
            properties,
            ...(identityProperties.length > 0 ? { identityProperties } : {}),
        });
    }

    const edgeTypes: Zep.EdgeType[] = [];
    for (const [name, definition] of Object.entries(input.edges ?? {})) {
        const { properties } = readFields(name, definition);
        edgeTypes.push({
            name,
            description: readDescription(name, definition),
            properties,
            ...(definition.sourceTargets ? { sourceTargets: [...definition.sourceTargets] } : {}),
        });
    }

    return { entityTypes, edgeTypes };
}

function readDescription(name: string, definition: EntityDefinition): string {
    const description = definition.description?.trim();
    if (!description) {
        throw new Error(
            `${name}: a type needs a description; the extraction model reads it to decide what belongs to this type`,
        );
    }
    return description;
}

function readFields(
    name: string,
    definition: EntityDefinition,
): { properties: Zep.EntityProperty[]; identityProperties: string[] } {
    const properties: Zep.EntityProperty[] = [];
    const identityProperties: string[] = [];

    for (const [property, field] of Object.entries(definition.fields ?? {})) {
        const description = field.description?.trim();
        if (!description) {
            throw new Error(`${name}.${property}: a property needs a description`);
        }
        properties.push({ name: property, description, type: field.type });
        if (field.identity) {
            identityProperties.push(property);
        }
    }

    return { properties, identityProperties };
}

/**
 * {@link EntityData} is checked here rather than in a test file: the test files
 * are transpiled without type checking, so an assertion in one would hold
 * whatever the type became. This block is type-only and compiles away.
 */
type Equals<Left, Right> = (<T>() => T extends Left ? 1 : 2) extends <T>() => T extends Right ? 1 : 2 ? true : false;
type Assert<Check extends true> = Check;

type ExampleDeclaration = {
    readonly description: string;
    readonly fields: {
        readonly homeCity: PropertyDefinition<string>;
        readonly trips: PropertyDefinition<number>;
        readonly frequent: PropertyDefinition<boolean>;
    };
};

type _EntityDataCarriesEachPropertyType = Assert<
    Equals<
        EntityData<ExampleDeclaration>,
        { readonly homeCity?: string; readonly trips?: number; readonly frequent?: boolean }
    >
>;
