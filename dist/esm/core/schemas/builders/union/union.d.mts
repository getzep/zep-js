import { ObjectLikeSchema } from "../object-like/index.mjs";
import { Discriminant } from "./discriminant.mjs";
import { UnionSubtypes, inferParsedUnion, inferRawUnion } from "./types.mjs";
export declare function union<D extends string | Discriminant<any, any>, U extends UnionSubtypes<any>>(discriminant: D, union: U): ObjectLikeSchema<inferRawUnion<D, U>, inferParsedUnion<D, U>>;
