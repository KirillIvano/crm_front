import {useParams} from 'react-router';

export const useOrderId = <TParams extends Record<string, string | undefined>>() =>
    +(useParams<TParams>().orderId as string);
