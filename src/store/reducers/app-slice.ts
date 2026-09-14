import { createSlice } from '@reduxjs/toolkit';

export interface AppState {
	wasLogout: boolean;
	isFiltered: boolean;
}

const initialState: AppState = {
	wasLogout: false,
	isFiltered: false,
};

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		toggleWasLogout(state) {
			state.wasLogout = !state.wasLogout;
		},
		changeIsFiltered(state) {
			state.isFiltered = !state.isFiltered;
		}
	}
})

export const { toggleWasLogout, changeIsFiltered } = appSlice.actions;
export const appReducer = appSlice.reducer;