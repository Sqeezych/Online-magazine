import { RootState } from '../store';
export const selectCheckedCategories = (state: RootState) => state.categories.checkedCategories;
