import {Button, notification} from 'antd';

import {AdminForm} from '@/admin-lib';
import {getApiUrl} from '@/utils/getApiUrl';


const INVALIDATE = [getApiUrl('/customer'), getApiUrl('/customer/all')];
export const CustomerDeleteBtn = ({
    customerId,
}: {customerId: number}) => (
    <div>
        <AdminForm
            method="DELETE"
            action={getApiUrl(`/customer/${customerId}`)}
            invalidate={INVALIDATE}
            onError={() => notification.error({message: 'Не удалось удалить покупателя'})}
            onSuccess={() => notification.info({message: 'Покупатель удалён'})}
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
