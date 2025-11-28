import { ObjectSchema } from "../object/types.mjs";
import { SchemaGetter } from "./lazy.mjs";
export declare function lazyObject<Raw, Parsed>(getter: SchemaGetter<ObjectSchema<Raw, Parsed>>): ObjectSchema<Raw, Parsed>;
