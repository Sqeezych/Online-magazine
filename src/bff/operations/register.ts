import { getUser, addUser } from '../api';

export const register = async (regLogin, regPassword) => {
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
};
