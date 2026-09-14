import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../../types";

export interface CartItem {
	id: string;
	name: string;
	price: number;
	countInCart: number;
	countFromServer: number;
	imageUrl: string;
}

export interface CartState {
	products: CartItem[];
	totalPrice: number;
	totalCount: number;
}

const initialState: CartState = {
	products: [],
	totalPrice: 0,
	totalCount: 0,
};

function calculatePriceAndCount(array: CartItem[]): { price: number, count: number } {
	let price = 0;
	let count = 0;
	array.forEach((elem) => {
		price += elem.price * elem.countInCart;
		count += elem.countInCart;
	});
	return { price, count }
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProductIntoCart(state, action: PayloadAction<Product>) {
			state.products.push({
				id: action.payload.id,
				name: action.payload.name,
				price: action.payload.price,
				countInCart: 1,
				countFromServer: action.payload.count,
				imageUrl: action.payload.imageUrl,
			});
			const { price, count } = calculatePriceAndCount(state.products);
			state.totalCount = count;
			state.totalPrice = price;

		},
		deleteProductFromCart(state, action: PayloadAction<string>) {
			const indexForDelete = state.products.findIndex(
				(elem) => elem.id === action.payload,
			);
			if (indexForDelete === -1) {
				return;
			} else {
				state.products.splice(indexForDelete, 1);
				const { price, count } = calculatePriceAndCount(state.products);
				state.totalCount = count;
				state.totalPrice = price;

			}
		},
		decrementCountOfProduct(state, action: PayloadAction<string>) {
			const elementForChange = state.products.findIndex(
				(elem) => elem.id === action.payload,
			);

			if (elementForChange === -1) {
				return;
			}

			if (state.products[elementForChange].countInCart > 1) {
				state.products[elementForChange].countInCart--;
			} else {
				state.products.splice(elementForChange, 1);
			}

			const { price, count } = calculatePriceAndCount(state.products);

			state.totalCount = count;
			state.totalPrice = price;
		},
		incrementCountOfProduct(state, action: PayloadAction<string>) {
			const elementForChange = state.products.findIndex(
				(elem) => elem.id === action.payload,
			);

			if (elementForChange === -1) {
				return;
			}


			if (
				state.products[elementForChange].countInCart <
				state.products[elementForChange].countFromServer
			) {
				state.products[elementForChange].countInCart++;
			}

			const { price, count } = calculatePriceAndCount(state.products);

			state.totalCount = count;
			state.totalPrice = price;
		},
		cleanCart() {
			return initialState;
		}
	}
})

export const {
	addProductIntoCart,
	deleteProductFromCart,
	decrementCountOfProduct,
	incrementCountOfProduct,
	cleanCart
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;