import { getProduct } from '../api';

export const fetchProduct = async (productId) => {
	let URL = 'http://localhost:3000/products' + '/' + productId;

	try {
		const productFromServer = await getProduct(URL);
		return {
			error: null,
			res: productFromServer,
		};
	} catch (error) {
		return {
			error: error.message,
			res: null,
		};
	}
};
