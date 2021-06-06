export type ResponseType<TData extends Record<string, unknown | unknown[]>,> = {
    ok: true,
    data: TData
} | {
    ok: false,
    error: string
}

export interface RequestProvider {
    request: <TRes extends Record<string, unknown | unknown[]>,>(url: string, options?: RequestInit) =>
        Promise<ResponseType<TRes>>;
}
