/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Zep from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace User {
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

export class User {
    constructor(protected readonly _options: User.Options = {}) {}

    /**
     * Add a user.
     *
     * @param {Zep.CreateUserRequest} request
     * @param {User.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Zep.BadRequestError}
     * @throws {@link Zep.InternalServerError}
     *
     * @example
     *     await client.user.add()
     */
    public async add(request: Zep.CreateUserRequest = {}, requestOptions?: User.RequestOptions): Promise<Zep.User> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ZepEnvironment.Default,
                "users",
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "zep-cloud",
                "X-Fern-SDK-Version": "2.3.1",
                "User-Agent": "zep-cloud/2.3.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.CreateUserRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.User.parseOrThrow(_response.body, {
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
                throw new errors.ZepTimeoutError("Timeout exceeded when calling POST /users.");
            case "unknown":
                throw new errors.ZepError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * List all users with pagination.
     *
     * @param {Zep.UserListOrderedRequest} request
     * @param {User.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Zep.BadRequestError}
     * @throws {@link Zep.InternalServerError}
     *
     * @example
     *     await client.user.listOrdered()
     */
    public async listOrdered(
        request: Zep.UserListOrderedRequest = {},
        requestOptions?: User.RequestOptions,
    ): Promise<Zep.UserListResponse> {
        const { pageNumber, pageSize } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (pageNumber != null) {
            _queryParams["pageNumber"] = pageNumber.toString();
        }

        if (pageSize != null) {
            _queryParams["pageSize"] = pageSize.toString();
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ZepEnvironment.Default,
                "users-ordered",
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "zep-cloud",
                "X-Fern-SDK-Version": "2.3.1",
                "User-Agent": "zep-cloud/2.3.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.UserListResponse.parseOrThrow(_response.body, {
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
                throw new errors.ZepTimeoutError("Timeout exceeded when calling GET /users-ordered.");
            case "unknown":
                throw new errors.ZepError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get a user.
     *
     * @param {string} userId - The user_id of the user to get.
     * @param {User.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Zep.NotFoundError}
     * @throws {@link Zep.InternalServerError}
     *
     * @example
     *     await client.user.get("userId")
     */
    public async get(userId: string, requestOptions?: User.RequestOptions): Promise<Zep.User> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ZepEnvironment.Default,
                `users/${encodeURIComponent(userId)}`,
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "zep-cloud",
                "X-Fern-SDK-Version": "2.3.1",
                "User-Agent": "zep-cloud/2.3.1",
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
            return serializers.User.parseOrThrow(_response.body, {
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
                throw new errors.ZepTimeoutError("Timeout exceeded when calling GET /users/{userId}.");
            case "unknown":
                throw new errors.ZepError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * delete user by id
     *
     * @param {string} userId - User ID
     * @param {User.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Zep.NotFoundError}
     * @throws {@link Zep.InternalServerError}
     *
     * @example
     *     await client.user.delete("userId")
     */
    public async delete(userId: string, requestOptions?: User.RequestOptions): Promise<Zep.SuccessResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ZepEnvironment.Default,
                `users/${encodeURIComponent(userId)}`,
            ),
            method: "DELETE",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "zep-cloud",
                "X-Fern-SDK-Version": "2.3.1",
                "User-Agent": "zep-cloud/2.3.1",
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
                throw new errors.ZepTimeoutError("Timeout exceeded when calling DELETE /users/{userId}.");
            case "unknown":
                throw new errors.ZepError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Update a user.
     *
     * @param {string} userId - User ID
     * @param {Zep.UpdateUserRequest} request
     * @param {User.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Zep.BadRequestError}
     * @throws {@link Zep.NotFoundError}
     * @throws {@link Zep.InternalServerError}
     *
     * @example
     *     await client.user.update("userId")
     */
    public async update(
        userId: string,
        request: Zep.UpdateUserRequest = {},
        requestOptions?: User.RequestOptions,
    ): Promise<Zep.User> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ZepEnvironment.Default,
                `users/${encodeURIComponent(userId)}`,
            ),
            method: "PATCH",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "zep-cloud",
                "X-Fern-SDK-Version": "2.3.1",
                "User-Agent": "zep-cloud/2.3.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.UpdateUserRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.User.parseOrThrow(_response.body, {
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
                throw new errors.ZepTimeoutError("Timeout exceeded when calling PATCH /users/{userId}.");
            case "unknown":
                throw new errors.ZepError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get user facts.
     *
     * @param {string} userId - The user_id of the user to get.
     * @param {User.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Zep.NotFoundError}
     * @throws {@link Zep.InternalServerError}
     *
     * @example
     *     await client.user.getFacts("userId")
     */
    public async getFacts(userId: string, requestOptions?: User.RequestOptions): Promise<Zep.FactsResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ZepEnvironment.Default,
                `users/${encodeURIComponent(userId)}/facts`,
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "zep-cloud",
                "X-Fern-SDK-Version": "2.3.1",
                "User-Agent": "zep-cloud/2.3.1",
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
            return serializers.FactsResponse.parseOrThrow(_response.body, {
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
                throw new errors.ZepTimeoutError("Timeout exceeded when calling GET /users/{userId}/facts.");
            case "unknown":
                throw new errors.ZepError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * list all sessions for a user by user id
     *
     * @param {string} userId - User ID
     * @param {User.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Zep.InternalServerError}
     *
     * @example
     *     await client.user.getSessions("userId")
     */
    public async getSessions(userId: string, requestOptions?: User.RequestOptions): Promise<Zep.Session[]> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ZepEnvironment.Default,
                `users/${encodeURIComponent(userId)}/sessions`,
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "zep-cloud",
                "X-Fern-SDK-Version": "2.3.1",
                "User-Agent": "zep-cloud/2.3.1",
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
            return serializers.user.getSessions.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
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
                throw new errors.ZepTimeoutError("Timeout exceeded when calling GET /users/{userId}/sessions.");
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
