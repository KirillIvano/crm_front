import {Spin} from 'antd';

import {Suggestions} from '@/components';
import {ResponseType} from '@/admin-lib/types/requests';
import {getApiUrl} from '@/utils/getApiUrl';
import {CustomerPreview} from '@/domain/customer/types';
import {useAuthenticatedData} from '@/hooks/useAuthenticatedData';

import styles from './styles.scss';


export type CustomerSuggestionProps = {
    onClick?: (item: CustomerPreview) => void;
} & CustomerPreview;

const CustomerSuggestion = ({
    onClick,
    ...item
}: CustomerSuggestionProps) => (
    <button
        onClick={() => onClick?.(item)}
        className={styles.customerSuggestion}
        type="button"
    >
        {item.name}
    </button>
);

export type CustomerSuggestionsProps = {
    search: string;
    className?: string;

    onSelect: (id: string) => void;
}

const INDEXED_PROPS = ['id' as const];
const CustomerSuggestions = ({
    className,
    search,

    onSelect,
}: CustomerSuggestionsProps) => {
    const {data, isLoading} = useAuthenticatedData<ResponseType<CustomerPreview[]>>(
        getApiUrl('/customer/all'),
    );

    if (isLoading || !data) return <Spin size="large" />;

    return (
        <div className={className}>
            <Suggestions
                items={data.data}
                indexedProps={INDEXED_PROPS}
                search={search}

                onItemSelect={item => onSelect(String(item.id))}
                component={CustomerSuggestion}
            />
        </div>
    );
};

export default CustomerSuggestions;
