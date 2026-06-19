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

interface SetProductType {
	type: typeof ACTION_TYPES.SET_PRODUCT;
	payload: ProductType;
}

export const setProduct = (product: ProductType): SetProductType => {
	return {
		type: ACTION_TYPES.SET_PRODUCT,
		payload: product,
	};
};
