type DefaultResponseData = Record<string, unknown | unknown[]> | unknown[];

export type ResponseType<TData = DefaultResponseData,> = {
    status: number,
    data: TData
}

export type AdminRequestInit = {
    authenticate?: boolean;
} & RequestInit;

export type RequestProvider = <
    TRes extends Record<string, unknown | unknown[]>
>(
    url: string,
    options?: AdminRequestInit
) => Promise<ResponseType<TRes>>;
