import { RootState } from '../types/store-types';
export const selectAppIsFiltered = (state: RootState) => state.app.isFiltered;
