import React from 'react';

import {RequestProvider} from '@/admin-lib/types/requests';
import {AdminContext} from '@/admin-lib/contexts/AdminContext';
import {useMemo} from 'react';


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

    return (
        <AdminContext.Provider value={value}>
            {children}
        </AdminContext.Provider>
    );
};

export default Admin;
