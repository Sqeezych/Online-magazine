import { getUser } from './get-user.js';
import { addUser } from './add-user.js';
import { sessions } from '../sessions.js';
// import { createSession } from './create-session.js';

export const server = {
	async authorize(authLogin, authPassword) {
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
				roleId: user.role_id,
				session,
			},
		};
	},

	async register(regLogin, regPassword) {
		const user = await getUser(regLogin);

		if (user) {
			return {
				error: 'Пользователь с таким логином уже существует',
				res: null,
			};
		}

		await addUser(regLogin, regPassword);

		return {
			error: null,
			res: null,
		};
	},
};
