import { getCategories } from '../api';

export const fetchCategories = async () => {
	try {
		const categories = await getCategories();
		return {
			error: null,
			res: categories,
		};
	} catch (error) {
		return {
			error: error.message,
			res: null,
		};
	}
};
