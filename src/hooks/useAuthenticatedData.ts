import {useCallback} from 'react';
import {QueryFunction, QueryKey, useQuery, UseQueryOptions, UseQueryResult} from 'react-query';

import {useAdminContext} from '@/admin-lib/hooks/useAdminContext';
import {ResponseType} from '@/admin-lib/types/requests';

export const useAuthenticatedData =
    <
        TQueryFnData = ResponseType<Record<string, unknown>>,
        TError = unknown,
        TData = TQueryFnData,
        TQueryKey extends QueryKey = QueryKey
    >(
        paths: TQueryKey,
        options?: UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
    ): UseQueryResult<TData, TError> => {
        const {request} = useAdminContext();
        const queryFn = useCallback(({queryKey}) =>
            request(
                queryKey[0] as string,
                {
                    authenticate: true,
                    credentials: 'include',
                },
            ),
        [request]) as unknown as QueryFunction<TQueryFnData, TQueryKey>;

        const res = useQuery<TQueryFnData, TError, TData, TQueryKey>(
            paths,
            queryFn,
            options,
        );

        return res;
    };


