import { useSelector } from 'react-redux';
import { server } from '../bff';
import { selectUserSession } from '../selectors';
import { OPERATIONS_WITHOUT_SESSION } from '../constants';

export const useServerRequest = () => {
	const session = useSelector(selectUserSession);

	return (operation, ...params) => {
		const request = OPERATIONS_WITHOUT_SESSION.includes(operation)
			? params
			: [session, ...params];

		return server[operation](...request);
	};
};
