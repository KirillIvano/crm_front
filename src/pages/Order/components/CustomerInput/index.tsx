import {useState} from 'react';
import cn from 'classnames';
import {useFormContext, useWatch} from 'react-hook-form';

import {Input} from '@/uikit';
import {CustomerSuggestions} from '@/pages/Order/components';

import styles from './styles.scss';


export const CustomerInput = () => {
    const {setValue} = useFormContext();
    const customerId = useWatch({name: 'customerId'});

    const [areSuggestionsVisible, setSuggestionsVisible] = useState(false);

    const showSuggestions = () => setSuggestionsVisible(true);
    const hideSuggestions = () => setSuggestionsVisible(false);
    const handleSelect = (id: string) => {
        setValue('customerId', parseInt(id));
        hideSuggestions();
    };

    return (
        <div className={styles.customerInputContainer}>
            <Input
                label="ID покупателя"
                type="text"
                name="customerId"
                onFocus={showSuggestions}
                onBlur={hideSuggestions}
                autoComplete="off"
            />

            <CustomerSuggestions
                className={cn(
                    styles.suggestions,
                    {[styles.hidden]: !areSuggestionsVisible},
                )}
                search={customerId}
                onSelect={handleSelect}
            />
        </div>
    );
};
