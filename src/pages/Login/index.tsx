import {useHistory} from 'react-router-dom';
import {Button, Space} from 'antd';

import {AdminForm} from '@/admin-lib';
import {useAuthStore} from '@/domain/auth/hooks';
import {useQuery} from '@/hooks/useQuery';
import {useNotification} from '@/hooks/useNotification';
import {Input} from '@/uikit';
import {getApiUrl} from '@/utils/getApiUrl';


const Login = () => {
    const {from} = useQuery<{from?: string}>();
    const history = useHistory();
    const authStore = useAuthStore();
    const notification = useNotification();

    const handleSuccess = () => {
        authStore.authorize();
        notification.info({message: 'Вы успешно вошли'});
        history.push(from ?? '/');
    };

    const handleError = () => {
        notification.error({message: 'Не удалось войти'});
    };

    return (
        <div>
            <AdminForm
                action={getApiUrl('/login')}
                method="POST"
                onSuccess={handleSuccess}
                onError={handleError}
                defaultValues={{username: 'username', password: 'password'}}
            >
                <Space size={12} direction="vertical">
                    <Input required type="text" name="username" />
                    <Input required type="password" name="password" />

                    <Button htmlType="submit">Войти</Button>
                </Space>
            </AdminForm>
        </div>
    );
};

export default Login;
