import { ACTION_TYPES } from '../actions';

const initialCategoriesState = {
	categories: [],
};

export const categoriesReducer = (state = initialCategoriesState, action) => {
	switch (action.type) {
		case ACTION_TYPES.GET_CATEGORIES: {
			return {
				...state,
				categories: action.payload,
			};
		}
		default:
			return state;
	}
};
