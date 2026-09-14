import { sessions } from '../sessions.js';

export const logout = async (userSession: string): Promise<void> => {
	sessions.remove(userSession);
};
