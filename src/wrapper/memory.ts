import { Memory as BaseMemory } from "../api/resources/memory/client/Client";
import { ExtractDataRequest } from "../api";
import { ZodTypeAny } from "zod";
import { ZepDataType } from "../extractor/base";
import { DataExtractorFields, schemas } from "../extractor";

export class Memory extends BaseMemory {
    public async extract<T extends Record<string, { zep_type: ZepDataType; description: string }>>(
        sessionId: string,
        schema: T,
        params: Omit<ExtractDataRequest, "modelSchema">,
        requestOptions?: BaseMemory.RequestOptions | undefined
    ): Promise<{ [K in keyof T]: ReturnType<typeof schemas[T[K]["zep_type"]]["parse"]>["value"] }> {
        const validatedData = DataExtractorFields.parse(schema);
        const result = await this.extractData(
            sessionId,
            {
                ...params,
                modelSchema: JSON.stringify({ properties: validatedData }),
            },
            requestOptions
        );
        console.log("result", result);
        const transformedResult: Record<string, any> = {};
        for (const [key, value] of Object.entries(schema)) {
            const { value: parsedValue } = schemas[value.zep_type].parse({
                ...value,
                value: result[key],
            });
            transformedResult[key] = parsedValue;
        }
        return transformedResult as { [K in keyof T]: ReturnType<typeof schemas[T[K]["zep_type"]]["parse"]>["value"] };
    }
}
