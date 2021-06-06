import {useCallback, useState} from 'react';


const DEFAULT_ERRORS = {};

export const useFormErrors = () => {
    const [errors, setErrors] = useState(DEFAULT_ERRORS);

    const clearErrors = useCallback(() => setErrors(DEFAULT_ERRORS), []);

    return {errors, setErrors, clearErrors};
};
