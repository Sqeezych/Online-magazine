import { RootState } from '../store';
export const selectAppIsFiltered = (state: RootState) => state.app.isFiltered;
