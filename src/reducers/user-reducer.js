import { ROLES } from '../constants';

const initialUserState = {
	id: null,
	login: null,
	roleId: ROLES.GUEST,
	session: null,
};

export const userReducer = (state = initialUserState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
