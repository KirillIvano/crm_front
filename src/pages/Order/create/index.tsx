import React, {useCallback, useMemo} from 'react';
import {Button, Typography} from 'antd';
import {Input} from 'antd';

import {AdminForm} from '@/admin-lib/components';
import {FormValidators} from '@/admin-lib/types/form';
import {getApiUrl} from '@/utils/getApiUrl';
import {useFormContext} from '@/admin-lib';


export type AdminInputProps = {
    name: string;
    labelText: string;

    type?: HTMLInputElement['type'];
}

const AdminInput = ({
    name,
    type,
    labelText,
}: AdminInputProps) => {
    const formContext = useFormContext();

    console.log(formContext);

    return (
        <div>
            {labelText}
            <Input name={name} type={type}></Input>
        </div>
    );
};

const PRODUCT_CREATE_VALIDATORS: FormValidators = {
    name: {required: true},
    image: {required: true},
    certificate: {required: true},
    shortDescription: {required: true},
    price: {required: true},
};

const items = [{productId: 1, quantity: 10}, {productId: 2, quantity: 20}];

const OrderCreate = () => {

    return (
        <AdminForm
            action={getApiUrl('/order')}
            method="POST"
            dataType="json"
            requestParams={{mode: 'no-cors'}}
            onError={console.log}
            onSuccess={console.log}

            validators={PRODUCT_CREATE_VALIDATORS}
        >
            <Typography>Создание продукта для категории #</Typography>

            <AdminInput
                labelText="customer id"
                type="number"
                name="customerId"
            />

            <AdminInput
                labelText="user id"
                type="number"
                name="userId"
            />

            <Button
                type="primary"
                htmlType="submit"
            >
                Подтвердить
            </Button>
        </AdminForm>
    );
};


export default OrderCreate;
