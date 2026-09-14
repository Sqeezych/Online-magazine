import { getFormatedDate } from '../utils';
import { ROLES } from '../constants';

export const addUser = async (login: string, password: string): Promise<void> => {
	const response = await fetch('http://localhost:3000/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			login,
			password,
			registered_at: getFormatedDate(),
			role_id: ROLES.BUYER,
		}),
	});

	if (!response.ok) {
		throw new Error('Ошибка при добавлении пользователя');
	}
}
