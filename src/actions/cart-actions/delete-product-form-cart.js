import { ACTION_TYPES } from '../action-types';

export const deleteProductFromCart = (id) => {
	return {
		type: ACTION_TYPES.DELETE_PRODUCT_FROM_CART,
		payload: id,
	};
};
