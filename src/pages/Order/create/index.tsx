import {Button, Typography} from 'antd';

import {AdminForm} from '@/admin-lib/components';
import {getApiUrl} from '@/utils/getApiUrl';

import {ProductsField} from './../components';
import {CustomerInput} from './components/CustomerInput';


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

            <CustomerInput />

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
