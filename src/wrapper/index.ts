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

export class BaseDataExtractorModel {
  private data: Map<string, any>;

  constructor() {
    this.data = new Map();
  }

  updateData(newData: any) {
    for (const key in newData) {
      this.data.set(key, newData[key]);
    }
  }

  getData(): Map<string, any> {
    return this.data;
  }
}

class Memory extends BaseMemory {
  public async extractSessionDataFromModel(sessionId: string, lastNMessages: number, model: BaseDataExtractorModel): Promise<BaseDataExtractorModel> {
    let zepDataClasses: ZepDataClass[] = [];

    for (let [key, value] of Object.entries(model)) {
      if (isZepDataClass(value)) {
        zepDataClasses.push(value);
      }
    }

    const data = await this.extractSessionData(sessionId, {
      lastNMessages: lastNMessages,
      zepDataClasses: zepDataClasses,
    });

    model.updateData(data);

    return model;
  }
}

export class ZepClient extends BaseClient {
  override get memory() {
    return new Memory(this._options);
  }
}

