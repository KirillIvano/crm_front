import React, {useEffect, useState} from 'react';

import styles from './styles.scss';


export type SuggestionsListProps<TItem = Record<string, unknown>> = {
    items: TItem[];
    indexedProps: Array<keyof TItem>;
    component: React.FunctionComponent<TItem>;

    search: string;
}

const Suggestions = <TItem extends Record<string, unknown>,>({
    items,
    indexedProps,
    component,
    search,
}: SuggestionsListProps<TItem>) => {
    const [filteredItems, setFilteredItems] = useState(items);

    useEffect(() => {
        setFilteredItems(items);
    }, [items]);

    useEffect(() => {
        if (search) {
            const filtered = items.filter(
                item => indexedProps.map(i => item[i]).join('').includes(search),
            );

            setFilteredItems(filtered);
        } else if (items.length) {
            setFilteredItems(items.slice(0, 20));
        }
    }, [search, indexedProps, items]);

    const Comp = component;

    return (
        <div className={styles.suggestions}>
            {filteredItems.length ? (
                <ul>
                    {filteredItems.map((props, ind) => (
                        <li key={ind} className={styles.suggestionsItem}>
                            <Comp {...props} />
                        </li>
                    ))}
                </ul>
            ) : (
                <div className={styles.placeholder}>Введите другой текст</div>
            )}
        </div>
    );
};

export default Suggestions;
