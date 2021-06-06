import {useFormContext} from './useFormContext';


export const useValidationErrors = (name: string): string[] | undefined => {
    const {errors} = useFormContext();

    return errors[name];
};
