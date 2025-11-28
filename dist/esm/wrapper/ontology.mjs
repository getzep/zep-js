import { z } from "zod";
export var EntityPropertyType;
(function (EntityPropertyType) {
    EntityPropertyType["Text"] = "Text";
    EntityPropertyType["Int"] = "Int";
    EntityPropertyType["Float"] = "Float";
    EntityPropertyType["Boolean"] = "Boolean";
})(EntityPropertyType || (EntityPropertyType = {}));
export const EntityTypeBaseField = z.object({
    type: z.nativeEnum(EntityPropertyType),
    description: z.string(),
});
export const EntityTypeTextFieldSchema = EntityTypeBaseField.extend({
    type: z.literal(EntityPropertyType.Text),
    value: z.string().optional(),
});
export const EntityTypeIntFieldSchema = EntityTypeBaseField.extend({
    type: z.literal(EntityPropertyType.Int),
    value: z.number().int().optional(),
});
export const EntityTypeFloatFieldSchema = EntityTypeBaseField.extend({
    type: z.literal(EntityPropertyType.Float),
    value: z.number().optional(),
});
export const EntityTypeBooleanFieldSchema = EntityTypeBaseField.extend({
    type: z.literal(EntityPropertyType.Boolean),
    value: z.boolean().optional(),
});
export const EntityTypeFieldSchema = z.union([
    EntityTypeTextFieldSchema,
    EntityTypeIntFieldSchema,
    EntityTypeFloatFieldSchema,
    EntityTypeBooleanFieldSchema,
]);
export const EntityFields = z.record(EntityTypeFieldSchema);
export const EntityTypeSchema = z.object({
    description: z.string().default(""),
    fields: z.record(EntityTypeFieldSchema),
});
const EdgeSourceTarget = z.object({
    source: z.string().optional(),
    target: z.string().optional(),
});
export const EdgeTypeSchema = EntityTypeSchema.extend({
    sourceTargets: z.array(EdgeSourceTarget).optional(),
});
export const entityFields = {
    text: (description) => {
        return EntityTypeTextFieldSchema.parse({
            type: EntityPropertyType.Text,
            description,
        });
    },
    integer: (description) => {
        return EntityTypeIntFieldSchema.parse({
            type: EntityPropertyType.Int,
            description,
        });
    },
    float: (description) => {
        return EntityTypeFloatFieldSchema.parse({
            type: EntityPropertyType.Float,
            description,
        });
    },
    boolean: (description) => {
        return EntityTypeBooleanFieldSchema.parse({
            type: EntityPropertyType.Boolean,
            description,
        });
    },
};
export function entityModelToAPISchema(entityType, name) {
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
export function edgeModelToAPISchema(entityType, name) {
    return {
        name,
        description: entityType.description,
        sourceTargets: entityType.sourceTargets,
        properties: Object.entries(entityType.fields).map(([fieldName, fieldDef]) => ({
            name: fieldName,
            type: fieldDef.type,
            description: fieldDef.description,
        })),
    };
}
