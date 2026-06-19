import { ACTION_TYPES } from '../action-types.js';
import { server } from '../../bff/index.js';

interface LogoutType {
	type: typeof ACTION_TYPES.LOGOUT;
}

export const logout = (session: string): LogoutType => {
	server.logout(session);
	return { type: ACTION_TYPES.LOGOUT };
};
