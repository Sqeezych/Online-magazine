import { ACTION_TYPES } from '../actions';

const initialCategoriesState = {
	categories: [],
	checkedCategories: [],
};

export const categoriesReducer = (state = initialCategoriesState, action) => {
	switch (action.type) {
		case ACTION_TYPES.GET_CATEGORIES: {
			const updatedCategories = action.payload.map((category) => ({
				...category,
				checked: false,
			}));

			return {
				...state,
				categories: action.payload,
			};
		}
		case ACTION_TYPES.ADD_CHECKED_CATEGORY: {
			return {
				...state,
				checkedCategories: [...state.checkedCategories, action.payload],
			};
		}
		case ACTION_TYPES.REMOVE_CHECKED_CATEGORY: {
			const updatedCheckedCategories = [...state.checkedCategories].filter(
				(e) => e !== action.payload,
			);

			return {
				...state,
				checkedCategories: updatedCheckedCategories,
			};
		}
		default:
			return state;
	}
};
