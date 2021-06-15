import {Link} from 'react-router-dom';
import {Spin, Table} from 'antd';
import {ColumnsType} from 'antd/lib/table';

import {getApiUrl} from '@/utils/getApiUrl';
import {ResponseType} from '@/admin-lib/types/requests';
import {useAuthenticatedData} from '@/hooks/useAuthenticatedData';


const COLUMNS: ColumnsType<OrderPreview> = [
    {
        title: 'Идентификатор записи',
        dataIndex: 'id',
    },
    {
        title: 'Идентификатор покупателя',
        dataIndex: 'customerId',
    },
    {
        title: '',
        dataIndex: '',
        fixed: 'right',
        // eslint-disable-next-line react/display-name
        render: ({id}: {id: number}) => <Link to={`/order/edit/${id}`}>Edit</Link>,
    },
    {
        title: '',
        dataIndex: '',
        fixed: 'right',
        // eslint-disable-next-line react/display-name
        render: ({id}: {id: number}) => <Link to={`/order/show/${id}`}>Show</Link>,
    },
];

type OrderPreview = {
    userId: number;
    customerId: number;
    id: number;
    status: string;
}

const OrdersTable = () => {
    const {isLoading, data} = useAuthenticatedData<ResponseType<OrderPreview[]>>(
        getApiUrl('/order/all'),
    );

    if (isLoading || !data) return <Spin />;

    return (
        <Table columns={COLUMNS} dataSource={data.data} size="small" />
    );
};

export default OrdersTable;
