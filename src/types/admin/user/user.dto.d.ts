import { type PageParams } from '@/types/complex/services';

import { type User } from './user';

export interface UserSaveDTO extends User {}

export interface UserQueryDTO extends User, PageParams {}
