import 'antd/dist/antd.min.css';
import './main.scss';

import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import {Admin} from '@/admin-lib';

import {App} from './App';
import {request} from './utils/request';


const ADMIN_PARAMS = {request};

render(
    <BrowserRouter>
        <Admin requestProvider={ADMIN_PARAMS}>
            <App />
        </Admin>
    </BrowserRouter>,
    document.getElementById('root'),
);
