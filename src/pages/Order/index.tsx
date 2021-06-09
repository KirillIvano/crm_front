import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {OrdersTable} from './components';


import OrderCreate from './create';



const OrderPages = () => {
    return (
        <div>
            <OrdersTable />

            <Switch>
                <Route path="/order/create" component={OrderCreate} />
            </Switch>
        </div>
    );
};

export default OrderPages;
