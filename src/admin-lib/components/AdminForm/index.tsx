import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

import {DataType} from '@/admin-lib/util/dataType';
import {formDataToJson} from '@/admin-lib/util/formDataToJson';
import {WithFormContext} from '@/admin-lib/contexts/FormContext';
import {useFormErrors} from '@/admin-lib/hooks/useFormErrors';
import {useRequestsContext} from '@/admin-lib/hooks/useRequestsContext';
import {FormValidators} from '@/admin-lib/types/form';

import {filterRequestParams} from './helpers/filterRequestParams';
import {getHeadersFromDataType} from './helpers/getHeadersFromDataType';
import {getFormErrors} from './helpers/getFormErrors';
import {getFormDataFromForm} from './helpers/getFormDataFromForm';


type AdminFormProps = {
    action: string;
    method: 'GET' | 'PUT' | 'POST' | 'DELETE';
    dataType: DataType;
    children: React.ReactNode;

    redirectTo?: string;
    className?: string;
    authRequired?: boolean;

    onSuccess?: () => void;
    onError?: (error: string) => void;
    onSubmit?: (data: FormData) => void;
    enhanceDataBeforeSend?: (data: FormData) => FormData;

    requestParams?: Omit<RequestInit, 'body' | 'method' | 'headers'>;
    validators?: FormValidators;
}

const AdminForm = ({
    action,
    method,
    children,
    dataType,

    redirectTo,
    className,

    onSuccess,
    onError,
    onSubmit,
    enhanceDataBeforeSend,

    requestParams={},
    validators,
}: AdminFormProps) => {
    const history = useHistory();
    const {errors, setErrors, clearErrors} = useFormErrors();
    const [isFormDisabled, setFormDisabled] = useState(false);

    const {request} = useRequestsContext();

    const prepareBodyForSending = (body: FormData): string | FormData => {
        const enhancedBody = enhanceDataBeforeSend ? enhanceDataBeforeSend(body) : body;
        const jsonBody = dataType === 'json' ? formDataToJson(enhancedBody) : enhancedBody;

        return jsonBody;
    };

    const performRequest = async (data: FormData) => {
        const body = prepareBodyForSending(data);
        const headers = getHeadersFromDataType(dataType);

        const filteredParams = filterRequestParams(requestParams);

        setFormDisabled(true);

        const res = await request(
            action,
            {
                method,
                headers,
                body,

                ...filteredParams,
            },
        );

        setFormDisabled(false);

        if (!res.ok) {
            onError && onError(res.error);
        } else {
            onSuccess && onSuccess();
            redirectTo && history.push(redirectTo);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const body = getFormDataFromForm(e.currentTarget);

        onSubmit && onSubmit(body);

        const errors = validators ? getFormErrors(body, validators) : null;

        if (errors && Object.keys(errors).length) {
            setErrors(errors);
        } else {
            clearErrors();
            performRequest(body);
        }
    };

    return (
        <form
            className={className}
            onSubmit={handleSubmit}
        >
            <WithFormContext
                errors={errors}
                validators={validators}
                isFormDisabled={isFormDisabled}
                isSubmitFailed={false}
            >
                {children}
            </WithFormContext>
        </form>
    );
};


export default React.memo(AdminForm);
