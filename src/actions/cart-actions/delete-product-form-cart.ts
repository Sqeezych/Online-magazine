import { ACTION_TYPES } from '../action-types';

interface DeleteProductFromCartType {
	type: typeof ACTION_TYPES.DELETE_PRODUCT_FROM_CART;
	payload: string;
}
export const deleteProductFromCart = (id: string): DeleteProductFromCartType => {
	return {
		type: ACTION_TYPES.DELETE_PRODUCT_FROM_CART,
		payload: id,
	};
};
