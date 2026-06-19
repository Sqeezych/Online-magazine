import { ACTION_TYPES } from '../action-types';

interface RemoveCheckedCategoryType {
	type: typeof ACTION_TYPES.REMOVE_CHECKED_CATEGORY;
	payload: number;
}

export const removeCheckedCategory = (categoryId: number): RemoveCheckedCategoryType => ({
	type: ACTION_TYPES.REMOVE_CHECKED_CATEGORY,
	payload: categoryId,
});
