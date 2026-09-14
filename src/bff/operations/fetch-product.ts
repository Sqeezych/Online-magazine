import { getProduct } from '../api';
import { getErrorMessage } from '../utils';
import type { Product } from '../../types';
import type { ServerResponse } from '../types';

export const fetchProduct = async (productId: string): Promise<ServerResponse<Product>> => {
	const URL = `http://localhost:3000/products/${productId}`;

	try {
		const product = await getProduct(URL);
		return {
			error: null,
			res: product,
		};
	} catch (error) {
		return {
			error: getErrorMessage(error),
			res: null,
		};
	}
};
