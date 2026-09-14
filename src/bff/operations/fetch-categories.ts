import { getCategories } from '../api/get-categories';
import { getErrorMessage } from '../utils';
import type { Category } from '../../types';
import type { ServerResponse } from '../types';

export const fetchCategories = async (): Promise<ServerResponse<Category[]>> => {
	try {
		const categories = await getCategories();

		return {
			error: null,
			res: categories,
		};
	} catch (error) {

		return {
			error: getErrorMessage(error),
			res: null,
		};
	}
};
