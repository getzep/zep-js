import { z } from "zod";
import { ZepDateField, zepDateField, ZepDateSchema, zepDateTimeField } from "./date";
import { zepFloatField, ZepNumberField, zepNumberField, ZepNumberSchema } from "./number";
import { zepEmailField, zepPhoneNumberField, ZepTextField, zepTextField, ZepTextSchema, zepZipcodeField } from "./text";
import { ZepRegexField, zepRegexField, ZepRegexSchema } from "./regex";

export const DataExtractorFields = z.record(z.union([ZepNumberSchema, ZepTextSchema, ZepDateSchema, ZepRegexSchema]));
export type SupportedZepField = ZepNumberField | ZepDateField | ZepRegexField | ZepTextField;

export interface HasOptionalValue<V = any> {
    value?: V;
}

/**
 * Deprecated
 *
 * Extracts the data types from the fields defined in the schema T. Each field in T
 * is expected to conform to the HasOptionalValue interface, which optionally includes
 * a 'value' of type V. This type definition maps each field in T to its corresponding
 * 'value' type, but since 'value' is optional, the resulting type for each field also
 * includes 'undefined'.
 *
 * @template T - The schema object from which to extract data types. Each property of T
 *               should implement the HasOptionalValue interface.
 *
 * @returns An object type with the same keys as T, but where the type of each key is
 *          either the type of 'value' in the corresponding field of T or 'undefined'
 *          if 'value' is optional.
 *
 * @example
 * ```
 * interface PersonSchema {
 *   name: HasOptionalValue<string>; // ZepTextField
 *   age: HasOptionalValue<number>; // ZepNumberField
 * }
 *
 * type PersonData = ExtractedData<PersonSchema>;
 * // PersonData would be equivalent to:
 * // { name: string | undefined; age: number | undefined; }
 * ```
 * This example demonstrates how `ExtractedData` would transform a hypothetical `PersonSchema`
 * into `PersonData`, clarifying how the types are derived and what to expect in the output.
 */
export type ExtractedData<T> = {
    [P in keyof T]: T[P] extends HasOptionalValue<infer V> ? V | undefined : never;
};

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
