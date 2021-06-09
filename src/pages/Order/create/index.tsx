import {Button, Typography} from 'antd';

import {AdminForm, AdminInput} from '@/admin-lib/components';
import {getApiUrl} from '@/utils/getApiUrl';


export type AdminInputProps = {
    name: string;
    type?: HTMLInputElement['type'];
}

const OrderCreate = () => {

    return (
        <AdminForm
            action={getApiUrl('/order')}
            invalidate={getApiUrl('/order/all')}
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
