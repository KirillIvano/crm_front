import {ChangeEvent, InputHTMLAttributes} from 'react';
import {RegisterOptions, useController} from 'react-hook-form';


export type CommonValidationProps =
    'min' | 'max' | 'maxLength' | 'pattern' | 'required';

export type AdminInputProps = {
    name: string;
} & Pick<RegisterOptions, CommonValidationProps>
    & Omit<InputHTMLAttributes<HTMLInputElement>, CommonValidationProps>;

const AdminInput = ({
    name,
    type,
    min,
    max,
    maxLength,
    pattern,
    required,
    onChange,

    ...props
}: AdminInputProps) => {
    const controller = useController({
        name,
        rules: {min, max, maxLength, required, pattern},
    });
    const {field} = controller;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e);
        const {value} = e.target;

        if (type === 'number') {
            field.onChange(value ? parseInt(value) : '');
        } else {
            field.onChange(value);
        }
    };

    return (
        <input
            {...field}
            {...props}

            value={field.value ?? ''}
            required={!!required}
            onChange={handleChange}
            name={name}
            type={type}
        />
    );
};

export default AdminInput;
