import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	theme : 'light',
}

const changeThemeReducer = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		switchTheme(state) {
			state.theme = state.theme === 'light' ? 'dark' : 'light';
		},
	}
});

export const selectTheme = (state) => state.theme.theme;

export const { switchTheme } = changeThemeReducer.actions;

export default changeThemeReducer.reducer;
