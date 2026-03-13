import { getCategories } from '../api/get-categories';

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
