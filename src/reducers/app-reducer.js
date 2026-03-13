import { ACTION_TYPES } from '../actions';

const initialAppState = {
	wasLogout: false,
	wasRegistered: false,
	isFiltered: false,
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

		default:
			return state;
	}
};
