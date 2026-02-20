import { ACTION_TYPES } from '../action-types.js';
import { server } from '../../bff/bff/index.js';

export const logout = (session) => {
	server.logout(session);
	return { type: ACTION_TYPES.LOGOUT };
};
