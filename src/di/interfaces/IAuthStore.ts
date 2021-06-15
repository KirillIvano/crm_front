import {RequestProvider} from '@/admin-lib/types/requests';

export interface IAuthStore {
    authorized: boolean;
    request: RequestProvider;

    authorize(): void;
}
