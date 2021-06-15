import {ReactNode} from 'react';
import cn from 'classnames';

import AdminInput, {AdminInputProps} from '@/admin-lib/components/AdminInput';

import styles from './styles.scss';


export type InputProps = {
    label?: ReactNode;
    containerClass?: string;
} & AdminInputProps;

const Input = ({
    className,
    containerClass,
    label,
    ...props
}: InputProps) => {
    const Comp = label ? 'label' : 'div';

    return (
        <Comp className={cn(containerClass, styles.container)}>
            <span className={styles.label}>{label}</span>

            <AdminInput
                {...props}
                className={cn(className, styles.input)}
            />
        </Comp>
    );
};

export default Input;
