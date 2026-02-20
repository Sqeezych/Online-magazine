import { ACTION_TYPES } from '../action-types';

export const decrementCountOfProduct = (product) => ({
	type: ACTION_TYPES.DECREMENT_COUNT_OF_PRODUCT,
	payload: product,
});
