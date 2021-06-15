import {Spin, Space} from 'antd';

import {getApiUrl} from '@/utils/getApiUrl';
import {ResponseType} from '@/admin-lib/types/requests';
import {useAuthenticatedData} from '@/hooks/useAuthenticatedData';
import {OrderInfo} from '@/domain/order/types';

import {useOrderId} from '../hooks/useProductId';
import {DeleteOrder} from '../components';


const OrderShow = () => {
    const orderId = useOrderId();
    const {data, isLoading} = useAuthenticatedData<ResponseType<OrderInfo>>(
        [getApiUrl(`/order/${orderId}`), orderId],
    );

    if (isLoading || !data) return <Spin size="large" />;

    const {id, status} = data.data;

    return (
        <div>
            <p>ID: {id}</p>
            <p>Status: {status}</p>

            <Space size={12}>
                <DeleteOrder orderId={orderId} />
            </Space>
        </div>
    );
};

export default OrderShow;
