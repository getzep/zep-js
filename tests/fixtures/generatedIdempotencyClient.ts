import { requestWithRetries } from "../../src/core/fetcher/requestWithRetries";
import { mergeHeaders, mergeOnlyDefinedHeaders } from "../../src/core/headers";

type RequestOptions = {
    idempotencyKey?: string;
    headers?: Record<string, unknown>;
};

type Request = (headers: Record<string, unknown>) => Promise<Response>;

export class GeneratedIdempotencyClientFixture {
    public mutationHeaders(requestOptions?: RequestOptions): Record<string, unknown> {
        return mergeHeaders(
            mergeOnlyDefinedHeaders({ "Idempotency-Key": requestOptions?.idempotencyKey }),
            requestOptions?.headers,
        );
    }

    public getReadHeaders(): Record<string, unknown> {
        return mergeHeaders();
    }

    public postReadHeaders(): Record<string, unknown> {
        return mergeHeaders();
    }

    public async mutate(request: Request, requestOptions?: RequestOptions): Promise<Response> {
        const headers = this.mutationHeaders(requestOptions);
        return requestWithRetries(() => request(headers), 1);
    }
}
