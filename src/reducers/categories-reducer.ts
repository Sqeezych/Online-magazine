import { ACTION_TYPES } from '../actions';

interface Category {
	id: number;
	name: string;
}
export interface CategoriesStateType {
	categories: Category[];
	checkedCategories: number[];
}

const initialCategoriesState: CategoriesStateType = {
	categories: [],
	checkedCategories: [],
};


interface GetCategoriesType {
	type: typeof ACTION_TYPES.GET_CATEGORIES;
	payload: Category[];
}

interface AddCheckedCategoryType {
	type: typeof ACTION_TYPES.ADD_CHECKED_CATEGORY;
	payload: number;
}

interface RemoveCheckedCategoryType {
	type: typeof ACTION_TYPES.REMOVE_CHECKED_CATEGORY;
	payload: number;
}

interface ResetCheckedCategoriesType {
	type: typeof ACTION_TYPES.RESET_CHECKED_CATEGORIES;
}

type CategoriesActions = GetCategoriesType | AddCheckedCategoryType | RemoveCheckedCategoryType | ResetCheckedCategoriesType;


export const categoriesReducer = (state = initialCategoriesState, action: CategoriesActions) => {
	switch (action.type) {
		case ACTION_TYPES.GET_CATEGORIES: {
			return {
				...state,
				categories: action.payload,
			};
		}
		case ACTION_TYPES.ADD_CHECKED_CATEGORY: {
			if(state.checkedCategories.includes(action.payload)) {
				return state;
			} else {
				return {
					...state,
					checkedCategories: [...state.checkedCategories, action.payload],
				};
			}

		}
		case ACTION_TYPES.REMOVE_CHECKED_CATEGORY: {
			const updatedCheckedCategories = [...state.checkedCategories].filter(
				(checkedCategory) => checkedCategory !== action.payload,
			);

			return {
				...state,
				checkedCategories: updatedCheckedCategories,
			};
		}

		case ACTION_TYPES.RESET_CHECKED_CATEGORIES: {
			return {
				...state,
				checkedCategories: [],
			};
		}
		default:
			return state;
	}
};
