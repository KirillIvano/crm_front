import {Route, Switch} from 'react-router-dom';

import {CreateProduct} from './create';
import {ProductsMain} from './main';

const ProductPages = () => {
    return (
        <Switch>
            <Route exact path="/product" component={ProductsMain} />
            <Route exact path="/product/create" component={CreateProduct} />
        </Switch>
    );
};

export default ProductPages;
