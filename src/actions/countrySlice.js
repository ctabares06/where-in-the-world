import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const fetchCountries = () => fetch('https://restcountries.eu/rest/v2/all')
	.then(res => {
		if (res.ok) {
			return res.json();
		}
		throw new Error('Error calling the api');
	})

const initialState = {
	countries: [],
	loading: false,
	error : {
		name: "",
		message: "",
	},
}

export const fetchAllCountries = createAsyncThunk(
	'country/FETCH_ALL',
	fetchCountries
)

const countrySlice = createSlice({
	name: "country",
	initialState,
	extraReducers: (builder) => builder
		.addCase(fetchAllCountries.fulfilled, (state, action) => {
			state.countries = action.payload;
			state.loading = false;
		})
		.addCase(fetchAllCountries.pending, state => { 
			state.loading = true;
		})
});

export default countrySlice.reducer;