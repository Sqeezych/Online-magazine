import { ACTION_TYPES } from '../actions';

const initialProductState = {
	id: null,
	imageUrl: null,
	name: '',
	description: '',
	price: null,
	count: null,
	categoryId: null,
};

export const productReducer = (state = initialProductState, { type, payload }) => {
	switch (type) {
		case ACTION_TYPES.SET_PRODUCT:
			return {
				...state,
				id: payload.id,
				imageUrl: payload.image_url,
				name: payload.name,
				description: payload.description,
				price: payload.price,
				count: payload.count,
				categoryId: payload.category_id,
			};
		default:
			return state;
	}
};
