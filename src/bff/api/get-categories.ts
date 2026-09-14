import type { Category } from '../../types/domain';

export const getCategories = async (): Promise<Category[]> => {
	const response = await fetch('http://localhost:3000/categories');

	if (!response.ok) {
		throw new Error('Ошибка при получении списка категорий');
	}
	return response.json();
};
