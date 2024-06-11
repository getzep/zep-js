import { z } from "zod";
import { BaseSchema, ZepDataType } from "./base";

const stringToDateTransformer = z.union([z.string(), z.date()]).transform((value, ctx) => {
    if (typeof value === "string") {
        return new Date(value);
    }
    return value;
});

export const ZepDateSchema = BaseSchema.extend({
    zep_type: z.union([z.literal(ZepDataType.ZepDate), z.literal(ZepDataType.ZepDateTime)]),
    value: stringToDateTransformer.optional(),
    default: stringToDateTransformer.optional(),
});

export const zepDateField = (description: string, defaultValue?: Date) => {
    return ZepDateSchema.parse({
        zep_type: ZepDataType.ZepDate,
        description,
        defaultValue,
    });
};

export const zepDateTimeField = (description: string, defaultValue?: Date) => {
    return ZepDateSchema.parse({
        zep_type: ZepDataType.ZepDateTime,
        description,
        defaultValue,
    });
};
