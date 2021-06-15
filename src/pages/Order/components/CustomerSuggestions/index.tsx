import {Spin} from 'antd';

import {Suggestions} from '@/components';
import {ResponseType} from '@/admin-lib/types/requests';
import {getApiUrl} from '@/utils/getApiUrl';
import {CustomerPreview} from '@/domain/customer/types';
import {useAuthenticatedData} from '@/hooks/useAuthenticatedData';


const CustomerSuggestion = ({
    name,
}: CustomerPreview) => (
    <div>{name}</div>
);

export type CustomerSuggestionsProps = {
    className?: string;
    onSelect: (id: number) => void;
}

const INDEXED_PROPS = ['name' as const];
const CustomerSuggestions = ({
    className,
}: CustomerSuggestionsProps) => {
    const {data, isLoading} = useAuthenticatedData<ResponseType<CustomerPreview[]>>(getApiUrl('/customer/all'));

    if (isLoading || !data) return <Spin size="large" />;

    return (
        <div className={className}>
            <Suggestions
                items={data.data}
                indexedProps={INDEXED_PROPS}
                component={CustomerSuggestion}
            />
        </div>
    );
};

export default CustomerSuggestions;
