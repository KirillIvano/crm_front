import React from 'react';
import {Switch, Route} from 'react-router-dom';

import styles from './styles.module.scss';

const Category = () => {
    return (
        <Switch>
            <Route path="/create" />
        </Switch>
    );
};

export default Category;
