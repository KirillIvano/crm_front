import React from 'react';

import {AdminForm} from '@/admin-lib';

import styles from './styles.scss';


const INVALIDATION = [];

const DeleteBtn = () => (
    <div>
        <AdminForm
            method="DELETE"
            invalidate=""
        >

        </AdminForm>
    </div>
);

export default DeleteBtn;
