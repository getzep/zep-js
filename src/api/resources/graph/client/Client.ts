/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Zep from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";
import { Edge } from "../resources/edge/client/Client";
import { Episode } from "../resources/episode/client/Client";
import { Node } from "../resources/node/client/Client";

export declare namespace Graph {
    export interface Options {
        environment?: core.Supplier<environments.ZepEnvironment | string>;
        apiKey?: core.Supplier<string | undefined>;
        fetcher?: core.FetchFunction;
    }

    export interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

export class Graph {
    protected _edge: Edge | undefined;
    protected _episode: Episode | undefined;
    protected _node: Node | undefined;

    constructor(protected readonly _options: Graph.Options = {}) {}

    public get edge(): Edge {
        return (this._edge ??= new Edge(this._options));
    }

    public get episode(): Episode {
        return (this._episode ??= new Episode(this._options));
    }

    public get node(): Node {
        return (this._node ??= new Node(this._options));
    }

    /**
     * Returns all entity types for a project.
     *
     * @param {Graph.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Zep.NotFoundError}
     * @throws {@link Zep.InternalServerError}
     *
     * @example
     *     await client.graph.listEntityTypes()
     */
    public async listEntityTypes(requestOptions?: Graph.RequestOptions): Promise<Zep.EntityTypeResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ZepEnvironment.Default,
                "entity-types",
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "zep-cloud",
                "X-Fern-SDK-Version": "2.8.0",
                "User-Agent": "zep-cloud/2.8.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.EntityTypeResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new Zep.NotFoundError(
                        serializers.ApiError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
                case 500:
                    throw new Zep.InternalServerError(
                        serializers.ApiError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
                default:
                    throw new errors.ZepError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ZepError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ZepTimeoutError("Timeout exceeded when calling GET /entity-types.");
            case "unknown":
                throw new errors.ZepError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Sets the entity types for a project, replacing any existing ones.
     *
     * @param {Zep.ApidataEntityTypeRequest} request
     * @param {Graph.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Zep.BadRequestError}
     * @throws {@link Zep.InternalServerError}
     *
     * @example
     *     await client.graph.setEntityTypesInternal({
     *         entityTypes: [{
     *                 name: "name"
     *             }]
     *     })
     */
    public async setEntityTypesInternal(
        request: Zep.ApidataEntityTypeRequest,
        requestOptions?: Graph.RequestOptions,
    ): Promise<Zep.SuccessResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ZepEnvironment.Default,
                "entity-types",
            ),
            method: "PUT",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "zep-cloud",
                "X-Fern-SDK-Version": "2.8.0",
                "User-Agent": "zep-cloud/2.8.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.ApidataEntityTypeRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.SuccessResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Zep.BadRequestError(
                        serializers.ApiError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
                case 500:
                    throw new Zep.InternalServerError(
                        serializers.ApiError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
                default:
                    throw new errors.ZepError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ZepError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ZepTimeoutError("Timeout exceeded when calling PUT /entity-types.");
            case "unknown":
                throw new errors.ZepError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Add data to the graph. Note: each subscription tier has different limits on the amount of data that can be added to the graph please refer to the pricing page for more information.
     *
     * @param {Zep.AddDataRequest} request
     * @param {Graph.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Zep.BadRequestError}
     * @throws {@link Zep.InternalServerError}
     *
     * @example
     *     await client.graph.add()
     */
    public async add(request: Zep.AddDataRequest = {}, requestOptions?: Graph.RequestOptions): Promise<Zep.Episode> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ZepEnvironment.Default,
                "graph",
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "zep-cloud",
                "X-Fern-SDK-Version": "2.8.0",
                "User-Agent": "zep-cloud/2.8.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.AddDataRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.Episode.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Zep.BadRequestError(
                        serializers.ApiError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
                case 500:
                    throw new Zep.InternalServerError(
                        serializers.ApiError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
                default:
                    throw new errors.ZepError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ZepError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ZepTimeoutError("Timeout exceeded when calling POST /graph.");
            case "unknown":
                throw new errors.ZepError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Add a fact triple for a user or group
     *
     * @param {Zep.AddTripleRequest} request
     * @param {Graph.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Zep.BadRequestError}
     * @throws {@link Zep.InternalServerError}
     *
     * @example
     *     await client.graph.addFactTriple({
     *         fact: "fact",
     *         factName: "fact_name",
     *         targetNodeName: "target_node_name"
     *     })
     */
    public async addFactTriple(
        request: Zep.AddTripleRequest,
        requestOptions?: Graph.RequestOptions,
    ): Promise<Zep.AddTripleResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ZepEnvironment.Default,
                "graph/add-fact-triple",
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "zep-cloud",
                "X-Fern-SDK-Version": "2.8.0",
                "User-Agent": "zep-cloud/2.8.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.AddTripleRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.AddTripleResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Zep.BadRequestError(
                        serializers.ApiError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
                case 500:
                    throw new Zep.InternalServerError(
                        serializers.ApiError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
                default:
                    throw new errors.ZepError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ZepError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ZepTimeoutError("Timeout exceeded when calling POST /graph/add-fact-triple.");
            case "unknown":
                throw new errors.ZepError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Perform a graph search query.
     *
     * @param {Zep.GraphSearchQuery} request
     * @param {Graph.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Zep.BadRequestError}
     * @throws {@link Zep.InternalServerError}
     *
     * @example
     *     await client.graph.search({
     *         query: "query"
     *     })
     */
    public async search(
        request: Zep.GraphSearchQuery,
        requestOptions?: Graph.RequestOptions,
    ): Promise<Zep.GraphSearchResults> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ZepEnvironment.Default,
                "graph/search",
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "zep-cloud",
                "X-Fern-SDK-Version": "2.8.0",
                "User-Agent": "zep-cloud/2.8.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.GraphSearchQuery.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.GraphSearchResults.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Zep.BadRequestError(
                        serializers.ApiError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
                case 500:
                    throw new Zep.InternalServerError(
                        serializers.ApiError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
                default:
                    throw new errors.ZepError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ZepError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ZepTimeoutError("Timeout exceeded when calling POST /graph/search.");
            case "unknown":
                throw new errors.ZepError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getCustomAuthorizationHeaders() {
        const apiKeyValue = (await core.Supplier.get(this._options.apiKey)) ?? process?.env["ZEP_API_KEY"];
        return { Authorization: `Api-Key ${apiKeyValue}` };
    }
}
