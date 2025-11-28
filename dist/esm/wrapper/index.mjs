import { ZepClient as BaseClient } from "../Client.mjs";
import { Graph } from "./graph.mjs";
export class ZepClient extends BaseClient {
    get graph() {
        return new Graph(this._options);
    }
}
