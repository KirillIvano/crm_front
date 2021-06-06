import {useEffect, useState} from 'react';

import {useRequestsContext} from './useRequestsContext';


export type UseDataRes<TData> = {
    error: null;
    data: null;
} | {
    error: string;
    data: null;
} | {
    error: null;
    data: TData;
}

export const useAdminData = <TData extends Record<string, unknown | unknown[]>>(
    url: string,
    options?: RequestInit,
): Readonly<UseDataRes<TData>> => {
    const [error, setError] = useState<null | string>(null);
    const [data, setData] = useState<TData | null>(null);

    const {request} = useRequestsContext();

    useEffect(() => {
        const abortController = new AbortController();
        const {signal} = abortController;

        const performRequest = async () => {
            const res = await request<TData>(url, {...options, signal});

            if (res.ok) {
                if (!res.data) {
                    setError('Сервер верну некорректный ответ');
                } else {
                    setData(res.data);
                }
            } else {
                setError(res.error);
            }
        };

        performRequest();

        return () => abortController.abort();
    }, [url, options, request]);

    return {
        error,
        data,
    } as Readonly<UseDataRes<TData>>;
};
