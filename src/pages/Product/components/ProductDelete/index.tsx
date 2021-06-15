import {Button, notification} from 'antd';

import {AdminForm} from '@/admin-lib';
import {getApiUrl} from '@/utils/getApiUrl';


const INVALIDATE = [getApiUrl('/product'), getApiUrl('/product/all')];
export const ProductDeleteBtn = ({
    productId,
}: {productId: number}) => (
    <div>
        <AdminForm
            method="DELETE"
            action={getApiUrl(`/product/${productId}`)}
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
