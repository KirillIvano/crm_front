import {observable, makeObservable, action} from 'mobx';

import {request} from '@/utils/request';
import {AdminRequestInit, RequestProvider} from '@/admin-lib/types/requests';
import {IAuthStore} from '@/di/interfaces/IAuthStore';
import {getApiUrl} from '@/utils/getApiUrl';


export class AuthStore implements IAuthStore {
    @observable
    authorized = false;

    @observable
    initialAuthChecked = false;

    constructor() {
        makeObservable(this);
    }

    @action
    resetAuth() {
        this.authorized = false;
    }

    @action
    logout() {
        this.authorized = false;
    }

    @action
    authorize() {
        this.authorized = true;
    }

    @action
    ping = async () => {
        const {status} = await this.request(getApiUrl('/ping'), {credentials: 'include'});

        this.authorized = status < 400;
        this.initialAuthChecked = true;
    }

    @action
    request: RequestProvider = async <TRes extends Record<string, unknown>>(
        url: string,
        options?: AdminRequestInit,
    ) => {
        const req = await request<TRes>(url, options);

        if (options?.authenticate && req.status === 401) {
            this.resetAuth();
        }

        return req;
    }
}
