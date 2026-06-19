import { RootState } from '../types/store-types';
export const selectCategories = (state: RootState) => state.categories.categories;
