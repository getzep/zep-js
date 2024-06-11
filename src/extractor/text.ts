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

export interface ZepTextField {
    zep_type: ZepDataType.ZepText | ZepDataType.ZepZipCode | ZepDataType.ZepEmail | ZepDataType.ZepPhoneNumber;
    description: string;
}

export const zepTextField = (description: string): ZepTextField => {
    return ZepTextSchema.parse({
        zep_type: ZepDataType.ZepText,
        description,
    });
};

export const zepZipcodeField = (description: string): ZepTextField => {
    return ZepTextSchema.parse({
        zep_type: ZepDataType.ZepZipCode,
        description,
    });
};

export const zepPhoneNumberField = (description: string): ZepTextField => {
    return ZepTextSchema.parse({
        zep_type: ZepDataType.ZepPhoneNumber,
        description,
    });
};

export const zepEmailField = (description: string): ZepTextField => {
    return ZepTextSchema.parse({
        zep_type: ZepDataType.ZepEmail,
        description,
    });
};
