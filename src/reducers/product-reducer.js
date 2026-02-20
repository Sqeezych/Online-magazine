import { ACTION_TYPES } from '../actions';

const initialProductState = {
	id: null,
	imageUrl: 'Изображение товара',
	name: 'Наименование товара',
	description: 'Описание товара',
	price: 'Стоимость товара',
	count: 'Кол-во товара',
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
			};
		default:
			return state;
	}
};
