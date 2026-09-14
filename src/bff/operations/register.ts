import { getUser, addUser } from '../api';
import { getErrorMessage } from '../utils';
import type { ServerResponse } from '../types';

export const register = async (regLogin: string, regPassword: string): Promise<ServerResponse<null>> => {
	try {
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

	} catch (error) {
		return {
			error: getErrorMessage(error),
			res: null,
		}
	};
};
