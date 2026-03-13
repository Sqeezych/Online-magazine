import { getProducts } from '../api';

export const fetchProducts = async (searchPhrase = null, checkedCategories) => {
	let URL = 'http://localhost:3000/products';

	if (searchPhrase) {
		URL = `${URL}?q=${searchPhrase}`;
	}

	try {
		const productsFromServer = await getProducts(URL);
		let productsForResponse;
		if (checkedCategories.length !== 0) {
			productsForResponse = productsFromServer.filter((product) =>
				checkedCategories.includes(product.category_id),
			);
		} else {
			productsForResponse = productsFromServer;
		}
		return {
			error: null,
			res: productsForResponse,
		};
	} catch (error) {
		return {
			error: error.message,
			res: null,
		};
	}
};
