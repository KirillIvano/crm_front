import {Button, Typography} from 'antd';

import {AdminForm} from '@/admin-lib/components';
import {getApiUrl} from '@/utils/getApiUrl';
import {Input} from '@/uikit';

import {ProductsField} from './../components';


const OrderCreate = () => (
    <div>
        <AdminForm
            action={getApiUrl('/order')}
            method="POST"
            defaultValues={{items: []}}
            invalidate={getApiUrl('/order/all')}
            redirectTo="/order"
        >
            <Typography>Создание заказа</Typography>

            <Input
                type="number"
                name="customerId"
            />

            <Input
                type="number"
                name="userId"
                required
            />

            <ProductsField name="items" />

            <Button
                type="primary"
                htmlType="submit"
            >
                Подтвердить
            </Button>
        </AdminForm>
    </div>
);

export default OrderCreate;
