import { z } from "zod";
import { BaseSchema, ZepDataType } from "./base";
import { HasOptionalValue } from "./index";

export const ZepRegexSchema = BaseSchema.extend({
    zep_type: z.literal(ZepDataType.ZepRegex),
    value: z.string().optional(),
    pattern: z.string().refine(
        (p) => {
            try {
                new RegExp(p);
                return true; // Pattern is valid
            } catch {
                return false; // Pattern is invalid
            }
        },
        {
            message: "Invalid regex pattern", // Custom error message
        }
    ),
    default: z.string().optional(),
});

export interface ZepRegexField extends HasOptionalValue<string> {
    zep_type: ZepDataType.ZepRegex;
    description: string;
    pattern: string;
}

export const zepRegexField = (description: string, pattern: RegExp): ZepRegexField => {
    return ZepRegexSchema.parse({
        zep_type: ZepDataType.ZepRegex,
        pattern: pattern.source,
        description,
    });
};
