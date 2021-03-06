import {Switch, Route} from 'react-router-dom';

import OrderCreate from './create';
import {OrderEdit} from './edit';
import OrderMain from './main';
import OrderShow from './show';


const OrderPages = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/order" component={OrderMain} />
                <Route exact path="/order/create" component={OrderCreate} />
                <Route exact path="/order/show/:orderId" component={OrderShow} />
                <Route exact path="/order/edit/:orderId" component={OrderEdit} />
            </Switch>
        </div>
    );
};

export default OrderPages;
