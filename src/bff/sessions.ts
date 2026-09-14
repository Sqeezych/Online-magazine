import { ROLES } from './constants';
import type { User, UserSession } from '../types';

interface SessionsType {
	list: Record<string, UserSession>;
	add: (hash: string, user: UserSession) => void;
	create: (user: Omit<User, 'password'>) => string;
	remove: (hash: string) => void;
	checkAccess: (hash: string, accessRoles: typeof ROLES[keyof typeof ROLES][]) => boolean;
}

export const sessions: SessionsType = {
	list: {},

	add(hash, user) {
		this.list[hash] = user;
	},

	create(user) {
		const hash = Math.random().toFixed(50);
		this.add(hash, { ...user, session: hash });
		return hash;
	},

	remove(hash) {
		delete this.list[hash];
	},

	checkAccess(hash, accessRoles) {
		const user = this.list[hash];
		return !!user && accessRoles.includes(user.roleId);
	},
};
