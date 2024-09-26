import { ZepClient as BaseClient } from "../Client";
import { Memory } from "./memory";
import * as core from "../core";
const API_SUFFIX = "api/v2"

interface ZepOptions {
    /**
     * The base URL for the API. Must be a valid url, such as "http://localhost:8000".
     */
    baseUrl: string;
    /**
     * The API secret defined in the Zep Config
     */
    apiKey: string;
    fetcher?: core.FetchFunction;
}

export class ZepClient extends BaseClient {
    _options: BaseClient.Options = {}
    constructor(protected readonly _zepOptions: ZepOptions) {
        const baseClientOptions = {
            environment: `${_zepOptions.baseUrl}/${API_SUFFIX}`,
            apiKey: _zepOptions.apiKey,
            fetcher: _zepOptions.fetcher
        }
        super(baseClientOptions)
        this._options = baseClientOptions
    }
    public get memory(): Memory {
        return new Memory(this._options);
    }
}
