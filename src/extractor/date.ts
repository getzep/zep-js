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
});

export interface ZepDateField {
    zep_type: ZepDataType.ZepDate | ZepDataType.ZepDateTime;
    description: string;
}

export const zepDateField = (description: string): ZepDateField => {
    return ZepDateSchema.parse({
        zep_type: ZepDataType.ZepDate,
        description,
    });
};

export const zepDateTimeField = (description: string): ZepDateField => {
    return ZepDateSchema.parse({
        zep_type: ZepDataType.ZepDateTime,
        description,
    });
};
