import { transformUser } from "../transformers";
import type { User } from '../../types/domain';
import type { DbUser } from '../types';

export const getUser = async (loginToFind: string): Promise<User | null> => {
	const URL = `http://localhost:3000/users/?login=${loginToFind}`;
	const response = await fetch(URL);

	if (!response.ok) {
		throw new Error('Ошибка при получении пользователя');
	}

	const users: DbUser[] = await response.json();

	if (users[0]) {
		return transformUser(users[0]);
	} else {
		return null;
	}
}
