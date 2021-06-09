import {useQuery} from 'react-query';
import {Link} from 'react-router-dom';
import {Spin, Table} from 'antd';

import {getApiUrl} from '@/utils/getApiUrl';
import {ResponseType} from '@/admin-lib/types/requests';


const COLUMNS = [
    {
        title: 'Идентификатор записи',
        dataIndex: 'id',
    },
    {
        title: 'Идентификатор пользователя',
        dataIndex: 'userId',
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
];


type OrderPreview = {
    userId: number;
    customerId: number;
    id: number;
    status: string;
}

const OrdersTable = () => {
    const {isLoading, data} = useQuery<ResponseType<OrderPreview[]>>(getApiUrl('/order/all'));

    if (isLoading || !data) return <Spin />;

    return (
        <div>
            <h1>Заказы</h1>
            <Table columns={COLUMNS} dataSource={data.data} size="small" />
        </div>
    );
};

export default OrdersTable;
