import { ACTION_TYPES } from '../action-types';

export const addProductIntoCart = (product) => {
	return {
		type: ACTION_TYPES.ADD_PRODUCT_INTO_CART,
		payload: product,
	};
};
