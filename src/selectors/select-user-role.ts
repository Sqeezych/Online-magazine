import { RootState } from '../types/store-types';
export const selectUserRole = (state: RootState) => state.user.roleId;
