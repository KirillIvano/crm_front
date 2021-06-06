import React from 'react';

import {RequestProvider} from '@/admin-lib/types/requests';
import {RequestsContext} from '@/admin-lib/contexts/RequestsContext';


type AdminProps = {
    requestProvider: RequestProvider;
    children: React.ReactNode;
}

const Admin = ({
    requestProvider,
    children,
}: AdminProps) => (
    <RequestsContext.Provider value={requestProvider}>
        {children}
    </RequestsContext.Provider>
);


export default Admin;
