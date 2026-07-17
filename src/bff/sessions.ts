import { ROLES } from '../constants';

interface User {
	id: string,
	login: string,
	password: string,
	registeredAt: string,
	roleId: typeof ROLES[keyof typeof ROLES],
}

export const sessions = {
	list: {},
	create(user: User) {
		const hash = Math.random().toFixed(50);
		this.list[hash] = user;
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
