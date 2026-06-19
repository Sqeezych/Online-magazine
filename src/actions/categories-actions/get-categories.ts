import { ACTION_TYPES } from '../action-types';

type Category = {
	id: number;
	name: string;
}

interface GetCategoriesType {
	type: typeof ACTION_TYPES.GET_CATEGORIES;
	payload: Category[];
}

export const getCategories = (categories: Category[]): GetCategoriesType => ({
	type: ACTION_TYPES.GET_CATEGORIES,
	payload: categories,
});
