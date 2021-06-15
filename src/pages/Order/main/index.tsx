import {Typography, Button} from 'antd';
import {useHistory} from 'react-router-dom';

import {OrdersTable} from './../components';
import styles from './styles.scss';

const {Title} = Typography;

const OrdersMain = () => {
    const history = useHistory();

    return (
        <div>
            <Title level={1}>Заказы</Title>

            <OrdersTable />

            <Button
                className={styles.createBtn}
                onClick={() => history.push('/order/create')}
            >
                Создать
            </Button>

        </div>
    );
};

export default OrdersMain;
