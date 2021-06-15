import {observer} from 'mobx-react-lite';
import {LogoutOutlined} from '@ant-design/icons';

import {useAuthStore} from '@/domain/auth/hooks';
import {Button} from 'antd';


type LogoutButtonProps = {
    className?: string;
}

const LogoutButton = observer(({className}: LogoutButtonProps) => {
    const authStore = useAuthStore();

    const logout = () =>
        authStore.logout();

    if (!authStore.authorized) return null;

    return (
        <Button
            type="primary"
            className={className}
            onClick={logout}
        >
            <LogoutOutlined /> Выйти
        </Button>
    );
});

export default LogoutButton;
