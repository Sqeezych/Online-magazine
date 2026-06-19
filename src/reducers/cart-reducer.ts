import { ACTION_TYPES } from '../actions';

interface Product {
	id: string;
	name: string;
	price: number;
}

interface ProductInState extends Product {
	countInCart: number;
	countFromServer: number;
	imageUrl: string;
}

interface ProductFromServer extends Product {
	count: number;
	image_url: string;
}

export interface CartStateType {
	products: ProductInState[];
	totalPrice: number;
	totalCount: number;
}

const initialCartState: CartStateType = {
	products: [],
	totalPrice: 0,
	totalCount: 0,
};

interface AddProductType {
	type: typeof ACTION_TYPES.ADD_PRODUCT_INTO_CART;
	payload: ProductFromServer;
}

interface DeleteProductType {
	type: typeof ACTION_TYPES.DELETE_PRODUCT_FROM_CART;
	payload: string;
}

interface DecrementCountType {
	type: typeof ACTION_TYPES.DECREMENT_COUNT_OF_PRODUCT;
	payload: string;
}

interface IncrementCountType {
	type: typeof ACTION_TYPES.INCREMENT_COUNT_OF_PRODUCT;
	payload: string;
}

interface CleanCartType {
	type: typeof ACTION_TYPES.CLEAN_CART;
}

type CartActions = AddProductType | DeleteProductType | DecrementCountType | IncrementCountType | CleanCartType;

function calculatePriceAndCount (array: ProductInState[]): {price: number, count: number} {
	let price = 0;
	let count = 0;
	array.forEach((elem) => {
		price += elem.price * elem.countInCart;
		count += elem.countInCart;
	});
	return { price, count }
}

export const cartReducer = (state = initialCartState, action: CartActions) => {
	switch (action.type) {
		case ACTION_TYPES.ADD_PRODUCT_INTO_CART: {
			const updatedProducts = [
				...state.products,
				{
					id: action.payload.id,
					name: action.payload.name,
					price: action.payload.price,
					countInCart: 1,
					countFromServer: action.payload.count,
					imageUrl: action.payload.image_url,
				},
			];

			const { price, count } = calculatePriceAndCount(updatedProducts);

			return {
				...state,
				products: updatedProducts,
				totalPrice: price,
				totalCount: count,
			};
		}

		case ACTION_TYPES.DELETE_PRODUCT_FROM_CART: {
			const indexForDelete = state.products.findIndex(
				(elem) => elem.id === action.payload,
			);

			if (indexForDelete === -1) {
				return state;
			}

			const copyOfProducts = [...state.products];
			copyOfProducts.splice(indexForDelete, 1);

			const updatedProducts = copyOfProducts;

			const { price, count } = calculatePriceAndCount(updatedProducts);

			return {
				...state,
				products: updatedProducts,
				totalPrice: price,
				totalCount: count,
			};
		}

		case ACTION_TYPES.DECREMENT_COUNT_OF_PRODUCT: {
			const elementForChange = state.products.findIndex(
				(elem) => elem.id === action.payload,
			);

			if (elementForChange === -1) {
				return state;
			}

			const updatedProducts = [...state.products];

			if (state.products[elementForChange].countInCart > 1) {
				updatedProducts[elementForChange].countInCart--;
			} else {
				updatedProducts.splice(elementForChange, 1);
			}

			const { price, count } = calculatePriceAndCount(updatedProducts);

			return {
				...state,
				products: updatedProducts,
				totalPrice: price,
				totalCount: count,
			};
		}

		case ACTION_TYPES.INCREMENT_COUNT_OF_PRODUCT: {
			const elementForChange = state.products.findIndex(
				(elem) => elem.id === action.payload,
			);

			if (elementForChange === -1) {
				return state;
			}

			const updatedProducts = [...state.products];

			if (
				state.products[elementForChange].countInCart <
				state.products[elementForChange].countFromServer
			) {
				updatedProducts[elementForChange].countInCart++;
			}

			const { price, count } = calculatePriceAndCount(updatedProducts);

			return {
				...state,
				products: updatedProducts,
				totalPrice: price,
				totalCount: count,
			};
		}

		case ACTION_TYPES.CLEAN_CART:
			return initialCartState;

		default:
			return state;
	}
};
