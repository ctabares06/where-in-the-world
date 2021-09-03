import { configureStore } from '@reduxjs/toolkit';
import countryReducer from '../actions/countrySlice';
import changeThemeReducer  from '../actions/themeSlice';

export const store = configureStore({
	reducer: {
		country: countryReducer,
		theme: changeThemeReducer,
	},
});
