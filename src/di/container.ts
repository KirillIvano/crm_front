import {Container} from 'inversify';


import {DINames} from './keys';

import {IAuthStore} from './interfaces/IAuthStore';
import {AuthStore} from '@/domain/auth/store';


const container = new Container();

container.bind<IAuthStore>(DINames.AUTH_STORE).toConstantValue(new AuthStore());

export {container};
