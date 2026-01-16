import { changeProduct } from './session';
import { ROLES } from '../../constants';

export const createSession = (roleId) => {
	const session = {
		logout() {
			Object.keys(session).forEach((key) => {
				delete session[key];
			});
		},
	};

	switch (roleId) {
		case ROLES.ADMIN: {
			session.changeProduct = changeProduct;
			break;
		}
		case ROLES.MODERATOR: {
			session.changeProduct = changeProduct;
			break;
		}
		case ROLES.BUYER: {
			session.changeProduct = changeProduct;
			break;
		}
		default:
		// Ничего не делаем
	}

	return session;
};
