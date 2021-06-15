import {Button, notification} from 'antd';

import {AdminForm} from '@/admin-lib';
import {getApiUrl} from '@/utils/getApiUrl';


const INVALIDATE = [getApiUrl('/order'), getApiUrl('/all')];
const OrderDeleteBtn = ({
    orderId,
}: {orderId: number}) => (
    <div>
        <AdminForm
            method="DELETE"
            action={getApiUrl(`/order/${orderId}`)}
            invalidate={INVALIDATE}
            onError={() => notification.error({message: 'Не удалось удалить оффер'})}
            onSuccess={() => notification.info({message: 'Оффер удалён'})}
            redirectTo="/"
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
