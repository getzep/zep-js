import { z } from "zod";
import { BaseSchema, ZepDataType } from "./base";

const stringToNumberTransformer = z.union([z.string(), z.number()]).transform((value, ctx) => {
    if (typeof value === "string") {
        const parsed = parseFloat(value);
        if (isNaN(parsed)) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Not a number",
            });
        }
        return parsed;
    }
    return value;
});

export const ZepNumberSchema = BaseSchema.extend({
    zep_type: z.union([z.literal(ZepDataType.ZepNumber), z.literal(ZepDataType.ZepFloat)]),
    value: stringToNumberTransformer.optional(),
    default: stringToNumberTransformer.optional(),
});

export const zepNumberField = (description: string, defaultValue: number = 0) => {
    return ZepNumberSchema.parse({
        zep_type: ZepDataType.ZepNumber,
        description,
        defaultValue,
    });
};

export const zepFloatField = (description: string, defaultValue: number = 0) => {
    return ZepNumberSchema.parse({
        zep_type: ZepDataType.ZepFloat,
        description,
        defaultValue,
    });
};
