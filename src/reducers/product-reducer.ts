import { ACTION_TYPES } from '../actions';

interface BaseProduct {
	id: string | null;
	name: string | null;
	description: string | null;
	price: number | null;
	count: number | null;
}

export interface ProductStateType extends BaseProduct {
	imageUrl: string | null;
	categoryId: number | null;
}

interface ProductPayloadType extends BaseProduct {
	image_url: string | null;
	category_id: number | null;
}

const initialProductState: ProductStateType = {
	id: null,
	imageUrl: null,
	name: null,
	description: null,
	price: null,
	count: null,
	categoryId: null,
};

interface SetProductType {
	type: typeof ACTION_TYPES.SET_PRODUCT;
	payload: ProductPayloadType;
}

type ProductActions = SetProductType

export const productReducer = (state = initialProductState, action: ProductActions) => {
	switch (action.type) {
		case ACTION_TYPES.SET_PRODUCT:
			return {
				...state,
				id: action.payload.id,
				imageUrl: action.payload.image_url,
				name: action.payload.name,
				description: action.payload.description,
				price: action.payload.price,
				count: action.payload.count,
				categoryId: action.payload.category_id,
			};
		default:
			return state;
	}
};
