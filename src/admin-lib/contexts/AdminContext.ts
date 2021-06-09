import {createContext} from 'react';

import {RequestProvider} from '../types/requests';


const defaultContext = {
    request() {
        throw new Error('U are using request out of context');
    },
};

export type AdminContextValue = {
    request: RequestProvider
}

export const AdminContext = createContext<AdminContextValue>(
    defaultContext as AdminContextValue,
);
