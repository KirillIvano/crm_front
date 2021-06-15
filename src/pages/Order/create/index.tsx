import {Button, Space, Typography} from 'antd';

import {AdminForm} from '@/admin-lib/components';
import {getApiUrl} from '@/utils/getApiUrl';

import {ProductsField} from '../components';
import {CustomerInput} from '../components/CustomerInput';


const OrderCreate = () => (
    <div>
        <AdminForm
            action={getApiUrl('/order')}
            method="POST"
            defaultValues={{items: []}}
            invalidate={getApiUrl('/order/all')}
            redirectTo="/order"
        >
            <Typography.Title level={1}>Создание заказа</Typography.Title>

            <Space size={16} direction="vertical">
                <CustomerInput />

                <ProductsField name="items" />

                <Button
                    type="primary"
                    htmlType="submit"
                >
                    Подтвердить
                </Button>
            </Space>
        </AdminForm>
    </div>
);

export default OrderCreate;
