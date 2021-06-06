import React, {createContext} from 'react';

import {wrapDefaultContext} from '../util/wrapDefaultContext';
import {FormValidators} from '../types/form';


export type ValidationErrors = Record<string, string[]>;

type FormContextValueType = {
    isSubmitFailed: boolean;
    isFormDisabled: boolean;

    errors: Record<string, string[]>;
    validators?: FormValidators;
}

const DEFAULT_FORM_CONTEXT: FormContextValueType = wrapDefaultContext({
    isSubmitFailed: false,
    isFormDisabled: false,
    errors: {},
});
export const FormContext = createContext<FormContextValueType>(DEFAULT_FORM_CONTEXT);


type WithFormContextProps = {
    isFormDisabled: boolean;
    isSubmitFailed: boolean;
    errors: Record<string, string[]>;
    validators?: FormValidators;

    children: React.ReactNode;
}

export const WithFormContext: React.FC<WithFormContextProps> = ({children, ...value}) => (
    <FormContext.Provider value={value}>
        {children}
    </FormContext.Provider>
);
