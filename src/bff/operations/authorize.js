import { getUser } from '../api';
import { sessions } from '../sessions.js';

export const authorize = async (authLogin, authPassword) => {
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

	const session = sessions.create(user);

	return {
		error: null,
		res: {
			id: user.id,
			login: user.login,
			roleId: user.roleId,
			session,
		},
	};
};
