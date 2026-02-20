import { ACTION_TYPES } from '../action-types';

export const setProduct = (product) => {
	return {
		type: ACTION_TYPES.SET_PRODUCT,
		payload: product,
	};
};
