import { ZepClient as BaseClient } from "../Client";
import { Memory } from "./memory";
import { Memory as BaseMemory } from "../api/resources/memory/client/Client";

export class ZepClient extends BaseClient {
    public get memory(): BaseMemory {
        return new Memory(this._options);
    }
}
