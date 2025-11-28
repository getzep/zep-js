import { z } from "zod";
import { Zep } from "../index.js";
export declare enum EntityPropertyType {
    Text = "Text",
    Int = "Int",
    Float = "Float",
    Boolean = "Boolean"
}
export declare const EntityTypeBaseField: z.ZodObject<{
    type: z.ZodNativeEnum<typeof EntityPropertyType>;
    description: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: EntityPropertyType;
    description: string;
}, {
    type: EntityPropertyType;
    description: string;
}>;
export interface EntityField<V = any> {
    description: string;
    value?: V;
}
export declare const EntityTypeTextFieldSchema: z.ZodObject<{
    description: z.ZodString;
} & {
    type: z.ZodLiteral<EntityPropertyType.Text>;
    value: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: EntityPropertyType.Text;
    description: string;
    value?: string | undefined;
}, {
    type: EntityPropertyType.Text;
    description: string;
    value?: string | undefined;
}>;
export type EntityTextField = z.infer<typeof EntityTypeTextFieldSchema>;
export declare const EntityTypeIntFieldSchema: z.ZodObject<{
    description: z.ZodString;
} & {
    type: z.ZodLiteral<EntityPropertyType.Int>;
    value: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: EntityPropertyType.Int;
    description: string;
    value?: number | undefined;
}, {
    type: EntityPropertyType.Int;
    description: string;
    value?: number | undefined;
}>;
export type EntityIntField = z.infer<typeof EntityTypeIntFieldSchema>;
export declare const EntityTypeFloatFieldSchema: z.ZodObject<{
    description: z.ZodString;
} & {
    type: z.ZodLiteral<EntityPropertyType.Float>;
    value: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: EntityPropertyType.Float;
    description: string;
    value?: number | undefined;
}, {
    type: EntityPropertyType.Float;
    description: string;
    value?: number | undefined;
}>;
export type EntityFloatField = z.infer<typeof EntityTypeFloatFieldSchema>;
export declare const EntityTypeBooleanFieldSchema: z.ZodObject<{
    description: z.ZodString;
} & {
    type: z.ZodLiteral<EntityPropertyType.Boolean>;
    value: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    type: EntityPropertyType.Boolean;
    description: string;
    value?: boolean | undefined;
}, {
    type: EntityPropertyType.Boolean;
    description: string;
    value?: boolean | undefined;
}>;
export type EntityBooleanField = z.infer<typeof EntityTypeBooleanFieldSchema>;
export declare const EntityTypeFieldSchema: z.ZodUnion<[z.ZodObject<{
    description: z.ZodString;
} & {
    type: z.ZodLiteral<EntityPropertyType.Text>;
    value: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: EntityPropertyType.Text;
    description: string;
    value?: string | undefined;
}, {
    type: EntityPropertyType.Text;
    description: string;
    value?: string | undefined;
}>, z.ZodObject<{
    description: z.ZodString;
} & {
    type: z.ZodLiteral<EntityPropertyType.Int>;
    value: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: EntityPropertyType.Int;
    description: string;
    value?: number | undefined;
}, {
    type: EntityPropertyType.Int;
    description: string;
    value?: number | undefined;
}>, z.ZodObject<{
    description: z.ZodString;
} & {
    type: z.ZodLiteral<EntityPropertyType.Float>;
    value: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: EntityPropertyType.Float;
    description: string;
    value?: number | undefined;
}, {
    type: EntityPropertyType.Float;
    description: string;
    value?: number | undefined;
}>, z.ZodObject<{
    description: z.ZodString;
} & {
    type: z.ZodLiteral<EntityPropertyType.Boolean>;
    value: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    type: EntityPropertyType.Boolean;
    description: string;
    value?: boolean | undefined;
}, {
    type: EntityPropertyType.Boolean;
    description: string;
    value?: boolean | undefined;
}>]>;
export type SupportedEntityField = EntityTextField | EntityIntField | EntityFloatField | EntityBooleanField;
export declare const EntityFields: z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodObject<{
    description: z.ZodString;
} & {
    type: z.ZodLiteral<EntityPropertyType.Text>;
    value: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: EntityPropertyType.Text;
    description: string;
    value?: string | undefined;
}, {
    type: EntityPropertyType.Text;
    description: string;
    value?: string | undefined;
}>, z.ZodObject<{
    description: z.ZodString;
} & {
    type: z.ZodLiteral<EntityPropertyType.Int>;
    value: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: EntityPropertyType.Int;
    description: string;
    value?: number | undefined;
}, {
    type: EntityPropertyType.Int;
    description: string;
    value?: number | undefined;
}>, z.ZodObject<{
    description: z.ZodString;
} & {
    type: z.ZodLiteral<EntityPropertyType.Float>;
    value: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: EntityPropertyType.Float;
    description: string;
    value?: number | undefined;
}, {
    type: EntityPropertyType.Float;
    description: string;
    value?: number | undefined;
}>, z.ZodObject<{
    description: z.ZodString;
} & {
    type: z.ZodLiteral<EntityPropertyType.Boolean>;
    value: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    type: EntityPropertyType.Boolean;
    description: string;
    value?: boolean | undefined;
}, {
    type: EntityPropertyType.Boolean;
    description: string;
    value?: boolean | undefined;
}>]>>;
export declare const EntityTypeSchema: z.ZodObject<{
    description: z.ZodDefault<z.ZodString>;
    fields: z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodObject<{
        description: z.ZodString;
    } & {
        type: z.ZodLiteral<EntityPropertyType.Text>;
        value: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: EntityPropertyType.Text;
        description: string;
        value?: string | undefined;
    }, {
        type: EntityPropertyType.Text;
        description: string;
        value?: string | undefined;
    }>, z.ZodObject<{
        description: z.ZodString;
    } & {
        type: z.ZodLiteral<EntityPropertyType.Int>;
        value: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: EntityPropertyType.Int;
        description: string;
        value?: number | undefined;
    }, {
        type: EntityPropertyType.Int;
        description: string;
        value?: number | undefined;
    }>, z.ZodObject<{
        description: z.ZodString;
    } & {
        type: z.ZodLiteral<EntityPropertyType.Float>;
        value: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: EntityPropertyType.Float;
        description: string;
        value?: number | undefined;
    }, {
        type: EntityPropertyType.Float;
        description: string;
        value?: number | undefined;
    }>, z.ZodObject<{
        description: z.ZodString;
    } & {
        type: z.ZodLiteral<EntityPropertyType.Boolean>;
        value: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        type: EntityPropertyType.Boolean;
        description: string;
        value?: boolean | undefined;
    }, {
        type: EntityPropertyType.Boolean;
        description: string;
        value?: boolean | undefined;
    }>]>>;
}, "strip", z.ZodTypeAny, {
    description: string;
    fields: Record<string, {
        type: EntityPropertyType.Text;
        description: string;
        value?: string | undefined;
    } | {
        type: EntityPropertyType.Int;
        description: string;
        value?: number | undefined;
    } | {
        type: EntityPropertyType.Float;
        description: string;
        value?: number | undefined;
    } | {
        type: EntityPropertyType.Boolean;
        description: string;
        value?: boolean | undefined;
    }>;
}, {
    fields: Record<string, {
        type: EntityPropertyType.Text;
        description: string;
        value?: string | undefined;
    } | {
        type: EntityPropertyType.Int;
        description: string;
        value?: number | undefined;
    } | {
        type: EntityPropertyType.Float;
        description: string;
        value?: number | undefined;
    } | {
        type: EntityPropertyType.Boolean;
        description: string;
        value?: boolean | undefined;
    }>;
    description?: string | undefined;
}>;
export declare const EdgeTypeSchema: z.ZodObject<{
    description: z.ZodDefault<z.ZodString>;
    fields: z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodObject<{
        description: z.ZodString;
    } & {
        type: z.ZodLiteral<EntityPropertyType.Text>;
        value: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: EntityPropertyType.Text;
        description: string;
        value?: string | undefined;
    }, {
        type: EntityPropertyType.Text;
        description: string;
        value?: string | undefined;
    }>, z.ZodObject<{
        description: z.ZodString;
    } & {
        type: z.ZodLiteral<EntityPropertyType.Int>;
        value: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: EntityPropertyType.Int;
        description: string;
        value?: number | undefined;
    }, {
        type: EntityPropertyType.Int;
        description: string;
        value?: number | undefined;
    }>, z.ZodObject<{
        description: z.ZodString;
    } & {
        type: z.ZodLiteral<EntityPropertyType.Float>;
        value: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: EntityPropertyType.Float;
        description: string;
        value?: number | undefined;
    }, {
        type: EntityPropertyType.Float;
        description: string;
        value?: number | undefined;
    }>, z.ZodObject<{
        description: z.ZodString;
    } & {
        type: z.ZodLiteral<EntityPropertyType.Boolean>;
        value: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        type: EntityPropertyType.Boolean;
        description: string;
        value?: boolean | undefined;
    }, {
        type: EntityPropertyType.Boolean;
        description: string;
        value?: boolean | undefined;
    }>]>>;
} & {
    sourceTargets: z.ZodOptional<z.ZodArray<z.ZodObject<{
        source: z.ZodOptional<z.ZodString>;
        target: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        source?: string | undefined;
        target?: string | undefined;
    }, {
        source?: string | undefined;
        target?: string | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    description: string;
    fields: Record<string, {
        type: EntityPropertyType.Text;
        description: string;
        value?: string | undefined;
    } | {
        type: EntityPropertyType.Int;
        description: string;
        value?: number | undefined;
    } | {
        type: EntityPropertyType.Float;
        description: string;
        value?: number | undefined;
    } | {
        type: EntityPropertyType.Boolean;
        description: string;
        value?: boolean | undefined;
    }>;
    sourceTargets?: {
        source?: string | undefined;
        target?: string | undefined;
    }[] | undefined;
}, {
    fields: Record<string, {
        type: EntityPropertyType.Text;
        description: string;
        value?: string | undefined;
    } | {
        type: EntityPropertyType.Int;
        description: string;
        value?: number | undefined;
    } | {
        type: EntityPropertyType.Float;
        description: string;
        value?: number | undefined;
    } | {
        type: EntityPropertyType.Boolean;
        description: string;
        value?: boolean | undefined;
    }>;
    description?: string | undefined;
    sourceTargets?: {
        source?: string | undefined;
        target?: string | undefined;
    }[] | undefined;
}>;
export type EntityType = z.infer<typeof EntityTypeSchema>;
export type EdgeType = z.infer<typeof EdgeTypeSchema>;
export type EntityData<T extends EntityType> = {
    [P in keyof T["fields"]]: T["fields"][P] extends {
        value?: infer V;
    } ? V : never;
};
export type EdgeData<T extends EdgeType> = {
    [P in keyof T["fields"]]: T["fields"][P] extends {
        value?: infer V;
    } ? V : never;
};
export declare const entityFields: {
    text: (description: string) => EntityTextField;
    integer: (description: string) => EntityIntField;
    float: (description: string) => EntityFloatField;
    boolean: (description: string) => EntityBooleanField;
};
export declare function entityModelToAPISchema(entityType: EntityType, name: string): Zep.EntityType;
export declare function edgeModelToAPISchema(entityType: EdgeType, name: string): Zep.EdgeType;
