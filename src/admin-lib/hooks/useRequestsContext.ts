import {useContext} from 'react';

import {RequestsContext} from '@/admin-lib/contexts/RequestsContext';


export const useRequestsContext = () => useContext(RequestsContext);
