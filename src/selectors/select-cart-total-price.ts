import { RootState } from '../types/store-types';
export const selectCartTotalPrice = (state: RootState) => state.cart.totalPrice;
