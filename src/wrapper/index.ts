import { ZepClient as BaseClient } from "../Client";
import { Memory } from "./memory";

export class ZepClient extends BaseClient {
    public get memory(): Memory {
        return new Memory(this._options);
    }
}
