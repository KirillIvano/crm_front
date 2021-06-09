type DefaultResponseData = Record<string, unknown | unknown[]> | unknown[];

export type ResponseType<TData = DefaultResponseData,> = {
    status: number,
    data: TData
}

export type RequestProvider = <
    TRes extends Record<string, unknown | unknown[]>
>(
    url: string,
    options?: RequestInit
) => Promise<ResponseType<TRes>>;
