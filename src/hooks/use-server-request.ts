import { useSelector } from 'react-redux';
import { server } from '../bff';
import type { OPERATIONS } from '../constants';
import { selectUserSession } from '../selectors';
import { OPERATIONS_WITHOUT_SESSION } from '../constants';

export const useServerRequest = () => {
	const session = useSelector(selectUserSession);

	return (operation: typeof OPERATIONS[keyof typeof OPERATIONS], ...params) => {
		const request = OPERATIONS_WITHOUT_SESSION.includes(operation)
			? params
			: [session, ...params];

		return server[operation](...request);
	};
};
