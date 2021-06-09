import React, {useMemo} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

import {RequestProvider} from '@/admin-lib/types/requests';
import {AdminContext} from '@/admin-lib/contexts/AdminContext';


type AdminProps = {
    requestProvider: RequestProvider;
    children: React.ReactNode;
}

const Admin = ({
    requestProvider,
    children,
}: AdminProps) => {
    const value = useMemo(
        () => ({request: requestProvider}),
        [requestProvider],
    );
    // TODO: useConst
    const queryClient = useMemo(() => new QueryClient({
        defaultOptions: {
            queries: {
                queryFn: ({queryKey}) => requestProvider(queryKey[0] as string),
            },
        },
    }), [requestProvider]);

    return (
        <AdminContext.Provider value={value}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </AdminContext.Provider>
    );
};

export default Admin;
