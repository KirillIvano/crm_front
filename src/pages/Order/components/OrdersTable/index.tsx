import React from 'react';
import {useQuery} from 'react-query';
import {Spin} from 'antd';

import {getApiUrl} from '@/utils/getApiUrl';
import {ResponseType} from '@/admin-lib/types/requests';


type OrderPreview = {
    userId: number;
    customerId: number;
    id: number;
    status: string;
}

const OrdersTable = () => {
    const {isLoading, data} = useQuery<ResponseType<OrderPreview[]>>(getApiUrl('/order/all'));

    if (isLoading) return <Spin />;

    return (
        <div>{JSON.stringify(data, null, '\t')}</div>
    );
};

export default OrdersTable;
