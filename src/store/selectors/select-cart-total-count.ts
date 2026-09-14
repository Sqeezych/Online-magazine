import { RootState } from '../store';
export const selectCartTotalCount = (state: RootState) => state.cart.totalCount;
