import { Elysia } from "elysia";
declare const app: Elysia<"", {
    decorator: {};
    store: {} | {};
    derive: {
        readonly bearer: string | undefined;
    };
    resolve: {};
}, (((({
    typebox: {};
    error: {};
} & {
    typebox: {};
    error: {};
} & {
    typebox: {};
    error: {};
}) | ({
    typebox: {};
    error: {};
} & {
    typebox: import("@sinclair/typebox").TModule<{}>;
    error: {};
} & {
    typebox: {};
    error: {};
} & {
    typebox: {};
    error: {};
})) & {
    typebox: {};
    error: {
        readonly INTERNAL_ERROR: import("./exceptions").InternalError;
        readonly NOT_FOUND_RESOURCE: import("./exceptions").NotFoundError;
        readonly UNAUTHORIZED: import("./exceptions").AuthorizationError;
    };
}) & {
    typebox: {};
    error: {};
} & {
    typebox: {};
    error: {};
} & {
    typebox: {
        readonly createUserSchema: import("@sinclair/typebox").TObject<{
            username: import("@sinclair/typebox").TString;
            name: import("@sinclair/typebox").TString;
            password: import("@sinclair/typebox").TString;
        }>;
        readonly updateUserSchema: import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            username: import("@sinclair/typebox").TString;
        }>;
        readonly resetPasswordBodySchema: import("@sinclair/typebox").TObject<{
            userId: import("@sinclair/typebox").TString;
        }>;
    };
    error: {};
} & {
    typebox: {
        readonly updatePasswordSchema: import("@sinclair/typebox").TObject<{
            current_password: import("@sinclair/typebox").TString;
            new_password: import("@sinclair/typebox").TString;
        }>;
    };
    error: {};
} & {
    typebox: {};
    error: {};
} & {
    typebox: {
        readonly createFuelVariantSchema: import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
        }>;
        readonly updateFuelVariantSchema: import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
        }>;
    };
    error: {};
} & {
    typebox: {
        readonly driverTransactionQuerySchema: import("@sinclair/typebox").TObject<{
            page: import("@sinclair/typebox").TNumber;
            limit: import("@sinclair/typebox").TNumber;
        }>;
    };
    error: {};
} & {
    typebox: {
        readonly createTransactionSchema: import("@sinclair/typebox").TObject<{
            asset_id: import("@sinclair/typebox").TString;
            fuel_variant_id: import("@sinclair/typebox").TNumber;
            price: import("@sinclair/typebox").TNumber;
            total_transactions: import("@sinclair/typebox").TNumber;
            fill_kilometers: import("@sinclair/typebox").TNumber;
            transaction_time: import("@sinclair/typebox").TString;
            invoice_photo: import("@sinclair/typebox").TUnsafe<File>;
            station_photo: import("@sinclair/typebox").TUnsafe<File>;
            odometer_photo: import("@sinclair/typebox").TUnsafe<File>;
        }>;
        readonly transactionQuerySchema: import("@sinclair/typebox").TObject<{
            page: import("@sinclair/typebox").TNumber;
            limit: import("@sinclair/typebox").TNumber;
        }>;
    };
    error: {};
}) & {
    typebox: {};
    error: {};
} & {
    typebox: {};
    error: {};
}, ({
    schema: {};
    standaloneSchema: {};
    macro: {};
    macroFn: {};
    parser: {};
    response: {};
} & {
    schema: {};
    standaloneSchema: {};
    macro: {};
    macroFn: {};
    parser: {};
    response: {};
} & {
    schema: {};
    standaloneSchema: {};
    macro: {};
    macroFn: {};
    parser: {};
    response: {};
} & {
    schema: {};
    standaloneSchema: {};
    macro: {};
    macroFn: {};
    parser: {};
    response: {
        [x: number]: {
            status: string;
            message: string;
        };
        422: {
            readonly status: "failed";
            readonly message: "Validation failed";
            readonly errors: ({
                property: string | undefined;
                message: string;
            } | null)[];
        };
    };
} & {
    schema: {};
    standaloneSchema: {};
    macro: Partial<{
        readonly auth: boolean;
    }>;
    macroFn: {
        readonly auth: {
            readonly resolve: ({ bearer }: {
                body: unknown;
                query: Record<string, string>;
                params: {};
                headers: Record<string, string | undefined>;
                cookie: Record<string, import("elysia").Cookie<unknown>>;
                server: import("elysia/dist/universal/server").Server | null;
                redirect: import("elysia").redirect;
                set: {
                    headers: import("elysia").HTTPHeaders;
                    status?: number | keyof import("elysia").StatusMap;
                    redirect?: string;
                    cookie?: Record<string, import("elysia/dist/cookies").ElysiaCookie>;
                };
                path: string;
                route: string;
                request: Request;
                store: {};
                status: <const Code extends number | keyof import("elysia").StatusMap, const T = Code extends 200 | 401 | 100 | 101 | 102 | 103 | 201 | 202 | 203 | 204 | 205 | 206 | 207 | 208 | 300 | 301 | 302 | 303 | 304 | 307 | 308 | 400 | 402 | 403 | 404 | 405 | 406 | 407 | 408 | 409 | 410 | 411 | 412 | 413 | 414 | 415 | 416 | 417 | 418 | 420 | 421 | 422 | 423 | 424 | 425 | 426 | 428 | 429 | 431 | 451 | 500 | 501 | 502 | 503 | 504 | 505 | 506 | 507 | 508 | 510 | 511 ? {
                    readonly 100: "Continue";
                    readonly 101: "Switching Protocols";
                    readonly 102: "Processing";
                    readonly 103: "Early Hints";
                    readonly 200: "OK";
                    readonly 201: "Created";
                    readonly 202: "Accepted";
                    readonly 203: "Non-Authoritative Information";
                    readonly 204: "No Content";
                    readonly 205: "Reset Content";
                    readonly 206: "Partial Content";
                    readonly 207: "Multi-Status";
                    readonly 208: "Already Reported";
                    readonly 300: "Multiple Choices";
                    readonly 301: "Moved Permanently";
                    readonly 302: "Found";
                    readonly 303: "See Other";
                    readonly 304: "Not Modified";
                    readonly 307: "Temporary Redirect";
                    readonly 308: "Permanent Redirect";
                    readonly 400: "Bad Request";
                    readonly 401: "Unauthorized";
                    readonly 402: "Payment Required";
                    readonly 403: "Forbidden";
                    readonly 404: "Not Found";
                    readonly 405: "Method Not Allowed";
                    readonly 406: "Not Acceptable";
                    readonly 407: "Proxy Authentication Required";
                    readonly 408: "Request Timeout";
                    readonly 409: "Conflict";
                    readonly 410: "Gone";
                    readonly 411: "Length Required";
                    readonly 412: "Precondition Failed";
                    readonly 413: "Payload Too Large";
                    readonly 414: "URI Too Long";
                    readonly 415: "Unsupported Media Type";
                    readonly 416: "Range Not Satisfiable";
                    readonly 417: "Expectation Failed";
                    readonly 418: "I'm a teapot";
                    readonly 420: "Enhance Your Calm";
                    readonly 421: "Misdirected Request";
                    readonly 422: "Unprocessable Content";
                    readonly 423: "Locked";
                    readonly 424: "Failed Dependency";
                    readonly 425: "Too Early";
                    readonly 426: "Upgrade Required";
                    readonly 428: "Precondition Required";
                    readonly 429: "Too Many Requests";
                    readonly 431: "Request Header Fields Too Large";
                    readonly 451: "Unavailable For Legal Reasons";
                    readonly 500: "Internal Server Error";
                    readonly 501: "Not Implemented";
                    readonly 502: "Bad Gateway";
                    readonly 503: "Service Unavailable";
                    readonly 504: "Gateway Timeout";
                    readonly 505: "HTTP Version Not Supported";
                    readonly 506: "Variant Also Negotiates";
                    readonly 507: "Insufficient Storage";
                    readonly 508: "Loop Detected";
                    readonly 510: "Not Extended";
                    readonly 511: "Network Authentication Required";
                }[Code] : Code>(code: Code, response?: T) => import("elysia").ElysiaCustomStatusResponse<Code, T, Code extends "Continue" | "Switching Protocols" | "Processing" | "Early Hints" | "OK" | "Created" | "Accepted" | "Non-Authoritative Information" | "No Content" | "Reset Content" | "Partial Content" | "Multi-Status" | "Already Reported" | "Multiple Choices" | "Moved Permanently" | "Found" | "See Other" | "Not Modified" | "Temporary Redirect" | "Permanent Redirect" | "Bad Request" | "Unauthorized" | "Payment Required" | "Forbidden" | "Not Found" | "Method Not Allowed" | "Not Acceptable" | "Proxy Authentication Required" | "Request Timeout" | "Conflict" | "Gone" | "Length Required" | "Precondition Failed" | "Payload Too Large" | "URI Too Long" | "Unsupported Media Type" | "Range Not Satisfiable" | "Expectation Failed" | "I'm a teapot" | "Enhance Your Calm" | "Misdirected Request" | "Unprocessable Content" | "Locked" | "Failed Dependency" | "Too Early" | "Upgrade Required" | "Precondition Required" | "Too Many Requests" | "Request Header Fields Too Large" | "Unavailable For Legal Reasons" | "Internal Server Error" | "Not Implemented" | "Bad Gateway" | "Service Unavailable" | "Gateway Timeout" | "HTTP Version Not Supported" | "Variant Also Negotiates" | "Insufficient Storage" | "Loop Detected" | "Not Extended" | "Network Authentication Required" ? {
                    readonly Continue: 100;
                    readonly "Switching Protocols": 101;
                    readonly Processing: 102;
                    readonly "Early Hints": 103;
                    readonly OK: 200;
                    readonly Created: 201;
                    readonly Accepted: 202;
                    readonly "Non-Authoritative Information": 203;
                    readonly "No Content": 204;
                    readonly "Reset Content": 205;
                    readonly "Partial Content": 206;
                    readonly "Multi-Status": 207;
                    readonly "Already Reported": 208;
                    readonly "Multiple Choices": 300;
                    readonly "Moved Permanently": 301;
                    readonly Found: 302;
                    readonly "See Other": 303;
                    readonly "Not Modified": 304;
                    readonly "Temporary Redirect": 307;
                    readonly "Permanent Redirect": 308;
                    readonly "Bad Request": 400;
                    readonly Unauthorized: 401;
                    readonly "Payment Required": 402;
                    readonly Forbidden: 403;
                    readonly "Not Found": 404;
                    readonly "Method Not Allowed": 405;
                    readonly "Not Acceptable": 406;
                    readonly "Proxy Authentication Required": 407;
                    readonly "Request Timeout": 408;
                    readonly Conflict: 409;
                    readonly Gone: 410;
                    readonly "Length Required": 411;
                    readonly "Precondition Failed": 412;
                    readonly "Payload Too Large": 413;
                    readonly "URI Too Long": 414;
                    readonly "Unsupported Media Type": 415;
                    readonly "Range Not Satisfiable": 416;
                    readonly "Expectation Failed": 417;
                    readonly "I'm a teapot": 418;
                    readonly "Enhance Your Calm": 420;
                    readonly "Misdirected Request": 421;
                    readonly "Unprocessable Content": 422;
                    readonly Locked: 423;
                    readonly "Failed Dependency": 424;
                    readonly "Too Early": 425;
                    readonly "Upgrade Required": 426;
                    readonly "Precondition Required": 428;
                    readonly "Too Many Requests": 429;
                    readonly "Request Header Fields Too Large": 431;
                    readonly "Unavailable For Legal Reasons": 451;
                    readonly "Internal Server Error": 500;
                    readonly "Not Implemented": 501;
                    readonly "Bad Gateway": 502;
                    readonly "Service Unavailable": 503;
                    readonly "Gateway Timeout": 504;
                    readonly "HTTP Version Not Supported": 505;
                    readonly "Variant Also Negotiates": 506;
                    readonly "Insufficient Storage": 507;
                    readonly "Loop Detected": 508;
                    readonly "Not Extended": 510;
                    readonly "Network Authentication Required": 511;
                }[Code] : Code>;
                readonly bearer: string | undefined;
            }) => Promise<{
                user: {
                    accessToken: string;
                    uuid: string;
                    username: string;
                    name: string;
                    created_at: string;
                    updated_at: string;
                    status: string;
                    password_changed_at: string | null;
                };
            }>;
        };
    };
    parser: {};
    response: import("elysia").ExtractErrorFromHandle<{
        readonly bearer: string | undefined;
    }>;
}) | ({
    schema: {};
    standaloneSchema: {};
    macro: {};
    macroFn: {};
    parser: {};
    response: {};
} & {
    schema: {};
    macro: {};
    macroFn: {};
    parser: {};
} & {
    schema: {};
    standaloneSchema: {};
    macro: {};
    macroFn: {};
    parser: {};
    response: {};
} & {
    schema: {};
    standaloneSchema: {};
    macro: {};
    macroFn: {};
    parser: {};
    response: {};
} & {
    schema: {};
    standaloneSchema: {};
    macro: {};
    macroFn: {};
    parser: {};
    response: {
        [x: number]: {
            status: string;
            message: string;
        };
        422: {
            readonly status: "failed";
            readonly message: "Validation failed";
            readonly errors: ({
                property: string | undefined;
                message: string;
            } | null)[];
        };
    };
} & {
    schema: {};
    standaloneSchema: {};
    macro: Partial<{
        readonly auth: boolean;
    }>;
    macroFn: {
        readonly auth: {
            readonly resolve: ({ bearer }: {
                body: unknown;
                query: Record<string, string>;
                params: {};
                headers: Record<string, string | undefined>;
                cookie: Record<string, import("elysia").Cookie<unknown>>;
                server: import("elysia/dist/universal/server").Server | null;
                redirect: import("elysia").redirect;
                set: {
                    headers: import("elysia").HTTPHeaders;
                    status?: number | keyof import("elysia").StatusMap;
                    redirect?: string;
                    cookie?: Record<string, import("elysia/dist/cookies").ElysiaCookie>;
                };
                path: string;
                route: string;
                request: Request;
                store: {};
                status: <const Code extends number | keyof import("elysia").StatusMap, const T = Code extends 200 | 401 | 100 | 101 | 102 | 103 | 201 | 202 | 203 | 204 | 205 | 206 | 207 | 208 | 300 | 301 | 302 | 303 | 304 | 307 | 308 | 400 | 402 | 403 | 404 | 405 | 406 | 407 | 408 | 409 | 410 | 411 | 412 | 413 | 414 | 415 | 416 | 417 | 418 | 420 | 421 | 422 | 423 | 424 | 425 | 426 | 428 | 429 | 431 | 451 | 500 | 501 | 502 | 503 | 504 | 505 | 506 | 507 | 508 | 510 | 511 ? {
                    readonly 100: "Continue";
                    readonly 101: "Switching Protocols";
                    readonly 102: "Processing";
                    readonly 103: "Early Hints";
                    readonly 200: "OK";
                    readonly 201: "Created";
                    readonly 202: "Accepted";
                    readonly 203: "Non-Authoritative Information";
                    readonly 204: "No Content";
                    readonly 205: "Reset Content";
                    readonly 206: "Partial Content";
                    readonly 207: "Multi-Status";
                    readonly 208: "Already Reported";
                    readonly 300: "Multiple Choices";
                    readonly 301: "Moved Permanently";
                    readonly 302: "Found";
                    readonly 303: "See Other";
                    readonly 304: "Not Modified";
                    readonly 307: "Temporary Redirect";
                    readonly 308: "Permanent Redirect";
                    readonly 400: "Bad Request";
                    readonly 401: "Unauthorized";
                    readonly 402: "Payment Required";
                    readonly 403: "Forbidden";
                    readonly 404: "Not Found";
                    readonly 405: "Method Not Allowed";
                    readonly 406: "Not Acceptable";
                    readonly 407: "Proxy Authentication Required";
                    readonly 408: "Request Timeout";
                    readonly 409: "Conflict";
                    readonly 410: "Gone";
                    readonly 411: "Length Required";
                    readonly 412: "Precondition Failed";
                    readonly 413: "Payload Too Large";
                    readonly 414: "URI Too Long";
                    readonly 415: "Unsupported Media Type";
                    readonly 416: "Range Not Satisfiable";
                    readonly 417: "Expectation Failed";
                    readonly 418: "I'm a teapot";
                    readonly 420: "Enhance Your Calm";
                    readonly 421: "Misdirected Request";
                    readonly 422: "Unprocessable Content";
                    readonly 423: "Locked";
                    readonly 424: "Failed Dependency";
                    readonly 425: "Too Early";
                    readonly 426: "Upgrade Required";
                    readonly 428: "Precondition Required";
                    readonly 429: "Too Many Requests";
                    readonly 431: "Request Header Fields Too Large";
                    readonly 451: "Unavailable For Legal Reasons";
                    readonly 500: "Internal Server Error";
                    readonly 501: "Not Implemented";
                    readonly 502: "Bad Gateway";
                    readonly 503: "Service Unavailable";
                    readonly 504: "Gateway Timeout";
                    readonly 505: "HTTP Version Not Supported";
                    readonly 506: "Variant Also Negotiates";
                    readonly 507: "Insufficient Storage";
                    readonly 508: "Loop Detected";
                    readonly 510: "Not Extended";
                    readonly 511: "Network Authentication Required";
                }[Code] : Code>(code: Code, response?: T) => import("elysia").ElysiaCustomStatusResponse<Code, T, Code extends "Continue" | "Switching Protocols" | "Processing" | "Early Hints" | "OK" | "Created" | "Accepted" | "Non-Authoritative Information" | "No Content" | "Reset Content" | "Partial Content" | "Multi-Status" | "Already Reported" | "Multiple Choices" | "Moved Permanently" | "Found" | "See Other" | "Not Modified" | "Temporary Redirect" | "Permanent Redirect" | "Bad Request" | "Unauthorized" | "Payment Required" | "Forbidden" | "Not Found" | "Method Not Allowed" | "Not Acceptable" | "Proxy Authentication Required" | "Request Timeout" | "Conflict" | "Gone" | "Length Required" | "Precondition Failed" | "Payload Too Large" | "URI Too Long" | "Unsupported Media Type" | "Range Not Satisfiable" | "Expectation Failed" | "I'm a teapot" | "Enhance Your Calm" | "Misdirected Request" | "Unprocessable Content" | "Locked" | "Failed Dependency" | "Too Early" | "Upgrade Required" | "Precondition Required" | "Too Many Requests" | "Request Header Fields Too Large" | "Unavailable For Legal Reasons" | "Internal Server Error" | "Not Implemented" | "Bad Gateway" | "Service Unavailable" | "Gateway Timeout" | "HTTP Version Not Supported" | "Variant Also Negotiates" | "Insufficient Storage" | "Loop Detected" | "Not Extended" | "Network Authentication Required" ? {
                    readonly Continue: 100;
                    readonly "Switching Protocols": 101;
                    readonly Processing: 102;
                    readonly "Early Hints": 103;
                    readonly OK: 200;
                    readonly Created: 201;
                    readonly Accepted: 202;
                    readonly "Non-Authoritative Information": 203;
                    readonly "No Content": 204;
                    readonly "Reset Content": 205;
                    readonly "Partial Content": 206;
                    readonly "Multi-Status": 207;
                    readonly "Already Reported": 208;
                    readonly "Multiple Choices": 300;
                    readonly "Moved Permanently": 301;
                    readonly Found: 302;
                    readonly "See Other": 303;
                    readonly "Not Modified": 304;
                    readonly "Temporary Redirect": 307;
                    readonly "Permanent Redirect": 308;
                    readonly "Bad Request": 400;
                    readonly Unauthorized: 401;
                    readonly "Payment Required": 402;
                    readonly Forbidden: 403;
                    readonly "Not Found": 404;
                    readonly "Method Not Allowed": 405;
                    readonly "Not Acceptable": 406;
                    readonly "Proxy Authentication Required": 407;
                    readonly "Request Timeout": 408;
                    readonly Conflict: 409;
                    readonly Gone: 410;
                    readonly "Length Required": 411;
                    readonly "Precondition Failed": 412;
                    readonly "Payload Too Large": 413;
                    readonly "URI Too Long": 414;
                    readonly "Unsupported Media Type": 415;
                    readonly "Range Not Satisfiable": 416;
                    readonly "Expectation Failed": 417;
                    readonly "I'm a teapot": 418;
                    readonly "Enhance Your Calm": 420;
                    readonly "Misdirected Request": 421;
                    readonly "Unprocessable Content": 422;
                    readonly Locked: 423;
                    readonly "Failed Dependency": 424;
                    readonly "Too Early": 425;
                    readonly "Upgrade Required": 426;
                    readonly "Precondition Required": 428;
                    readonly "Too Many Requests": 429;
                    readonly "Request Header Fields Too Large": 431;
                    readonly "Unavailable For Legal Reasons": 451;
                    readonly "Internal Server Error": 500;
                    readonly "Not Implemented": 501;
                    readonly "Bad Gateway": 502;
                    readonly "Service Unavailable": 503;
                    readonly "Gateway Timeout": 504;
                    readonly "HTTP Version Not Supported": 505;
                    readonly "Variant Also Negotiates": 506;
                    readonly "Insufficient Storage": 507;
                    readonly "Loop Detected": 508;
                    readonly "Not Extended": 510;
                    readonly "Network Authentication Required": 511;
                }[Code] : Code>;
                readonly bearer: string | undefined;
            }) => Promise<{
                user: {
                    accessToken: string;
                    uuid: string;
                    username: string;
                    name: string;
                    created_at: string;
                    updated_at: string;
                    status: string;
                    password_changed_at: string | null;
                };
            }>;
        };
    };
    parser: {};
    response: import("elysia").ExtractErrorFromHandle<{
        readonly bearer: string | undefined;
    }>;
}), (({} | {
    [x: string]: {
        get: {
            body: unknown;
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                200: string;
            };
        };
    };
}) & {
    api: {
        dealers: {};
    } & {
        dealers: {
            get: {
                body: {};
                params: {};
                query: {};
                headers: {};
                response: {
                    200: {
                        data: {
                            dealers: {
                                name: string;
                                code: string;
                                id: string;
                                area_id: number;
                                area_name: string;
                            }[];
                        };
                        status: string;
                        message: string;
                    };
                    401: {
                        status: "failed";
                        message: "Unauthorized";
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                    500: {
                        status: "failed";
                        message: string;
                    };
                };
            };
        };
    } & {
        dealers: {
            ":dealerId": {
                get: {
                    body: {};
                    params: {
                        dealerId: string;
                    };
                    query: {};
                    headers: {};
                    response: {
                        200: {
                            data: {
                                dealer: {
                                    name: string;
                                    code: string;
                                    id: string;
                                    area: string;
                                };
                            };
                            status: string;
                            message: string;
                        };
                        401: {
                            status: "failed";
                            message: "Unauthorized";
                        };
                        404: {
                            status: "failed";
                            message: string;
                        };
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                        500: {
                            status: "failed";
                            message: string;
                        };
                    };
                };
            };
        };
    } & {
        dealers: {
            ":dealerId": {
                transactions: {
                    get: {
                        body: {};
                        params: {
                            dealerId: string;
                        };
                        query: {};
                        headers: {};
                        response: {
                            200: {
                                data: {
                                    transactions: {
                                        id: string;
                                        transactionTime: string;
                                        driverName: string;
                                        licensePlate: string | null;
                                        modelName: string | null;
                                        productVariant: string;
                                        transactionTotal: number;
                                        pricePerLitre: number;
                                        litrePurchased: number;
                                        previousKilometer: number | null;
                                        currentKilometer: number | null;
                                        distanceCovered: number | null;
                                        kiloMeterPerLitre: number | null;
                                    }[];
                                };
                                status: string;
                                message: string;
                            };
                            401: {
                                status: "failed";
                                message: "Unauthorized";
                            };
                            404: {
                                status: "failed";
                                message: string;
                            };
                            422: {
                                type: "validation";
                                on: string;
                                summary?: string;
                                message?: string;
                                found?: unknown;
                                property?: string;
                                expected?: string;
                            };
                            500: {
                                status: "failed";
                                message: string;
                            };
                        };
                    };
                };
            };
        };
    } & {
        dealers: {
            ":dealerId": {
                assets: {
                    get: {
                        body: {};
                        params: {
                            dealerId: string;
                        };
                        query: {};
                        headers: {};
                        response: {
                            200: {
                                data: {
                                    assets: {
                                        id: string;
                                        driverName: string | null;
                                        licensePlate: string | null;
                                        modelName: string | null;
                                        assetYear: number | null;
                                        totalKiloMeter: number;
                                        totalLiter: number;
                                        averageKilometerPerLitre: number;
                                    }[];
                                };
                                status: string;
                                message: string;
                            };
                            401: {
                                status: "failed";
                                message: "Unauthorized";
                            };
                            404: {
                                status: "failed";
                                message: string;
                            };
                            422: {
                                type: "validation";
                                on: string;
                                summary?: string;
                                message?: string;
                                found?: unknown;
                                property?: string;
                                expected?: string;
                            };
                            500: {
                                status: "failed";
                                message: string;
                            };
                        };
                    };
                };
            };
        };
    } & {
        dealers: {
            ":dealerId": {
                assets: {
                    post: {
                        body: {
                            status?: "neq" | "mds" | "sewa" | undefined;
                            statusDetail?: string | undefined;
                            model: string;
                            licensePlate: string;
                            year: number;
                            fuelType: "bensin" | "solar";
                            startingKiloMeter: number;
                        };
                        params: {
                            dealerId: string;
                        };
                        query: {};
                        headers: {};
                        response: {
                            401: {
                                status: "failed";
                                message: "Unauthorized";
                            };
                            201: {
                                data: {
                                    assetId: string;
                                };
                                status: string;
                                message: string;
                            };
                            404: {
                                status: "failed";
                                message: string;
                            };
                            422: {
                                type: "validation";
                                on: string;
                                summary?: string;
                                message?: string;
                                found?: unknown;
                                property?: string;
                                expected?: string;
                            };
                            500: {
                                status: "failed";
                                message: string;
                            };
                        };
                    };
                };
            };
        };
    } & {
        dealers: {
            ":dealerId": {
                assets: {
                    patch: {
                        body: {
                            driverId: string;
                            assetId: string;
                        };
                        params: {
                            dealerId: string;
                        };
                        query: {};
                        headers: {};
                        response: {
                            200: {
                                data: {
                                    driverId: string;
                                    assetId: string;
                                };
                                status: string;
                                message: string;
                            };
                            401: {
                                status: "failed";
                                message: "Unauthorized";
                            };
                            404: {
                                status: "failed";
                                message: string;
                            };
                            422: {
                                type: "validation";
                                on: string;
                                summary?: string;
                                message?: string;
                                found?: unknown;
                                property?: string;
                                expected?: string;
                            };
                            500: {
                                status: "failed";
                                message: string;
                            };
                        };
                    };
                };
            };
        };
    } & {
        dealers: {
            ":dealerId": {
                drivers: {
                    get: {
                        body: {};
                        params: {
                            dealerId: string;
                        };
                        query: {};
                        headers: {};
                        response: {
                            200: {
                                data: {
                                    drivers: {
                                        id: string;
                                        driverName: string;
                                        nip: string;
                                        department: string;
                                        totalAsset: number;
                                    }[];
                                };
                                status: string;
                                message: string;
                            };
                            401: {
                                status: "failed";
                                message: "Unauthorized";
                            };
                            404: {
                                status: "failed";
                                message: string;
                            };
                            422: {
                                type: "validation";
                                on: string;
                                summary?: string;
                                message?: string;
                                found?: unknown;
                                property?: string;
                                expected?: string;
                            };
                            500: {
                                status: "failed";
                                message: string;
                            };
                        };
                    };
                };
            };
        };
    } & {
        dealers: {
            ":dealerId": {
                drivers: {
                    post: {
                        body: {
                            name: string;
                            username: string;
                            password: string;
                            nip: string;
                            department: string;
                        };
                        params: {
                            dealerId: string;
                        };
                        query: {};
                        headers: {};
                        response: {
                            401: {
                                status: "failed";
                                message: "Unauthorized";
                            };
                            201: {
                                data: {
                                    driverId: string;
                                };
                                status: string;
                                message: string;
                            };
                            404: {
                                status: "failed";
                                message: string;
                            };
                            422: {
                                type: "validation";
                                on: string;
                                summary?: string;
                                message?: string;
                                found?: unknown;
                                property?: string;
                                expected?: string;
                            };
                            500: {
                                status: "failed";
                                message: string;
                            };
                        };
                    };
                };
            };
        };
    };
} & {
    api: {
        users: {};
    } & {
        users: {
            get: {
                body: {};
                params: {};
                query: {};
                headers: {};
                response: {
                    200: {
                        data: {
                            users: {
                                name: string;
                                username: string;
                                uuid: string;
                                created_at: string;
                                updated_at: string;
                                status: string;
                                password_changed_at: string | null;
                            }[];
                        };
                        status: string;
                        message: string;
                    };
                    401: {
                        status: "failed";
                        message: "Unauthorized";
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                    500: {
                        status: "failed";
                        message: string;
                    };
                };
            };
        };
    } & {
        users: {
            create: {
                post: {
                    body: {
                        name: string;
                        username: string;
                        password: string;
                    };
                    params: {};
                    query: {};
                    headers: {};
                    response: {
                        200: {
                            data: {
                                name: string;
                                username: string;
                                uuid: string;
                                created_at: string;
                                updated_at: string;
                            };
                            status: string;
                            message: string;
                        };
                        401: {
                            status: "failed";
                            message: "Unauthorized";
                        };
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                        500: {
                            status: "failed";
                            message: string;
                        };
                    };
                };
            };
        };
    } & {
        users: {
            resetpassword: {
                post: {
                    body: {
                        userId: string;
                    };
                    params: {};
                    query: {};
                    headers: {};
                    response: {
                        200: {
                            data: {
                                userId: string;
                            };
                            status: string;
                            message: string;
                        };
                        401: {
                            status: "failed";
                            message: "Unauthorized";
                        };
                        404: {
                            status: "failed";
                            message: string;
                        };
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                        500: {
                            status: "failed";
                            message: string;
                        };
                    };
                };
            };
        };
    } & {
        users: {
            ":userId": {
                get: {
                    body: {};
                    params: {
                        userId: string;
                    };
                    query: {};
                    headers: {};
                    response: {
                        200: {
                            data: {
                                user: {
                                    name: string;
                                    username: string;
                                    uuid: string;
                                    created_at: string;
                                    updated_at: string;
                                    status: string;
                                    password_changed_at: string | null;
                                };
                            };
                            status: string;
                            message: string;
                        };
                        401: {
                            status: "failed";
                            message: "Unauthorized";
                        };
                        404: {
                            status: "failed";
                            message: string;
                        };
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                        500: {
                            status: "failed";
                            message: string;
                        };
                    };
                };
            };
        };
    } & {
        users: {
            ":userId": {
                update: {
                    patch: {
                        body: {
                            name: string;
                            username: string;
                        };
                        params: {
                            userId: string;
                        };
                        query: {};
                        headers: {};
                        response: {
                            200: {
                                data: {
                                    name: string;
                                    username: string;
                                    uuid: string;
                                    created_at: string;
                                    updated_at: string;
                                    status: string;
                                    password_changed_at: string | null;
                                };
                                status: string;
                                message: string;
                            };
                            401: {
                                status: "failed";
                                message: "Unauthorized";
                            };
                            404: {
                                status: "failed";
                                message: string;
                            };
                            422: {
                                type: "validation";
                                on: string;
                                summary?: string;
                                message?: string;
                                found?: unknown;
                                property?: string;
                                expected?: string;
                            };
                            500: {
                                status: "failed";
                                message: string;
                            };
                        };
                    };
                };
            };
        };
    };
} & {
    api: {
        permissions: {};
    } & {
        permissions: {
            get: {
                body: {};
                params: {};
                query: {};
                headers: {};
                response: {
                    200: {
                        data: {
                            permissions: {
                                name: string;
                                id: number;
                            }[];
                        };
                        status: string;
                        message: string;
                    };
                    401: {
                        status: "failed";
                        message: "Unauthorized";
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                    500: {
                        status: "failed";
                        message: string;
                    };
                };
            };
        };
    } & {
        permissions: {
            post: {
                body: {
                    permission: string;
                };
                params: {};
                query: {};
                headers: {};
                response: {
                    401: {
                        status: "failed";
                        message: "Unauthorized";
                    };
                    201: {
                        data: {
                            id: number;
                        };
                        status: string;
                        message: string;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                    500: {
                        status: "failed";
                        message: string;
                    };
                };
            };
        };
    };
} & {
    api: {
        account: {};
    } & {
        account: {
            patch: {
                body: {
                    new_password: string;
                    current_password: string;
                };
                params: {};
                query: {};
                headers: {};
                response: {
                    200: {
                        status: "success";
                        message: "Password updated";
                    };
                    422: {
                        status: "failed";
                        message: "New password must be different from old password";
                    };
                };
            };
        };
    };
} & {
    api: {
        drivers: {};
    } & {
        drivers: {
            get: {
                body: {};
                params: {};
                query: {};
                headers: {};
                response: {
                    200: {
                        data: {
                            drivers: {
                                name: string | null;
                                id: string;
                                area: string | null;
                                nip: string | null;
                                department: string | null;
                                dealer_name: string | null;
                                total_asset_handled: number;
                            }[];
                        };
                        status: string;
                        message: string;
                    };
                    401: {
                        status: "failed";
                        message: "Unauthorized";
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                    500: {
                        status: "failed";
                        message: string;
                    };
                };
            };
        };
    };
} & {
    api: {
        "fuel-variants": {};
    } & {
        "fuel-variants": {
            get: {
                body: {};
                params: {};
                query: {};
                headers: {};
                response: {
                    200: {
                        data: {
                            fuelVariants: {
                                name: string;
                                id: number;
                            }[];
                        };
                        status: string;
                        message: string;
                    };
                    401: {
                        status: "failed";
                        message: "Unauthorized";
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                    500: {
                        status: "failed";
                        message: string;
                    };
                };
            };
        };
    } & {
        "fuel-variants": {
            ":id": {
                get: {
                    body: {};
                    params: {
                        id: number;
                    };
                    query: {};
                    headers: {};
                    response: {
                        200: {
                            data: {
                                name: string;
                                id: number;
                            };
                            status: string;
                            message: string;
                        };
                        401: {
                            status: "failed";
                            message: "Unauthorized";
                        };
                        404: {
                            status: "failed";
                            message: string;
                        };
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                        500: {
                            status: "failed";
                            message: string;
                        };
                    };
                };
            };
        };
    } & {
        "fuel-variants": {
            post: {
                body: {
                    name: string;
                };
                params: {};
                query: {};
                headers: {};
                response: {
                    401: {
                        status: "failed";
                        message: "Unauthorized";
                    };
                    201: {
                        data: {
                            name: string;
                            id: number;
                        };
                        status: string;
                        message: string;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                    500: {
                        status: "failed";
                        message: string;
                    };
                };
            };
        };
    } & {
        "fuel-variants": {
            ":id": {
                patch: {
                    body: {
                        name: string;
                    };
                    params: {
                        id: number;
                    };
                    query: {};
                    headers: {};
                    response: {
                        200: {
                            data: {
                                name: string;
                                id: number;
                            };
                            status: string;
                            message: string;
                        };
                        401: {
                            status: "failed";
                            message: "Unauthorized";
                        };
                        404: {
                            status: "failed";
                            message: string;
                        };
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                        500: {
                            status: "failed";
                            message: string;
                        };
                    };
                };
            };
        };
    } & {
        "fuel-variants": {
            ":id": {
                delete: {
                    body: {};
                    params: {
                        id: number;
                    };
                    query: {};
                    headers: {};
                    response: {
                        200: {
                            data: {
                                id: number;
                            };
                            status: string;
                            message: string;
                        };
                        401: {
                            status: "failed";
                            message: "Unauthorized";
                        };
                        404: {
                            status: "failed";
                            message: string;
                        };
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                        500: {
                            status: "failed";
                            message: string;
                        };
                    };
                };
            };
        };
    };
} & {
    api: {
        driver: {};
    } & {
        driver: {
            get: {
                body: {};
                params: {};
                query: {};
                headers: {};
                response: {
                    200: {
                        data: {
                            driver: {
                                name: string | null;
                                id: string;
                                department: string | null;
                            };
                        };
                        status: string;
                        message: string;
                    };
                    401: {
                        status: "failed";
                        message: "Unauthorized";
                    };
                    404: {
                        status: "failed";
                        message: string;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                    500: {
                        status: "failed";
                        message: string;
                    };
                };
            };
        };
    } & {
        driver: {
            assets: {
                get: {
                    body: {};
                    params: {};
                    query: {};
                    headers: {};
                    response: {
                        200: {
                            data: {
                                assets: {
                                    model: string | null;
                                    id: string;
                                    license_plate: string | null;
                                }[];
                            };
                            status: string;
                            message: string;
                        };
                        401: {
                            status: "failed";
                            message: "Unauthorized";
                        };
                        404: {
                            status: "failed";
                            message: string;
                        };
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                        500: {
                            status: "failed";
                            message: string;
                        };
                    };
                };
            };
        };
    } & {
        driver: {
            transactions: {
                get: {
                    body: {};
                    params: {};
                    query: {
                        limit: number;
                        page: number;
                    };
                    headers: {};
                    response: {
                        200: {
                            data: {
                                transactions: {
                                    id: string;
                                    transactionTime: string;
                                    driverName: string;
                                    modelName: string | null;
                                    transactionTotal: number;
                                    kiloMeterPerLitre: number;
                                    assetPlate: string | null;
                                    lastKilometer: number;
                                    litresPurchased: number;
                                    refillKilometer: number;
                                    gasStationPhoto: string | null;
                                    odometerPhoto: string | null;
                                    receiptPhoto: string | null;
                                }[];
                                pagination: {
                                    limit: number;
                                    page: number;
                                    total: number;
                                };
                            };
                            status: string;
                            message: string;
                        };
                        401: {
                            status: "failed";
                            message: "Unauthorized";
                        };
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                        500: {
                            status: "failed";
                            message: string;
                        };
                    };
                };
            };
        };
    };
} & {
    api: {
        transactions: {};
    } & {
        transactions: {
            get: {
                body: {};
                params: {};
                query: {
                    limit: number;
                    page: number;
                };
                headers: {};
                response: {
                    200: {
                        data: {
                            transactions: {
                                id: string;
                                transactionTime: string;
                                driverName: string;
                                modelName: string | null;
                                transactionTotal: number;
                                kiloMeterPerLitre: number;
                                assetPlate: string | null;
                                lastKilometer: number;
                                litresPurchased: number;
                                refillKilometer: number;
                            }[];
                            pagination: {
                                limit: number;
                                page: number;
                                total: number;
                            };
                        };
                        status: string;
                        message: string;
                    };
                    401: {
                        status: "failed";
                        message: "Unauthorized";
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                    500: {
                        status: "failed";
                        message: string;
                    };
                };
            };
        };
    } & {
        transactions: {
            post: {
                body: {
                    asset_id: string;
                    fuel_variant_id: number;
                    price: number;
                    total_transactions: number;
                    fill_kilometers: number;
                    transaction_time: string;
                    invoice_photo: File;
                    station_photo: File;
                    odometer_photo: File;
                };
                params: {};
                query: {};
                headers: {};
                response: {
                    401: {
                        status: "failed";
                        message: "Unauthorized";
                    };
                    201: {
                        data: {
                            transaction_id: string;
                        };
                        status: string;
                        message: string;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                    500: {
                        status: "failed";
                        message: string;
                    };
                };
            };
        };
    };
}) & {
    public: {
        images: {
            ":folder": {
                ":filename": {
                    get: {
                        body: {};
                        params: {
                            filename: string;
                            folder: string;
                        };
                        query: {};
                        headers: {};
                        response: {
                            200: Bun.BunFile;
                            403: {
                                readonly status: "failed";
                                readonly message: "Forbidden";
                            };
                            422: {
                                type: "validation";
                                on: string;
                                summary?: string;
                                message?: string;
                                found?: unknown;
                                property?: string;
                                expected?: string;
                            };
                        };
                    };
                };
            };
        };
    };
}, {
    derive: {};
    resolve: {};
    schema: {};
    standaloneSchema: {};
    response: {};
}, {
    derive: {};
    resolve: {};
    schema: {};
    standaloneSchema: {};
    response: {};
} & {
    derive: {};
    resolve: {};
    schema: {};
    standaloneSchema: {};
    response: {};
} & {
    derive: {};
    resolve: {};
    schema: {};
    standaloneSchema: {};
    response: {};
}>;
export type App = typeof app;
export {};
