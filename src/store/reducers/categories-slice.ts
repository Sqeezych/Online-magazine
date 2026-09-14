import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Category } from '../../types';

export interface CategoriesState {
	categories: Category[];
	checkedCategories: number[];
}

const initialState: CategoriesState = {
	categories: [],
	checkedCategories: [],
};

export const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {
		setCategories(state, action: PayloadAction<Category[]>) {
			state.categories = action.payload;
		},
		addCheckedCategory(state, action: PayloadAction<number>) {
			if (state.checkedCategories.includes(action.payload)) {
				return;
			} else {
				state.checkedCategories.push(action.payload);
			}
		},
		removeCheckedCategory(state, action: PayloadAction<number>) {
			state.checkedCategories = state.checkedCategories.filter(
				(checkedCategory) => checkedCategory !== action.payload,
			);
		},
		resetCheckedCategories(state) {
			state.checkedCategories = initialState.checkedCategories;
		}
	}
})

export const {
	setCategories,
	addCheckedCategory,
	removeCheckedCategory,
	resetCheckedCategories
} = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;