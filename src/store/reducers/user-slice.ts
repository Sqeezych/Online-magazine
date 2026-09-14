import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ROLES } from '../../constants';
import type { UserSession } from '../../types';

const initialState: UserSession = {
	id: '',
	login: '',
	roleId: ROLES.GUEST,
	session: '',
	registeredAt: '',
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser(_state, action: PayloadAction<UserSession>) {
			return action.payload;
		},
		logout() {
			return initialState;
		}
	}
})

export const {
	setUser,
	logout
} = userSlice.actions;
export const userReducer = userSlice.reducer;