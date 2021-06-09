import {Button, Typography} from 'antd';
import {Input} from 'antd';
import {Controller, useController} from 'react-hook-form';

import {AdminForm} from '@/admin-lib/components';
import {FormValidators} from '@/admin-lib/types/form';
import {getApiUrl} from '@/utils/getApiUrl';
import {useAdminFormContext} from '@/admin-lib/hooks/useAdminFormContext';
import {SyntheticEvent} from 'react';
import {ChangeEventHandler} from 'react';
import {ChangeEvent} from 'react';


export type AdminInputProps = {
    name: string;
    type?: HTMLInputElement['type'];
}

const validation = {required: true};

const AdminInput = ({
    name,
    type,
}: AdminInputProps) => {
    const controller = useController({
        name,
        rules: {required: true},
    });
    const {field} = controller;

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;

        if (type === 'number') {
            field.onChange(value ? parseInt(value) : '');
            return;
        }

        field.onChange(value);
    };

    return (
        <Input
            {...field}

            onChange={onChange}
            name={name}
            type={type}
        ></Input>
    );
};

const OrderCreate = () => {

    return (
        <AdminForm
            action={getApiUrl('/order')}
            method="POST"
            dataType="json"
            requestParams={{mode: 'no-cors'}}
        >
            <Typography>Создание продукта для категории #</Typography>

            <AdminInput
                type="number"
                name="customerId"
            />

            <AdminInput
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
