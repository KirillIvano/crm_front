import React from 'react';
import classnames from 'classnames';

import styles from './styles.scss';


type GapProps = {
    className?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg';
    direction?: 'vertical' | 'horizontal';
}

const Gap = ({
    className,
    size = 'md',
    direction = 'vertical',
}: GapProps) => (
    <div
        className={classnames(
            className,
            styles[direction],
            styles[size],
        )}
        aria-hidden="true"
    />
);

export default Gap;
