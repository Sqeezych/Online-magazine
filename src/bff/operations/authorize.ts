import { getUser } from '../api/index.js';
import { sessions } from '../sessions.js';
import { getErrorMessage } from '../utils';
import type { ServerResponse } from '../types';
import type { UserSession } from '../../types';

export const authorize = async (authLogin: string, authPassword: string): Promise<ServerResponse<UserSession>> => {
	try {
		const user = await getUser(authLogin);

		if (!user) {
			return {
				error: 'Пользователь не найден',
				res: null,
			};
		}

		if (user.password !== authPassword) {
			return {
				error: 'Неправильный пароль',
				res: null,
			};
		}
		const userForSession = {
			id: user.id,
			login: user.login,
			roleId: user.roleId,
			registeredAt: user.registeredAt,
		}

		const session = sessions.create(userForSession);

		return {
			error: null,
			res: {
				id: user.id,
				login: user.login,
				roleId: user.roleId,
				registeredAt: user.registeredAt,
				session,
			},
		};
	} catch (error) {

		return {
			error: getErrorMessage(error),
			res: null,
		}
	}
};
