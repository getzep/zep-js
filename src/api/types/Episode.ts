/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Zep from "../index";

export interface Episode {
    content: string;
    createdAt: string;
    processed?: boolean;
    source?: Zep.GraphDataType;
    sourceDescription?: string;
    uuid: string;
}
