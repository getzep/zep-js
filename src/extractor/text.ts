import { z } from "zod";
import { BaseSchema, ZepDataType } from "./base";

export const ZepTextSchema = BaseSchema.extend({
    zep_type: z.union([
        z.literal(ZepDataType.ZepText),
        z.literal(ZepDataType.ZepZipCode),
        z.literal(ZepDataType.ZepEmail),
        z.literal(ZepDataType.ZepPhoneNumber),
    ]),
    value: z.string().optional(),
    default: z.string().optional(),
});

export const zepTextField = (description: string, defaultValue: string = "") => {
    return ZepTextSchema.parse({
        zep_type: ZepDataType.ZepText,
        description,
        defaultValue,
    });
};

export const zepZipcodeField = (description: string, defaultValue?: string) => {
    return ZepTextSchema.parse({
        zep_type: ZepDataType.ZepZipCode,
        description,
        defaultValue,
    });
};

export const zepPhoneNumberField = (description: string, defaultValue?: string) => {
    return ZepTextSchema.parse({
        zep_type: ZepDataType.ZepPhoneNumber,
        description,
        defaultValue,
    });
};

export const zepEmailField = (description: string, defaultValue?: string) => {
    return ZepTextSchema.parse({
        zep_type: ZepDataType.ZepEmail,
        description,
        defaultValue,
    });
};
