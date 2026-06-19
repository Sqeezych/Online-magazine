import { ACTION_TYPES } from '../action-types.js';

interface UserType {
	login: string;
	password: string;
	registered_at: string;
	role_id: number;
	id: string;
}

interface SetUserType {
	type: typeof ACTION_TYPES.SET_USER;
	payload: UserType;
}
export const setUser = (user: UserType): SetUserType => ({
	type: ACTION_TYPES.SET_USER,
	payload: user,
});
