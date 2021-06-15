import {Spin, Table, Typography} from 'antd';

import {getApiUrl} from '@/utils/getApiUrl';
import {ResponseType} from '@/admin-lib/types/requests';
import {useAuthenticatedData} from '@/hooks/useAuthenticatedData';
import {CustomerPreview} from '@/domain/customer/types';


const {Title} = Typography;

const COLUMNS = [
    {
        title: 'Идентификатор покупателя',
        dataIndex: 'id',
    },
    {
        title: 'Имя покупателя',
        dataIndex: 'name',
    },
];

const CustomersTable = () => {
    const {isLoading, data} = useAuthenticatedData<ResponseType<CustomerPreview[]>>(
        getApiUrl('/customer/all'),
    );

    if (isLoading || !data) return <Spin />;

    return (
        <div>
            <Title level={1}>Покупатели</Title>
            <Table columns={COLUMNS} dataSource={data.data} size="small" />
        </div>
    );
};

export default CustomersTable;
