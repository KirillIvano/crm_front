import {Button, Space} from 'antd';

import {AdminForm} from '@/admin-lib';
import {useNotification} from '@/hooks/useNotification';
import {Input} from '@/uikit';
import {getApiUrl} from '@/utils/getApiUrl';


export const CreateProduct = () => {
    const notification = useNotification();

    const handleSuccess = () =>
        notification.info({message: 'Вы успешно создали'});

    const handleError = () => {
        notification.error({message: 'Не удалось войти'});
    };

    return (
        <div>
            <AdminForm
                action={getApiUrl('/product')}
                method="POST"
                onSuccess={handleSuccess}
                onError={handleError}
                redirectTo="/product"
                authorized
            >
                <Space size={12} direction="vertical">
                    <Input
                        label="Имя"
                        required="Имя обязательно"
                        type="text"
                        name="name"
                    />
                    <Input
                        label="Цена"
                        required="Цена обязательна"
                        type="number"
                        name="price"
                    />

                    <Button
                        type="primary"
                        htmlType="submit"
                    >
                        Создать
                    </Button>
                </Space>
            </AdminForm>
        </div>
    );
};
