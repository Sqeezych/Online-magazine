import { ACTION_TYPES } from '../actions';

export interface AppStateType {
	wasLogout: boolean;
	wasRegistered: boolean;
	isFiltered: boolean;
}

interface LogoutType {
	type: typeof ACTION_TYPES.LOGOUT;
}

interface ChangeIsFilteredType {
	type: typeof ACTION_TYPES.CHANGE_IS_FILTERED;
}

type AppActions = LogoutType | ChangeIsFilteredType;

const initialAppState: AppStateType = {
	wasLogout: false,
	wasRegistered: false,
	isFiltered: false,
};

export const appReducer = (state = initialAppState, action: AppActions) => {
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
