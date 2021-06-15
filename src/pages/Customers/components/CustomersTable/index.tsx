import {Spin, Table, Typography} from 'antd';
import {ColumnsType} from 'antd/lib/table';

import {getApiUrl} from '@/utils/getApiUrl';
import {ResponseType} from '@/admin-lib/types/requests';
import {useAuthenticatedData} from '@/hooks/useAuthenticatedData';
import {CustomerPreview} from '@/domain/customer/types';

import {CustomerDeleteBtn} from '../CustomerDeleteBtn';


const {Title} = Typography;

const COLUMNS: ColumnsType<CustomerPreview> = [
    {
        title: 'Идентификатор покупателя',
        dataIndex: 'id',
    },
    {
        title: 'Имя покупателя',
        dataIndex: 'name',
    },
    {
        title: '',
        dataIndex: '',
        fixed: 'right',
        // eslint-disable-next-line react/display-name
        render: ({id}: {id: number}) => <CustomerDeleteBtn customerId={id} />,
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
