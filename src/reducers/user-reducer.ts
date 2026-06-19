import { ROLES } from '../constants';
import { ACTION_TYPES } from '../actions';

export interface UserStateType {
	id: string;
	login: string;
	roleId: typeof ROLES[keyof typeof ROLES];
	session: string;
}

const initialUserState: UserStateType = {
	id: '',
	login: '',
	roleId: ROLES.GUEST,
	session: '',
};

interface SetUserType {
	type: typeof ACTION_TYPES.SET_USER;
	payload: {
		id: string;
		login: string;
		roleId: typeof ROLES[keyof typeof ROLES];
		session: string;
	};
}

interface LogoutType {
	type: typeof ACTION_TYPES.LOGOUT;
}

type UserActions = SetUserType | LogoutType;

export const userReducer = (state = initialUserState, action: UserActions) => {
	switch (action.type) {
		case ACTION_TYPES.SET_USER:
			return {
				...state,
				id: action.payload.id,
				login: action.payload.login,
				roleId: action.payload.roleId,
				session: action.payload.session,
			};

		case ACTION_TYPES.LOGOUT:
			return initialUserState;

		default:
			return state;
	}
};
