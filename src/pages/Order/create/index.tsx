import {Button, Typography} from 'antd';

import {AdminForm, AdminInput} from '@/admin-lib/components';
import {getApiUrl} from '@/utils/getApiUrl';


const OrderCreate = () => (
    <AdminForm
        action={getApiUrl('/order')}
        method="POST"
        invalidate={getApiUrl('/order/all')}
        redirectTo="/order"
    >
        <Typography>Создание продукта для категории #</Typography>

        <AdminInput
            type="number"
            name="customerId"
            required
        />

        <AdminInput
            type="number"
            name="userId"
            required
        />

        <Button
            type="primary"
            htmlType="submit"
        >
                Подтвердить
        </Button>
    </AdminForm>
);


export default OrderCreate;
