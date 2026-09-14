import { transformProduct } from '../transformers';
import type { Product } from '../../types/domain';
import type { DbProduct } from '../types';

export const getProduct = async (URL: string): Promise<Product> => {
	const response = await fetch(URL);

	if (!response.ok) {
		throw new Error('Ошибка при получении товара')
	}

	const dbProduct: DbProduct = await response.json();
	return transformProduct(dbProduct);
}
