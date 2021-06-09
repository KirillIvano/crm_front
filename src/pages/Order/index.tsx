import React from 'react';
import {Switch, Route} from 'react-router-dom';


import OrderCreate from './create';



const OrderPages = () => {
    return (
        <Switch>
            <Route path="/order/create" component={OrderCreate} />
        </Switch>
    );
};

export default OrderPages;
