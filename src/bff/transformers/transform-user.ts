import type { User } from '../../types/domain';
import type { DbUser } from '../types';

export const transformUser = (dbUser: DbUser): User => ({
    id: dbUser.id,
    login: dbUser.login,
    password: dbUser.password,
    registeredAt: dbUser.registered_at,
    roleId: dbUser.role_id,
})
