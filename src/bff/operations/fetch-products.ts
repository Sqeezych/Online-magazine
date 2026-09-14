import { getProducts } from '../api';
import { getErrorMessage } from '../utils';
import type { Product } from '../../types';
import type { ServerResponse } from '../types';

export interface FetchProductsProps {
	searchPhrase: null | string;
	checkedCategories: number[];
}

export const fetchProducts = async ({ searchPhrase = null, checkedCategories }: FetchProductsProps): Promise<ServerResponse<Product[]>> => {
	let URL = 'http://localhost:3000/products';

	if (searchPhrase) {
		URL = `${URL}?q=${searchPhrase}`;
	}

	try {
		const products = await getProducts(URL);

		let productsForResponse;
		if (checkedCategories.length !== 0) {
			productsForResponse = products.filter((product) =>
				checkedCategories.includes(product.categoryId),
			);
		} else {
			productsForResponse = products;
		}

		return {
			error: null,
			res: productsForResponse,
		};
	} catch (error) {
		return {
			error: getErrorMessage(error),
			res: null,
		};
	}
};
