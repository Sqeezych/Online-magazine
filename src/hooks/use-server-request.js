import { useSelector } from 'react-redux';
import { server } from '../bff';
import { selectUserSession } from '../selectors';

export const useServerRequest = () => {
	const session = useSelector(selectUserSession);
	const operationsWithoutSession = [
		'authorize',
		'register',
		'fetchCategories',
		'fetchProducts',
	];

	return (operation, ...params) => {
		const request = operationsWithoutSession.includes(operation)
			? params
			: [session, ...params];

		return server[operation](...request);
	};
};
