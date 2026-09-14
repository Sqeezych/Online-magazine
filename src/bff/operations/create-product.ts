import { addProduct } from '../api';
import { sessions } from '../sessions.js';
import { ROLES } from '../constants/index.js';
import { getErrorMessage } from '../utils';
import type { ServerResponse } from '../types';
import type { ProductDataType } from '../api';

export const createProduct = async (userSession: string, productData: ProductDataType): Promise<ServerResponse<string>> => {
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
			error: getErrorMessage(error),
			res: null,
		};
	}
};
