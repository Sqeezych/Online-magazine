import { ACTION_TYPES } from '../action-types';

export const setProductForLocation = (product) => {
	return {
		type: ACTION_TYPES.SET_PRODUCT_FOR_LOCATION,
		payload: product,
	};
};
