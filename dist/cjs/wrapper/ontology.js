"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entityFields = exports.EdgeTypeSchema = exports.EntityTypeSchema = exports.EntityFields = exports.EntityTypeFieldSchema = exports.EntityTypeBooleanFieldSchema = exports.EntityTypeFloatFieldSchema = exports.EntityTypeIntFieldSchema = exports.EntityTypeTextFieldSchema = exports.EntityTypeBaseField = exports.EntityPropertyType = void 0;
exports.entityModelToAPISchema = entityModelToAPISchema;
exports.edgeModelToAPISchema = edgeModelToAPISchema;
const zod_1 = require("zod");
var EntityPropertyType;
(function (EntityPropertyType) {
    EntityPropertyType["Text"] = "Text";
    EntityPropertyType["Int"] = "Int";
    EntityPropertyType["Float"] = "Float";
    EntityPropertyType["Boolean"] = "Boolean";
})(EntityPropertyType || (exports.EntityPropertyType = EntityPropertyType = {}));
exports.EntityTypeBaseField = zod_1.z.object({
    type: zod_1.z.nativeEnum(EntityPropertyType),
    description: zod_1.z.string(),
});
exports.EntityTypeTextFieldSchema = exports.EntityTypeBaseField.extend({
    type: zod_1.z.literal(EntityPropertyType.Text),
    value: zod_1.z.string().optional(),
});
exports.EntityTypeIntFieldSchema = exports.EntityTypeBaseField.extend({
    type: zod_1.z.literal(EntityPropertyType.Int),
    value: zod_1.z.number().int().optional(),
});
exports.EntityTypeFloatFieldSchema = exports.EntityTypeBaseField.extend({
    type: zod_1.z.literal(EntityPropertyType.Float),
    value: zod_1.z.number().optional(),
});
exports.EntityTypeBooleanFieldSchema = exports.EntityTypeBaseField.extend({
    type: zod_1.z.literal(EntityPropertyType.Boolean),
    value: zod_1.z.boolean().optional(),
});
exports.EntityTypeFieldSchema = zod_1.z.union([
    exports.EntityTypeTextFieldSchema,
    exports.EntityTypeIntFieldSchema,
    exports.EntityTypeFloatFieldSchema,
    exports.EntityTypeBooleanFieldSchema,
]);
exports.EntityFields = zod_1.z.record(exports.EntityTypeFieldSchema);
exports.EntityTypeSchema = zod_1.z.object({
    description: zod_1.z.string().default(""),
    fields: zod_1.z.record(exports.EntityTypeFieldSchema),
});
const EdgeSourceTarget = zod_1.z.object({
    source: zod_1.z.string().optional(),
    target: zod_1.z.string().optional(),
});
exports.EdgeTypeSchema = exports.EntityTypeSchema.extend({
    sourceTargets: zod_1.z.array(EdgeSourceTarget).optional(),
});
exports.entityFields = {
    text: (description) => {
        return exports.EntityTypeTextFieldSchema.parse({
            type: EntityPropertyType.Text,
            description,
        });
    },
    integer: (description) => {
        return exports.EntityTypeIntFieldSchema.parse({
            type: EntityPropertyType.Int,
            description,
        });
    },
    float: (description) => {
        return exports.EntityTypeFloatFieldSchema.parse({
            type: EntityPropertyType.Float,
            description,
        });
    },
    boolean: (description) => {
        return exports.EntityTypeBooleanFieldSchema.parse({
            type: EntityPropertyType.Boolean,
            description,
        });
    },
};
function entityModelToAPISchema(entityType, name) {
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
function edgeModelToAPISchema(entityType, name) {
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
