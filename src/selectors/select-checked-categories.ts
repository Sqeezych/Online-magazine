import { RootState } from '../types/store-types';
export const selectCheckedCategories = (state: RootState) => state.categories.checkedCategories;
