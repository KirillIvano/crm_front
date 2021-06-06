import {useContext} from 'react';

import {FormContext} from '@/admin-lib/contexts/FormContext';


export const useFormContext = () => useContext(FormContext);
