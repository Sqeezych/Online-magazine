import { RootState } from '../store';
export const selectCartTotalPrice = (state: RootState) => state.cart.totalPrice;
