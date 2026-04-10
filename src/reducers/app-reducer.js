import { ACTION_TYPES } from '../actions';

const initialAppState = {
	wasLogout: false,
	wasRegistered: false,
	isFiltered: false,
	productForLocation: {},
};

export const appReducer = (state = initialAppState, action) => {
	switch (action.type) {
		case ACTION_TYPES.LOGOUT: {
			return {
				...state,
				wasLogout: !state.wasLogout,
			};
		}

		case ACTION_TYPES.CHANGE_IS_FILTERED: {
			return {
				...state,
				isFiltered: !state.isFiltered,
			};
		}

		case ACTION_TYPES.SET_PRODUCT_FOR_LOCATION: {
			return {
				...state,
				productForLocation: action.payload,
			};
		}

		default:
			return state;
	}
};
