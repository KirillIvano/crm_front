import {createContext} from 'react';

import {RequestProvider} from '@/admin-lib/types/requests';


const defaultHandler = () => {throw new Error('Не определён авторизационный контекст');};

const DEFAULT_REQUESTS_CONTEXT: RequestProvider = {
    request: defaultHandler,
};


export const RequestsContext = createContext(DEFAULT_REQUESTS_CONTEXT);
