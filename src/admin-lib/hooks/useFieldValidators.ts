import {FieldValidators} from '../types/form';
import {useFormContext} from './useFormContext';


export const useFieldValidators = (fieldName: string): FieldValidators | undefined => {
    const {validators} = useFormContext();

    if (validators) {
        return validators[fieldName];
    }
};
