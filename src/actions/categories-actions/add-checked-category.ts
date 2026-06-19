import { ACTION_TYPES } from '../action-types';

interface AddCheckedCategoryType {
	type: typeof ACTION_TYPES.ADD_CHECKED_CATEGORY;
	payload: number;
}

export const addCheckedCategory = (categoryId: number): AddCheckedCategoryType => ({
	type: ACTION_TYPES.ADD_CHECKED_CATEGORY,
	payload: categoryId,
});
