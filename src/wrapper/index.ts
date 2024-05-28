import { ZepClient as BaseClient } from "../Client";

import { Memory as BaseMemory } from "../api/resources/memory/client/Client";
import { ZepDataClass } from "../api";

// TODO: better way to do this?
function isZepDataClass(object: any): object is ZepDataClass {
  if (typeof object !== 'object' || object === null) {
    return false;
  }

  return 'type' in object && 'description' in object && 'name' in object;
}

class Memory extends BaseMemory {
  public extractSessionDataFromModel(sessionId: string, model: any) {
    let zepDataClasses: any[] = [];

    for (let [key, value] of Object.entries(model)) {
      if (isZepDataClass(value)) {
        zepDataClasses.push(value);
      }
    }

    return this.extractSessionData(sessionId, {
      lastNMessages: 100,
      zepDataClasses: zepDataClasses,
    });
  }
}

export class ZepClient extends BaseClient {
  override get memory() {
    return new Memory(this._options);
  }
}

