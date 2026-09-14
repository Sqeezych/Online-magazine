import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Product } from '../../types';

const initialState: Product = {
	id: '',
	imageUrl: '',
	name: '',
	description: '',
	price: 0,
	count: 0,
	categoryId: 0,
};

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		setProduct(_state, action: PayloadAction<Product>) {
			return action.payload;
		},
	}
})

export const { setProduct } = productSlice.actions;
export const productReducer = productSlice.reducer;