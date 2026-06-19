import { addProduct } from '../api';
import { sessions } from '../sessions.js';
import { ROLES } from '../constants/index.js';

interface ProductDataType {
	category: string;
	count: string;
	description: string;
	image: string;
	name: string;
	price: string;
}

export const createProduct = async (userSession: string, productData: ProductDataType) => {
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
