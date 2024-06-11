import { z, ZodObject } from "zod";
import { zepDateField, ZepDateSchema, zepDateTimeField } from "./date";
import { zepFloatField, zepNumberField, ZepNumberSchema } from "./number";
import { zepEmailField, zepPhoneNumberField, zepTextField, ZepTextSchema, zepZipcodeField } from "./text";
import { zepRegexField, ZepRegexSchema } from "./regex";
import { ZepDataType } from "./base";

export const DataExtractorFields = z.record(z.union([ZepNumberSchema, ZepTextSchema, ZepDateSchema, ZepRegexSchema]));

export const schemas: Record<ZepDataType, ZodObject<any>> = {
    ZepNumber: ZepNumberSchema,
    ZepText: ZepTextSchema,
    ZepZipCode: ZepTextSchema,
    ZepDate: ZepDateSchema,
    ZepDateTime: ZepDateSchema,
    ZepEmail: ZepTextSchema,
    ZepPhoneNumber: ZepTextSchema,
    ZepFloat: ZepNumberSchema,
    ZepRegex: ZepRegexSchema,
};

export const zepFields = {
    number: zepNumberField,
    text: zepTextField,
    zipCode: zepZipcodeField,
    date: zepDateField,
    dateTime: zepDateTimeField,
    email: zepEmailField,
    phoneNumber: zepPhoneNumberField,
    float: zepFloatField,
    regex: zepRegexField,
};
