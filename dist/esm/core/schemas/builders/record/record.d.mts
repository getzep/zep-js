import { Schema } from "../../Schema.mjs";
import { RecordSchema } from "./types.mjs";
export declare function record<RawKey extends string | number, RawValue, ParsedValue, ParsedKey extends string | number>(keySchema: Schema<RawKey, ParsedKey>, valueSchema: Schema<RawValue, ParsedValue>): RecordSchema<RawKey, RawValue, ParsedKey, ParsedValue>;
