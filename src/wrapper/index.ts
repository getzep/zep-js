import { ZepClient as BaseClient } from "../Client";
import { Memory } from "./memory";
import { Graph } from "./graph";

export class ZepClient extends BaseClient {
    public get memory(): Memory {
        return new Memory(this._options);
    }

    public get graph(): Graph {
        return new Graph(this._options);
    }
}
