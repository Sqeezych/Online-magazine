import { getUser } from './get-user.js';
import { addUser } from './add-user.js';
import { createSession } from './create-session.js';

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

		const session = createSession(user.role_id);

		return {
			error: null,
			res: session,
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

		const session = createSession(user.role_id);

		return {
			error: null,
			res: session,
		};
	},
};
