import { ZepClient as BaseClient } from "../Client.js";
import { Graph } from "./graph.js";

export class ZepClient extends BaseClient {
    public get graph(): Graph {
        return new Graph(this._options);
    }
}
