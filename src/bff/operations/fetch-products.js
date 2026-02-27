import { getProducts } from '../api';

export const fetchProducts = async () => {
	try {
		const products = await getProducts();
		return {
			error: null,
			res: products,
		};
	} catch (error) {
		return {
			error: error.message,
			res: null,
		};
	}
};
