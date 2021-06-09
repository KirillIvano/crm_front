import {useContext} from 'react';

import {AdminContext} from '../contexts/AdminContext';


export const useAdminContext = () => useContext(AdminContext);
