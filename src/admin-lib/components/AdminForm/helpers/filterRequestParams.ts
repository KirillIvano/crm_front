import {omit} from 'ramda';


const OMITTED_INIT_PARAMS = ['body', 'method'];
export const filterRequestParams = (params: Partial<RequestInit>): Omit<RequestInit, 'body' | 'method'> =>
    omit(OMITTED_INIT_PARAMS, params);
