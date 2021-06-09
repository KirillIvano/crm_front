import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {FormProvider, useForm} from 'react-hook-form';

import {DataType} from '@/admin-lib/util/dataType';
import {useAdminContext} from '@/admin-lib/hooks/useAdminContext';
import {FormValidators} from '@/admin-lib/types/form';
import {useMutation, useQueryClient} from 'react-query';


export type EnhanceDataBeforeSend = <
    TIn extends Record<string, unknown>,
    TOut extends Record<string, unknown>
>(data: TIn) => TOut

export type AdminFormProps = {
    action: string;
    method: 'GET' | 'PUT' | 'POST' | 'DELETE';
    dataType: DataType;
    children: React.ReactNode;

    redirectTo?: string;
    className?: string;

    // onSuccess?: () => void;
    // onError?: (error: string) => void;
    // onSubmit?: (data: FormData) => void;
    enhanceBeforeSend?: EnhanceDataBeforeSend;

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
    enhanceBeforeSend,

    requestParams={},
}: AdminFormProps) => {
    const history = useHistory();

    const formApi = useForm();
    const {handleSubmit} = formApi;

    const {request} = useAdminContext();
    const {invalidateQueries} = useQueryClient();

    const submitHandler = async (values: Record<string, unknown>) => {
        let data = values;

        if (enhanceBeforeSend) {
            data = enhanceBeforeSend(values);
        }

        console.log(data);
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
