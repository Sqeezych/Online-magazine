import { getFormatedDate } from '../utils';

export const addUser = (login: string, password: string) =>
	fetch('http://localhost:3000/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			login,
			password,
			registered_at: getFormatedDate(),
			role_id: 2,
		}),
	});
