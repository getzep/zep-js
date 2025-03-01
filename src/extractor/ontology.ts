import { z } from "zod";

// Define the entity property types
export enum EntityPropertyType {
    Text = "Text",
    Number = "Number",
    Float = "Float",
    Boolean = "Boolean",
}

// Base schema for all entity properties
export const EntityBaseSchema = z.object({
    type: z.nativeEnum(EntityPropertyType),
    description: z.string(),
});

// All fields have optional values by default
export interface EntityField<V = any> {
    description: string;
    value?: V; // Always optional
}

// Text field schema and interface
export const EntityTextSchema = EntityBaseSchema.extend({
    type: z.literal(EntityPropertyType.Text),
    value: z.string().optional(),
});

export interface EntityTextField extends EntityField<string> {
    type: EntityPropertyType.Text;
}

// Number field schema and interface
export const EntityNumberSchema = EntityBaseSchema.extend({
    type: z.literal(EntityPropertyType.Number),
    value: z.number().int().optional(),
});

export interface EntityNumberField extends EntityField<number> {
    type: EntityPropertyType.Number;
}

// Float field schema and interface
export const EntityFloatSchema = EntityBaseSchema.extend({
    type: z.literal(EntityPropertyType.Float),
    value: z.number().optional(),
});

export interface EntityFloatField extends EntityField<number> {
    type: EntityPropertyType.Float;
}

// Boolean field schema and interface
export const EntityBooleanSchema = EntityBaseSchema.extend({
    type: z.literal(EntityPropertyType.Boolean),
    value: z.boolean().optional(),
});

export interface EntityBooleanField extends EntityField<boolean> {
    type: EntityPropertyType.Boolean;
}

// Union of all entity field schemas
export const EntityFieldSchema = z.union([
    EntityTextSchema,
    EntityNumberSchema,
    EntityFloatSchema,
    EntityBooleanSchema,
]);

// Type for any supported entity field
export type SupportedEntityField = EntityTextField | EntityNumberField | EntityFloatField | EntityBooleanField;

// Record of entity fields
export const EntityFields = z.record(EntityFieldSchema);

// Helper type to extract data types from entity fields
export type ExtractedEntityData<T> = {
    [P in keyof T]: T[P] extends EntityField<infer V> ? V | undefined : never;
};

// Factory functions for creating entity fields
export const entityFields = {
    text: (description: string): EntityTextField => {
        return EntityTextSchema.parse({
            type: EntityPropertyType.Text,
            description,
        });
    },

    number: (description: string): EntityNumberField => {
        return EntityNumberSchema.parse({
            type: EntityPropertyType.Number,
            description,
        });
    },

    float: (description: string): EntityFloatField => {
        return EntityFloatSchema.parse({
            type: EntityPropertyType.Float,
            description,
        });
    },

    boolean: (description: string): EntityBooleanField => {
        return EntityBooleanSchema.parse({
            type: EntityPropertyType.Boolean,
            description,
        });
    },
};

// Function to convert entity schema to Go-compatible JSON
export function entitySchemaToGoJson(schema: Record<string, SupportedEntityField>, name: string): string {
    const entityType = {
        name,
        properties: Object.entries(schema).map(([fieldName, fieldDef]) => ({
            name: fieldName,
            type: fieldDef.type,
            description: fieldDef.description,
        })),
    };

    return JSON.stringify(entityType);
}

// Function to create entity schema from Go-compatible JSON
export function goJsonToEntitySchema(jsonStr: string): Record<string, SupportedEntityField> {
    const data = typeof jsonStr === "string" ? JSON.parse(jsonStr) : jsonStr;
    const schema: Record<string, SupportedEntityField> = {};

    for (const prop of data.properties || []) {
        const { name, type, description } = prop;

        switch (type) {
            case EntityPropertyType.Text:
                schema[name] = entityFields.text(description);
                break;
            case EntityPropertyType.Number:
                schema[name] = entityFields.number(description);
                break;
            case EntityPropertyType.Float:
                schema[name] = entityFields.float(description);
                break;
            case EntityPropertyType.Boolean:
                schema[name] = entityFields.boolean(description);
                break;
        }
    }

    return schema;
}

// Define an entity schema
const personSchema = {
    firstName: entityFields.text("The person's first name"),
    lastName: entityFields.text("The person's last name"),
    age: entityFields.number("The person's age"),
    height: entityFields.float("The person's height in meters"),
    isActive: entityFields.boolean("Whether the person is active"),
};

// Extract the data type
type Person = ExtractedEntityData<typeof personSchema>;

// Convert to Go-compatible JSON
const goJson = entitySchemaToGoJson(personSchema, "Person");
console.log(goJson);

// Convert back from Go-compatible JSON
const recreatedSchema = goJsonToEntitySchema(goJson);
console.log(recreatedSchema);

// Create an instance
const person: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    height: 1.75,
    isActive: true,
};

console.log(person);
