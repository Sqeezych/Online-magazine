import { RootState } from '../types/store-types';
export const selectUserSession = (state: RootState) => state.user.session;
