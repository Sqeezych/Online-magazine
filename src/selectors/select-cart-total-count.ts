import { RootState } from '../types/store-types';
export const selectCartTotalCount = (state: RootState) => state.cart.totalCount;
