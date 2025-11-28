import { ZepClient as BaseClient } from "../Client.js";
import { Graph } from "./graph.js";
export declare class ZepClient extends BaseClient {
    get graph(): Graph;
}
