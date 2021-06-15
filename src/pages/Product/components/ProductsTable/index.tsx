import {Spin, Table} from 'antd';
import {ColumnsType} from 'antd/lib/table';

import {getApiUrl} from '@/utils/getApiUrl';
import {ResponseType} from '@/admin-lib/types/requests';
import {ProductPreview} from '@/domain/product/types';
import {useAuthenticatedData} from '@/hooks/useAuthenticatedData';

import {ProductDeleteBtn} from '../ProductDelete';


const COLUMNS: ColumnsType<ProductPreview> = [
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
    {
        title: '',
        dataIndex: '',
        fixed: 'right',
        // eslint-disable-next-line react/display-name
        render: ({id}: {id: number}) => <ProductDeleteBtn productId={id} />,
    },
];

const ProductsTable = () => {
    const {isLoading, data} = useAuthenticatedData<ResponseType<ProductPreview[]>>(getApiUrl('/product/all'));

    if (isLoading || !data) return <Spin />;

    return (
        <Table columns={COLUMNS} dataSource={data.data} size="small" />
    );
};

export default ProductsTable;
