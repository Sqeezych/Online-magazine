import { ACTION_TYPES } from '../action-types';

export const removeCheckedCategory = (categoryId) => ({
	type: ACTION_TYPES.REMOVE_CHECKED_CATEGORY,
	payload: categoryId,
});
