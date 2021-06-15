import 'antd/dist/antd.min.css';
import './main.scss';

import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import {Admin} from '@/admin-lib';

import {App} from './App';
import {container} from './di/container';
import {DINames} from './di/keys';
import {IAuthStore} from './di/interfaces/IAuthStore';

// TODO: тут конечно стоит по другому подумать
const authService = container.get(DINames.AUTH_STORE) as IAuthStore;

render(
    <BrowserRouter>
        <Admin requestProvider={authService.request}>
            <App />
        </Admin>
    </BrowserRouter>,
    document.getElementById('root'),
);
