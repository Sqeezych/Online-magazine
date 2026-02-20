import { ACTION_TYPES } from '../actions';

const initialCartState = {
	products: [],
	totalPrice: 0,
};

export const cartReducer = (state = initialCartState, { type, payload }) => {
	switch (type) {
		case ACTION_TYPES.ADD_PRODUCT_INTO_CART: {
			const updatedProducts = [
				...state.products,
				{
					id: payload.id,
					name: payload.name,
					price: payload.price,
					countInCart: 1,
					countFromServer: payload.count,
					image_url: payload.image_url,
				},
			];

			const total = updatedProducts.reduce(
				(acc, elem) => acc + elem.price * elem.countInCart,
				0,
			);

			return {
				...state,
				products: updatedProducts,
				totalPrice: total,
			};
		}

		case ACTION_TYPES.DELETE_PRODUCT_FROM_CART: {
			const indexForDelete = state.products.findIndex(
				(elem) => elem?.id === payload,
			);

			const copyOfProducts = [...state.products];
			copyOfProducts.splice(indexForDelete, 1);

			const updatedProducts = copyOfProducts;

			const total = updatedProducts.reduce(
				(acc, elem) => acc + elem.price * elem.countInCart,
				0,
			);

			return {
				...state,
				products: updatedProducts,
				totalPrice: total,
			};
		}

		case ACTION_TYPES.DECREMENT_COUNT_OF_PRODUCT: {
			const elementForChange = state.products.findIndex(
				(elem) => elem?.id === payload.id,
			);

			const updatedProducts = [...state.products];

			if (state.products[elementForChange].countInCart > 1) {
				updatedProducts[elementForChange].countInCart--;
			} else {
				updatedProducts.splice(elementForChange, 1);
			}

			const total = updatedProducts.reduce(
				(acc, elem) => acc + elem.price * elem.countInCart,
				0,
			);

			return {
				...state,
				products: updatedProducts,
				totalPrice: total,
			};
		}

		case ACTION_TYPES.INCREMENT_COUNT_OF_PRODUCT: {
			const elementForChange = state.products.findIndex(
				(elem) => elem?.id === payload.id,
			);

			const updatedProducts = [...state.products];

			if (
				state.products[elementForChange].countInCart <
				state.products[elementForChange].countFromServer
			) {
				updatedProducts[elementForChange].countInCart++;
			}

			const total = updatedProducts.reduce(
				(acc, elem) => acc + elem.price * elem.countInCart,
				0,
			);

			return {
				...state,
				products: updatedProducts,
				totalPrice: total,
			};
		}

		case ACTION_TYPES.CLEAN_CART:
			return initialCartState;

		default:
			return state;
	}
};
