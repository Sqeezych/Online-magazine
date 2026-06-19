import { ACTION_TYPES } from '../action-types';

interface IncrementCountOfProductType {
	type: typeof ACTION_TYPES.INCREMENT_COUNT_OF_PRODUCT;
	payload: string;
}

export const incrementCountOfProduct = (id: string) : IncrementCountOfProductType => ({
	type: ACTION_TYPES.INCREMENT_COUNT_OF_PRODUCT,
	payload: id,
});
