import { z } from "zod";
import { ZepDateField, zepDateField, ZepDateSchema, zepDateTimeField } from "./date";
import { zepFloatField, ZepNumberField, zepNumberField, ZepNumberSchema } from "./number";
import { zepEmailField, zepPhoneNumberField, ZepTextField, zepTextField, ZepTextSchema, zepZipcodeField } from "./text";
import { ZepRegexField, zepRegexField, ZepRegexSchema } from "./regex";

export const DataExtractorFields = z.record(z.union([ZepNumberSchema, ZepTextSchema, ZepDateSchema, ZepRegexSchema]));
export type SupportedZepField = ZepNumberField | ZepDateField | ZepRegexField | ZepTextField;
export const schemas = {
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
