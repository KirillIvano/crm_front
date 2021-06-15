import {Button} from 'antd';

import {AdminForm} from '@/admin-lib';
import {getApiUrl} from '@/utils/getApiUrl';


const OrderDeleteBtn = () => (
    <div>
        <AdminForm
            method="DELETE"
            action={getApiUrl('/order')}
        >
            <Button
                htmlType="submit"
                danger
            >
                Удалить
            </Button>
        </AdminForm>
    </div>
);

export default OrderDeleteBtn;
