import { ZepClient as BaseClient } from "../Client.mjs";
import { Graph } from "./graph.mjs";
export declare class ZepClient extends BaseClient {
    get graph(): Graph;
}
