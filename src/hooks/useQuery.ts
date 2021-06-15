import qs from 'qs';

import {useLocation} from 'react-router-dom';


export const useQuery = <TData extends Record<string, unknown>>(): TData => {
    const {search} = useLocation();

    return qs.parse(search.slice(1)) as TData;
};
