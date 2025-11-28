import { getBinaryResponse } from "./BinaryResponse.js";
import { isResponseWithBody } from "./ResponseWithBody.js";
import { fromJson } from "../json.js";

export async function getResponseBody(response: Response, responseType?: string): Promise<unknown> {
    if (!isResponseWithBody(response)) {
        return undefined;
    }
    switch (responseType) {
        case "binary-response":
            return getBinaryResponse(response);
        case "blob":
            return await response.blob();
        case "arrayBuffer":
            return await response.arrayBuffer();
        case "sse":
            return response.body;
        case "streaming":
            return response.body;

        case "text":
            return await response.text();
    }

    // if responseType is "json" or not specified, use response.json() directly
    // This is more reliable across platforms (Node.js, browsers, React Native)
    try {
        return await response.json();
    } catch (err) {
        // If json() fails, the body might be empty or invalid JSON
        // Return undefined to let the caller handle it
        return undefined;
    }
}
