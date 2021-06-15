import {useEffect, ComponentProps} from 'react';
import {observer} from 'mobx-react-lite';
import {Route, useHistory} from 'react-router-dom';
import {notification} from 'antd';

import {useAuthStore} from '@/domain/auth/hooks';


export type AuthenticatedRouteProps = ComponentProps<typeof Route>;

const AuthenticatedRoute = observer((props: AuthenticatedRouteProps) => {
    const history = useHistory();
    const authStore = useAuthStore();

    useEffect(() => {
        if (!authStore.authorized) {
            history.push(`/login?from=${history.location.pathname}`);
            notification.info({message: 'Необходимо войти в систему'});
        }
    }, [history, authStore]);

    if (!authStore.authorized) return null;

    return (
        <Route {...props} />
    );
});

export default AuthenticatedRoute;
