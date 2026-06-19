import { ACTION_TYPES } from '../action-types';

interface ProductType {
	category_id: number;
	count: number;
	description: string;
	id: string;
	image_url: string;
	name: string;
	price: number;
}

interface AddProductIntoCartType {
	type: typeof ACTION_TYPES.ADD_PRODUCT_INTO_CART;
	payload: ProductType;
}

export const addProductIntoCart = (product: ProductType) : AddProductIntoCartType =>  {
	return {
		type: ACTION_TYPES.ADD_PRODUCT_INTO_CART,
		payload: product,
	};
};
