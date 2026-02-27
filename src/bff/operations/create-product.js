import { addProduct } from '../api';
import { sessions } from '../sessions.js';
import { ROLES } from '../constants/index.js';

export const createProduct = async (userSession, productData) => {
	const accessRoles = [ROLES.ADMIN];

	if (!sessions.checkAccess(userSession, accessRoles)) {
		return {
			error: 'Нет доступа к добавлению товара',
			res: null,
		};
	}
	try {
		await addProduct(productData);
		return {
			error: null,
			res: 'Товар успешно добавлен',
		};
	} catch (error) {
		return {
			error: error.message,
			res: null,
		};
	}
};
