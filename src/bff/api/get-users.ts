import { transformUser } from "../transformers";
import type { User } from '../../types/domain';
import type { DbUser } from '../types';

export const getUsers = async (): Promise<User[]> => {
	const URL = 'http://localhost:3000/users';
	const response = await fetch(URL);

	if (!response.ok) {
		throw new Error("Ошибка при получении списка пользователей");
	}

	const users: DbUser[] = await response.json();
	return users.map((user: DbUser) => transformUser(user))
}
