import { z } from "zod";

export enum ZepDataType {
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

export const BaseSchema = z.object({
    zep_type: z.nativeEnum(ZepDataType),
    description: z.string(),
    default: z.unknown().optional(),
});
