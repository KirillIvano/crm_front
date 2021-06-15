import {Layout, Menu, Spin} from 'antd';
import {
    UsergroupAddOutlined,
    FileTextOutlined,
    AppstoreAddOutlined,
} from '@ant-design/icons';
import {useEffect} from 'react';

import {
    Link,
    Switch,
    Redirect,
    useLocation,
    Route,
} from 'react-router-dom';
import {observer} from 'mobx-react-lite';

import {CustomerPages, OrderPages, ProductPages} from '@/pages';
import {AuthenticatedRoute} from '@/components';
import Login from '@/pages/Login';
import {useAuthStore} from '@/domain/auth/hooks';
import LogoutButton from '@/components/LogoutButton';

import styles from './styles.scss';


const {Sider, Content, Header} = Layout;

const AppMenu = () => {
    const {pathname} = useLocation();

    return (
        <Menu theme="dark" mode="inline" selectedKeys={[pathname]}>
            <Menu.Item key="/order" icon={<FileTextOutlined />}>
                <Link to="/order">
                    Заказы
                </Link>
            </Menu.Item>
            <Menu.Item key="/product" icon={<AppstoreAddOutlined />}>
                <Link to="/product">
                    Товары
                </Link>
            </Menu.Item>
            <Menu.Item key="/customer" icon={<UsergroupAddOutlined />}>
                <Link to="/customer">
                    Покупатели
                </Link>
            </Menu.Item>
        </Menu>
    );
};

export const App = observer(() => {
    const authStore = useAuthStore();

    useEffect(() => {
        authStore.ping();
    }, [authStore]);

    if (!authStore.initialAuthChecked) return <Spin size="large" />;

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={false}>
                <AppMenu />
            </Sider>
            <Layout className={styles.content}>
                <Header className={styles.header}>
                    <LogoutButton />
                </Header>
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
});
