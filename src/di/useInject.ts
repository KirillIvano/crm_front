import {useMemo} from 'react';

import {container} from './container';


export const useInject = <TItem = unknown>(key: symbol) =>
    useMemo(() => container.get<TItem>(key), [key]);
