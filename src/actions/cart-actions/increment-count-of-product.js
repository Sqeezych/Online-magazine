import { ACTION_TYPES } from '../action-types';

export const incrementCountOfProduct = (product) => ({
	type: ACTION_TYPES.INCREMENT_COUNT_OF_PRODUCT,
	payload: product,
});
