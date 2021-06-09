export type ResponseType<T = Record<string, unknown>> = {
    data: T;
    status: number;
}

export const request = async <T extends Record<string, unknown> = Record<string, unknown>,>(
    url: RequestInfo,
    options?: RequestInit,
): Promise<ResponseType<T>> => {
    const res = await fetch(url, options);

    const body = await res.json();

    return {
        data: body as T,
        status: res.status,
    };
};

