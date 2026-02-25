import { getCategories } from '../api';
import { sessions } from '../sessions.js';
import { ROLES } from '../constants';

export const fetchCategories = async (userSession) => {
	const accessRoles = [ROLES.ADMIN];

	if (!sessions.checkAccess(userSession, accessRoles)) {
		return {
			error: 'Нет доступа к категориям',
			res: null,
		};
	}

	const categories = await getCategories();

	return {
		error: null,
		res: categories,
	};
};
