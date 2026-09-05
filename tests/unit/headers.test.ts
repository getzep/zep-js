import { GeneratedIdempotencyClientFixture } from "../fixtures/generatedIdempotencyClient";

const UUID_V4_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;

describe("generated idempotency headers", () => {
    const client = new GeneratedIdempotencyClientFixture();

    afterEach(() => {
        vi.useRealTimers();
    });

    it("generates a UUIDv4 for a marked mutation", () => {
        expect(client.mutationHeaders()["idempotency-key"]).toMatch(UUID_V4_PATTERN);
    });

    it("reuses the generated key across retries", async () => {
        vi.useFakeTimers();
        const keys: unknown[] = [];
        const request = vi
            .fn<(headers: Record<string, unknown>) => Promise<Response>>()
            .mockImplementationOnce(async (headers) => {
                keys.push(headers["idempotency-key"]);
                return new Response(null, { status: 500 });
            })
            .mockImplementationOnce(async (headers) => {
                keys.push(headers["idempotency-key"]);
                return new Response(null, { status: 200 });
            });

        const responsePromise = client.mutate(request);
        await vi.runAllTimersAsync();
        const response = await responsePromise;

        expect(response.status).toBe(200);
        expect(request).toHaveBeenCalledTimes(2);
        expect(keys[0]).toMatch(UUID_V4_PATTERN);
        expect(keys[1]).toBe(keys[0]);
    });

    it("preserves a caller-provided key", () => {
        expect(client.mutationHeaders({ idempotencyKey: "caller-key" })["idempotency-key"]).toBe("caller-key");
    });

    it("omits the header from an unmarked GET read", () => {
        expect(client.getReadHeaders()).not.toHaveProperty("idempotency-key");
    });

    it("omits the header from an unmarked POST read", () => {
        expect(client.postReadHeaders()).not.toHaveProperty("idempotency-key");
    });
});
