import {Button, Space, Typography, Spin} from 'antd';
import {Redirect} from 'react-router-dom';

import {ResponseType} from '@/admin-lib/types/requests';
import {AdminForm} from '@/admin-lib/components';
import {getApiUrl} from '@/utils/getApiUrl';
import {useAuthenticatedData} from '@/hooks/useAuthenticatedData';
import {OrderInfo} from '@/domain/order/types';

import {ProductsField} from '../components';
import {CustomerInput} from '../components/CustomerInput';
import {useOrderId} from '../hooks/useProductId';


const INVALIDATE = [getApiUrl('/order/all'), getApiUrl('/order')];
const OrderEditBase = ({orderId}: {orderId: number}) => {
    const {data, isLoading} = useAuthenticatedData<ResponseType<OrderInfo>>(getApiUrl(`/order/${orderId}`));

    if (!data || isLoading) return <Spin size="large" />;

    return (
        <div>
            <AdminForm
                action={getApiUrl(`/order/${orderId}`)}
                method="PATCH"
                defaultValues={{items: [], customerId: data.data.customerId}}
                invalidate={INVALIDATE}
                redirectTo={`/order/show/${orderId}`}
            >
                <Typography.Title level={1}>Редактирование заказа</Typography.Title>

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
};

export const OrderEdit = () => {
    const orderId = useOrderId();

    if (!orderId) return <Redirect to="/order" />;

    return <OrderEditBase orderId={orderId} />;
};
