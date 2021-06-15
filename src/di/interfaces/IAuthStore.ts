import {RequestProvider} from '@/admin-lib/types/requests';

export interface IAuthStore {
    authorized: boolean;
    initialAuthChecked: boolean;

    request: RequestProvider;
    authorize(): void;
    logout(): void;
    ping(): void;
}
