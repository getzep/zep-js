import { z } from "zod";
import { Zep } from "../index";

export enum EntityPropertyType {
    Text = "Text",
    Int = "Int",
    Float = "Float",
    Boolean = "Boolean",
}

export const EntityTypeBaseField = z.object({
    type: z.nativeEnum(EntityPropertyType),
    description: z.string(),
});

export interface EntityField<V = any> {
    description: string;
    value?: V;
}

export const EntityTypeTextFieldSchema = EntityTypeBaseField.extend({
    type: z.literal(EntityPropertyType.Text),
    value: z.string().optional(),
});

export type EntityTextField = z.infer<typeof EntityTypeTextFieldSchema>;

export const EntityTypeIntFieldSchema = EntityTypeBaseField.extend({
    type: z.literal(EntityPropertyType.Int),
    value: z.number().int().optional(),
});

export type EntityIntField = z.infer<typeof EntityTypeIntFieldSchema>;

export const EntityTypeFloatFieldSchema = EntityTypeBaseField.extend({
    type: z.literal(EntityPropertyType.Float),
    value: z.number().optional(),
});

export type EntityFloatField = z.infer<typeof EntityTypeFloatFieldSchema>;

export const EntityTypeBooleanFieldSchema = EntityTypeBaseField.extend({
    type: z.literal(EntityPropertyType.Boolean),
    value: z.boolean().optional(),
});

export type EntityBooleanField = z.infer<typeof EntityTypeBooleanFieldSchema>;

export const EntityTypeFieldSchema = z.union([
    EntityTypeTextFieldSchema,
    EntityTypeIntFieldSchema,
    EntityTypeFloatFieldSchema,
    EntityTypeBooleanFieldSchema,
]);

export type SupportedEntityField = EntityTextField | EntityIntField | EntityFloatField | EntityBooleanField;

export const EntityFields = z.record(EntityTypeFieldSchema);

export const EntityTypeSchema = z.object({
    description: z.string().default(""),
    fields: z.record(EntityTypeFieldSchema),
});

export type EntityType = z.infer<typeof EntityTypeSchema>;

export type EntityData<T extends EntityType> = {
    [P in keyof T["fields"]]: T["fields"][P] extends { value?: infer V } ? V : never;
};

export const entityFields = {
    text: (description: string): EntityTextField => {
        return EntityTypeTextFieldSchema.parse({
            type: EntityPropertyType.Text,
            description,
        });
    },

    integer: (description: string): EntityIntField => {
        return EntityTypeIntFieldSchema.parse({
            type: EntityPropertyType.Int,
            description,
        });
    },

    float: (description: string): EntityFloatField => {
        return EntityTypeFloatFieldSchema.parse({
            type: EntityPropertyType.Float,
            description,
        });
    },

    boolean: (description: string): EntityBooleanField => {
        return EntityTypeBooleanFieldSchema.parse({
            type: EntityPropertyType.Boolean,
            description,
        });
    },
};

export function entityModelToAPISchema(entityType: EntityType, name: string): Zep.EntityType {
    return {
        name,
        description: entityType.description,
        properties: Object.entries(entityType.fields).map(([fieldName, fieldDef]) => ({
            name: fieldName,
            type: fieldDef.type,
            description: fieldDef.description,
        })),
    };
}
