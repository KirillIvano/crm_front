import qs from 'qs';

import {SERVER_ORIGIN} from '@/settings';


export const getApiUrl = (path: string, params?: Record<string, unknown>) =>
    `${SERVER_ORIGIN}${path}?${params ? qs.stringify(params) : ''}`;
