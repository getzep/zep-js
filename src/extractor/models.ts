import { z } from "zod";

enum ZepDataType {
    ZepText = "ZepText",
    ZepZipCode = "ZepZipCode",
    ZepDate = "ZepDate",
    ZepDateTime = "ZepDateTime",
    ZepEmail = "ZepEmail",
    ZepPhoneNumber = "ZepPhoneNumber",
    ZepFloat = "ZepFloat",
    ZepNumber = "ZepNumber",
    ZepRegex = "ZepRegex",
}

const ZepField = z.object({
    zep_type: z.nativeEnum(ZepDataType),
    description: z.string(),
    default: z.unknown().optional(),
});

// Define a function to create base schemas for each type
function createBaseSchema(type: ZepDataType, additionalSchema?: z.ZodRawShape) {
    return z.object({
        zep_type: z.literal(type),
        description: z.string(),
        default: z.unknown().optional(),
        ...additionalSchema,
    });
}

const ZepNumberSchema = ZepField.extend({
    type: z.literal(ZepDataType.ZepNumber),
    value: z.number().optional(),
    default: z.number().optional(),
});

const ZepTextField = ZepField.extend({
    type: z.literal(ZepDataType.ZepText),
    value: z.string().optional(),
});

export const zepNumberField = (description: string, defaultValue: number = 0) => {
    return ZepNumberSchema.parse({
        zep_type: ZepDataType.ZepNumber,
        description,
        defaultValue,
    });
};
