import { transformProduct } from '../transformers';
import type { Product } from '../../types/domain';
import type { DbProduct } from '../types';

export const getProducts = async (URL: string): Promise<Product[]> => {
	const response = await fetch(URL);

	if (!response.ok) {
		throw new Error('Ошибка при получении списка товаров');
	}

	const dbProducts: DbProduct[] = await response.json();
	return dbProducts.map((elem: DbProduct) => transformProduct(elem));
};
