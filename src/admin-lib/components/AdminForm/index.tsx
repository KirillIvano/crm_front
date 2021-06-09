import React from 'react';
import {useHistory} from 'react-router-dom';
import {FormProvider, useForm} from 'react-hook-form';

import {DataType} from '@/admin-lib/util/dataType';
import {useAdminContext} from '@/admin-lib/hooks/useAdminContext';
import {useQueryClient} from 'react-query';


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

    onSuccess?: () => void;
    onError?: (error: string) => void;
    enhanceBeforeSend?: EnhanceDataBeforeSend;

    invalidate?: string | string[];
    requestParams?: Omit<RequestInit, 'body' | 'method' | 'headers'>;
}

const AdminForm = ({
    action,
    invalidate,
    method,
    children,

    redirectTo,
    className,

    onSuccess,
    onError,
    enhanceBeforeSend,

    requestParams={},
}: AdminFormProps) => {
    const history = useHistory();

    const formApi = useForm();
    const {handleSubmit} = formApi;

    const {request} = useAdminContext();
    const {invalidateQueries} = useQueryClient();

    const prepareData = (values: Record<string, unknown>) =>
        enhanceBeforeSend ? enhanceBeforeSend(values) : values;

    const submitHandler = async (values: Record<string, unknown>) => {
        const data = prepareData(values);

        const res = await request(
            action,
            {
                method,
                body: JSON.stringify(data),
                ...requestParams,
            },
        );

        if (res.ok) {
            onSuccess?.();

            redirectTo && history.push(redirectTo);
            invalidate && invalidateQueries(invalidate);
        } else {
            onError?.(res.error);
        }
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
