import { Memory as BaseMemory } from "../api/resources/memory/client/Client";
import { ExtractDataRequest } from "../api";

export class Memory extends BaseMemory {
    public async extract(sessionId: string, data: any, requestOptions?: BaseMemory.RequestOptions | undefined) {
        console.log("data", JSON.stringify(data));
        const result = await this.extractData(
            sessionId,
            {
                modelSchema: JSON.stringify({ properties: data }),
                lastN: 20,
            },
            requestOptions
        );
        const newData = data;
        Object.keys(result).forEach((key) => {
            newData[key] = result[key];
        });
        return newData;
    }
}
