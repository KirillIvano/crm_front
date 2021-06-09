import {Component} from 'react';
import {Layout, Menu} from 'antd';
import {Link} from 'react-router-dom';
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';

import {OrderPages} from '@/pages';

import styles from './styles.scss';


const {Sider, Content} = Layout;
export class App extends Component<unknown, {collapsed: boolean}> {
    state = {
        collapsed: false,
    };

    toggle = () => {
        const {collapsed} = this.state;

        this.setState({
            collapsed: !collapsed,
        });
    };

    render = () => {
        const {collapsed} = this.state;

        return (
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            <Link to="/order/create">
                                nav 1
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                            nav 2
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined />}>
                            nav 3
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className={styles.content}>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <OrderPages />
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
