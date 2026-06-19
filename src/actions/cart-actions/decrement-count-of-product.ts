import { ACTION_TYPES } from '../action-types';

interface DecrementCountOfProductType {
	type: typeof ACTION_TYPES.DECREMENT_COUNT_OF_PRODUCT;
	payload: string;
}

export const decrementCountOfProduct = (id: string): DecrementCountOfProductType => ({
	type: ACTION_TYPES.DECREMENT_COUNT_OF_PRODUCT,
	payload: id,
});
