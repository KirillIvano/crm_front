import React from 'react';
import {useHistory} from 'react-router-dom';
import {DefaultValues, FormProvider, useForm} from 'react-hook-form';

import {useAdminContext} from '@/admin-lib/hooks/useAdminContext';
import {useQueryClient} from 'react-query';


export type EnhanceDataBeforeSend = <
    TIn extends Record<string, unknown>,
    TOut extends Record<string, unknown>
>(data: TIn) => TOut

export type AdminFormProps = {
    action: string;
    method: 'GET' | 'PUT' | 'POST' | 'DELETE' | 'PATCH';
    children: React.ReactNode;

    redirectTo?: string;
    className?: string;

    onSuccess?: () => void;
    onError?: (status: number) => void;
    enhanceBeforeSend?: EnhanceDataBeforeSend;

    defaultValues?: DefaultValues<Record<string, unknown>>;
    authorized?: boolean;
    invalidate?: string | string[];
    requestParams?: Omit<RequestInit, 'body' | 'method'>;
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
    defaultValues,

    authorized=false,
    requestParams={},
}: AdminFormProps) => {
    const history = useHistory();

    const formApi = useForm({defaultValues});
    const {handleSubmit} = formApi;

    const {request} = useAdminContext();
    const queryClient = useQueryClient();

    const prepareData = (values: Record<string, unknown>) =>
        enhanceBeforeSend ? enhanceBeforeSend(values) : values;

    const submitHandler = async (values: Record<string, unknown>) => {
        const data = prepareData(values);

        try {
            const res = await request(
                action,
                {
                    method,
                    body: JSON.stringify(data),
                    authenticate: authorized,
                    credentials: 'include',
                    ...requestParams,
                },
            );
            const {status} = res;

            if (status < 400) {
                onSuccess?.();

                redirectTo && history.push(redirectTo);
                invalidate && queryClient.invalidateQueries(invalidate);
            } else {
                onError?.(status);
            }
        } catch (e) {
            onError?.(500);
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
