import {ChangeEvent, InputHTMLAttributes} from 'react';
import {RegisterOptions, useController} from 'react-hook-form';
import {ErrorMessage} from '@hookform/error-message';

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
    const {field, formState} = controller;
    const {errors} = formState;

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
        <div>
            <input
                {...field}
                {...props}

                value={field.value ?? ''}
                required={!!required}
                onChange={handleChange}
                name={name}
                type={type}
            />

            <ErrorMessage
                errors={errors}
                name={name}
                render={({message}) => <p>{message}</p>}
            />
        </div>
    );
};

export default AdminInput;
