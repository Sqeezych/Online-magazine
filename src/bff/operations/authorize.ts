import { getUser } from '../api/index.js';
import { sessions } from '../sessions.js';
import { ROLES } from '../constants';

interface AuthorizeProps {
	authLogin: string;
	authPassword: string;
}

interface Response {
	id: string,
	login: string,
	roleId: typeof ROLES[keyof typeof ROLES],
	session: string,
}

interface AuthorizeReturn {
	error: string | null;
	res: null | Response;
}

export const authorize = async ({authLogin, authPassword}: AuthorizeProps): AuthorizeReturn => {
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
	} catch (error) {
		throw new Error('Ошибка при авторизации. Попробуйте позже');
	}
};
