import { ACTION_TYPES } from '../action-types';

export const getCategories = (categories) => ({
	type: ACTION_TYPES.GET_CATEGORIES,
	payload: categories,
});
