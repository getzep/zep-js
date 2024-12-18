/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface Fact {
    content: string;
    createdAt: string;
    expiredAt?: string;
    /** Deprecated. This field will be removed in the future, please use `content` instead. */
    fact: string;
    invalidAt?: string;
    name?: string;
    rating?: number;
    sourceNodeName?: string;
    targetNodeName?: string;
    uuid: string;
    validAt?: string;
}
