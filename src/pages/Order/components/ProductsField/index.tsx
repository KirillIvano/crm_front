import {useState} from 'react';
import {useController} from 'react-hook-form';
import {Modal, Spin, Table, Button} from 'antd';
import {ColumnsType} from 'antd/lib/table';

import {getApiUrl} from '@/utils/getApiUrl';
import {ResponseType} from '@/admin-lib/types/requests';
import {ProductPreview} from '@/domain/product/types';
import {useAdminFormContext} from '@/admin-lib/hooks/useAdminFormContext';
import {useModalState} from '@/hooks/useModalState';
import {OrderItemPreview} from '@/domain/order/types';

import styles from './styles.scss';
import {useAuthenticatedData} from '@/hooks/useAuthenticatedData';

const COLUMNS: ColumnsType<ProductPreview> = [
    {
        title: 'ID продукта',
        dataIndex: 'id',
    },
    {
        title: 'Имя продукта',
        dataIndex: 'name',
    },
];

export type ProductsModalProps = {
    isOpen: boolean;
    name: string;

    close: () => void;
}
const ProductsModal = ({
    isOpen,
    close,
    name,
}: ProductsModalProps) => {
    const {field: {onChange}} = useController({name});
    const [currentRows, setRows] = useState<number[]>([]);
    const {data, isLoading} = useAuthenticatedData<ResponseType<ProductPreview[]>>(
        getApiUrl('/product/all'),
    );

    const handleSubmit = () => {
        const items: OrderItemPreview[] = currentRows.map(
            id => ({quantity: 1, productId: id}),
        );

        onChange(items);
        close();
    };

    if (isLoading) return <Spin />;
    if (!data) return null;

    return (
        <Modal
            title="Выбор продуктов"
            centered
            visible={isOpen}
            width={1000}
            onCancel={close}
            onOk={handleSubmit}
        >
            <Table
                columns={COLUMNS}
                pagination={false}
                rowKey="id"
                rowSelection={{
                    type: 'checkbox',
                    onChange: ids => setRows(ids as number[]),
                }}
                dataSource={data.data}
                size="small"
            />
        </Modal>
    );
};


type ProductsCounterProps = {
    name: string;
    className?: string;
}

const ProductCounter = ({name, className}: ProductsCounterProps) => {
    const {getValues} = useAdminFormContext();

    const {length: count} = getValues(name);

    return (
        <div className={className}>
            Добавлено {count} товаров
        </div>
    );
};

const ProductsField = ({name, className}: {name: string, className?: string}) => {
    const {open, close, visible} = useModalState(false);

    return (
        <div className={className}>
            <Button onClick={open}>Выбрать продукты</Button>
            <ProductCounter className={styles.productsCounter} name={name}  />

            <ProductsModal
                isOpen={visible}
                name={name}

                close={close}
            />
        </div>
    );
};

export default ProductsField;

