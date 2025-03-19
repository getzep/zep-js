import { z } from "zod";

export enum EntityPropertyType {
    Text = "Text",
    Int = "Int",
    Float = "Float",
    Boolean = "Boolean",
}

export const EntityBaseSchema = z.object({
    type: z.nativeEnum(EntityPropertyType),
    description: z.string(),
});

export interface EntityField<V = any> {
    description: string;
    value?: V;
}

export const EntityTextSchema = EntityBaseSchema.extend({
    type: z.literal(EntityPropertyType.Text),
    value: z.string().optional(),
});

export interface EntityTextField extends EntityField<string> {
    type: EntityPropertyType.Text;
}

export const EntityIntSchema = EntityBaseSchema.extend({
    type: z.literal(EntityPropertyType.Int),
    value: z.number().int().optional(),
});

export interface EntityIntField extends EntityField<number> {
    type: EntityPropertyType.Int;
}

export const EntityFloatSchema = EntityBaseSchema.extend({
    type: z.literal(EntityPropertyType.Float),
    value: z.number().optional(),
});

export interface EntityFloatField extends EntityField<number> {
    type: EntityPropertyType.Float;
}

export const EntityBooleanSchema = EntityBaseSchema.extend({
    type: z.literal(EntityPropertyType.Boolean),
    value: z.boolean().optional(),
});

export interface EntityBooleanField extends EntityField<boolean> {
    type: EntityPropertyType.Boolean;
}

export const EntityFieldSchema = z.union([
    EntityTextSchema,
    EntityIntSchema,
    EntityFloatSchema,
    EntityBooleanSchema,
]);

export type SupportedEntityField = EntityTextField | EntityIntField | EntityFloatField | EntityBooleanField;

export const EntityFields = z.record(EntityFieldSchema);

export type EntityData<T> = {
    [P in keyof T]: T[P] extends EntityField<infer V> ? V | undefined : never;
};

export const entityFields = {
    text: (description: string): EntityTextField => {
        return EntityTextSchema.parse({
            type: EntityPropertyType.Text,
            description,
        });
    },

    integer: (description: string): EntityIntField => {
        return EntityIntSchema.parse({
            type: EntityPropertyType.Int,
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

export function entitySchemaToGoJson(schema: Record<string, SupportedEntityField>, name: string) {
    return {
        name,
        properties: Object.entries(schema).map(([fieldName, fieldDef]) => ({
            name: fieldName,
            type: fieldDef.type,
            description: fieldDef.description,
        })),
    };
}

export function goJsonToEntitySchema(jsonStr: string): Record<string, SupportedEntityField> {
    const data = JSON.parse(jsonStr);
    const schema: Record<string, SupportedEntityField> = {};

    for (const prop of data.properties || []) {
        const { name, type, description } = prop;

        switch (type) {
            case EntityPropertyType.Text:
                schema[name] = entityFields.text(description);
                break;
            case EntityPropertyType.Int:
                schema[name] = entityFields.integer(description);
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

// // Define an entity schema
// const personSchema = {
//     firstName: entityFields.text("The person's first name"),
//     lastName: entityFields.text("The person's last name"),
//     age: entityFields.number("The person's age"),
//     height: entityFields.float("The person's height in meters"),
//     isActive: entityFields.boolean("Whether the person is active"),
// };

// // Extract the data type
// type Person = ExtractedEntityData<typeof personSchema>;

// // Convert to Go-compatible JSON
// const goJson = entitySchemaToGoJson(personSchema, "Person");
// console.log(goJson);

// // Convert back from Go-compatible JSON
// const recreatedSchema = goJsonToEntitySchema(goJson);
// console.log(recreatedSchema);

// // Create an instance
// const person: Person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     height: 1.75,
//     isActive: true,
// };

// console.log(person);
