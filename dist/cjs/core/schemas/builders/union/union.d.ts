import { ObjectLikeSchema } from "../object-like/index.js";
import { Discriminant } from "./discriminant.js";
import { UnionSubtypes, inferParsedUnion, inferRawUnion } from "./types.js";
export declare function union<D extends string | Discriminant<any, any>, U extends UnionSubtypes<any>>(discriminant: D, union: U): ObjectLikeSchema<inferRawUnion<D, U>, inferParsedUnion<D, U>>;
