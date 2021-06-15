import {IAuthStore} from '@/di/interfaces/IAuthStore';
import {DINames} from '@/di/keys';
import {useInject} from '@/di/useInject';

export const useAuthStore = (): IAuthStore =>
    useInject(DINames.AUTH_STORE);
