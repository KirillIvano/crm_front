import {Layout, Menu} from 'antd';
import {
    UsergroupAddOutlined,
    FileTextOutlined,
    AppstoreAddOutlined,
} from '@ant-design/icons';

import {
    Link,
    Switch,
    Redirect,
    useLocation,
    Route,
} from 'react-router-dom';

import {CustomerPages, OrderPages, ProductPages} from '@/pages';
import {AuthenticatedRoute} from '@/components';
import Login from '@/pages/Login';

import styles from './styles.scss';


const {Sider, Content} = Layout;

const AppMenu = () => {
    const {pathname} = useLocation();

    return (
        <Menu theme="dark" mode="inline" selectedKeys={[pathname]}>
            <Menu.Item key="/order" icon={<FileTextOutlined />}>
                <Link to="/order">
                    Order
                </Link>
            </Menu.Item>
            <Menu.Item key="/product" icon={<AppstoreAddOutlined />}>
                <Link to="/product">
                    Product
                </Link>
            </Menu.Item>
            <Menu.Item key="/customer" icon={<UsergroupAddOutlined />}>
                <Link to="/customer">
                    User
                </Link>
            </Menu.Item>
        </Menu>
    );
};

export const App = () => {

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={false}>
                <AppMenu />
            </Sider>
            <Layout className={styles.content}>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <Switch>
                        <Redirect exact from="/" to="order" />
                        <AuthenticatedRoute path="/order" component={OrderPages} />
                        <AuthenticatedRoute path="/product" component={ProductPages} />
                        <AuthenticatedRoute path="/customer" component={CustomerPages} />
                        <Route path="/login" component={Login} />
                    </Switch>
                </Content>
            </Layout>
        </Layout>
    );
};
