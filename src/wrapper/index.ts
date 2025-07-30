import { ZepClient as BaseClient } from "../Client";
import { Graph } from "./graph";

export class ZepClient extends BaseClient {
    public get graph(): Graph {
        return new Graph(this._options);
    }
}
