import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {FormProvider, useForm} from 'react-hook-form';

import {DataType} from '@/admin-lib/util/dataType';
import {useAdminContext} from '@/admin-lib/hooks/useAdminContext';
import {FormValidators} from '@/admin-lib/types/form';


type AdminFormProps = {
    action: string;
    method: 'GET' | 'PUT' | 'POST' | 'DELETE';
    dataType: DataType;
    children: React.ReactNode;

    redirectTo?: string;
    className?: string;

    // onSuccess?: () => void;
    // onError?: (error: string) => void;
    // onSubmit?: (data: FormData) => void;
    // enhanceDataBeforeSend?: (data: FormData) => FormData;

    requestParams?: Omit<RequestInit, 'body' | 'method' | 'headers'>;
    validators?: FormValidators;
}

const AdminForm = ({
    action,
    method,
    dataType,
    children,

    redirectTo,
    className,

    // onSuccess,
    // onError,
    // onSubmit,
    // enhanceDataBeforeSend,

    requestParams={},
    // validation,
}: AdminFormProps) => {
    const history = useHistory();
    const {request} = useAdminContext();
    const formApi = useForm();
    const {handleSubmit} = formApi;

    const submitHandler = async (values: Record<string, unknown>) => {
        console.log(values);
    };

    return (
        <FormProvider {...formApi}>
            <form
                className={className}
                onSubmit={handleSubmit(submitHandler)}
            >
                {children}
            </form>
        </FormProvider>
    );
};


export default React.memo(AdminForm);
