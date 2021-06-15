import {useState} from 'react';
import cn from 'classnames';

import {Input} from '@/uikit';
import {CustomerSuggestions} from '@/pages/Order/components';

import styles from './styles.scss';
import {useFormContext, useWatch} from 'react-hook-form';


export const CustomerInput = () => {
    const {setValue} = useFormContext();
    const customerId = useWatch({name: 'customerId'});

    const [areSuggestionsVisible, setSuggestionsVisible] = useState(false);

    const showConditions = () => setSuggestionsVisible(true);
    const hideConditions = () => setSuggestionsVisible(false);

    return (
        <div className={styles.customerInputContainer}>
            <Input
                type="number"
                name="customerId"
                onFocus={showConditions}
                onBlur={hideConditions}
            />

            <CustomerSuggestions
                className={cn(
                    styles.suggestions,
                    {[styles.hidden]: !areSuggestionsVisible},
                )}
                search={customerId}
                onSelect={id => setValue('customerId', parseInt(id))}
            />
        </div>
    );
};
