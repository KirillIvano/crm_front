import {Typography, Button, Space} from 'antd';
import {useHistory} from 'react-router-dom';

import {ProductsTable} from './../components';

const {Title} = Typography;

export const ProductsMain = () => {
    const history = useHistory();

    return (
        <div>
            <Title level={1}>Продукты</Title>

            <Space size={16} direction="vertical">
                <ProductsTable />

                <Button
                    onClick={() => history.push('/product/create')}
                >
                    Создать
                </Button>
            </Space>
        </div>
    );
};
