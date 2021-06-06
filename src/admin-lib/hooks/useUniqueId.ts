import {useMemo} from 'react';

import {getUniqueId} from '../util/getUniqueId';


export const useUniqueId = (): string => useMemo(getUniqueId, []);
