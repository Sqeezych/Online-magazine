import { ACTION_TYPES } from '../action-types';

export const addCheckedCategory = (categoryId) => ({
	type: ACTION_TYPES.ADD_CHECKED_CATEGORY,
	payload: categoryId,
});
