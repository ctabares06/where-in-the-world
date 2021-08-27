import { configureStore } from '@reduxjs/toolkit';
import countryReducer from '../actions/countrySlice';

export const store = configureStore({
	reducer: {
		country: countryReducer,
	},
});
