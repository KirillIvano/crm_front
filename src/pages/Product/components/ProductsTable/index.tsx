import {Spin, Table, Typography} from 'antd';

import {getApiUrl} from '@/utils/getApiUrl';
import {ResponseType} from '@/admin-lib/types/requests';
import {ProductPreview} from '@/domain/product/types';
import {useAuthenticatedData} from '@/hooks/useAuthenticatedData';


const {Title} = Typography;

const COLUMNS = [
    {
        title: 'Идентификатор продукта',
        dataIndex: 'id',
    },
    {
        title: 'Имя продукта',
        dataIndex: 'name',
    },
    {
        title: 'Цена продукта, ₽',
        dataIndex: 'price',
    },
];

const ProductsTable = () => {
    const {isLoading, data} = useAuthenticatedData<ResponseType<ProductPreview[]>>(getApiUrl('/product/all'));

    if (isLoading || !data) return <Spin />;

    return (
        <div>
            <Title level={1}>Продукты</Title>
            <Table columns={COLUMNS} dataSource={data.data} size="small" />
        </div>
    );
};

export default ProductsTable;
