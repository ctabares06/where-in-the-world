import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const fetchCountries = () => fetch('https://restcountries.eu/rest/v2/all')
	.then(res => {
		if (res.ok) {
			return res.json();
		}
		throw new Error('Error calling the api');
	})

const fetchCountriesByName = (name) => fetch(`https://restcountries.eu/rest/v2/name/${name}`)
	.then(res => {
		if (res.ok) {
			return res.json();
		}
		throw new Error('Error calling the api');
	})

const initialState = {
	countries: [],
	filter_countries: [],
	loading: false,
	error: {
		name: "",
		message: "",
	},
}

export const setCountries = createAsyncThunk(
	'country/FETCH_ALL',
	fetchCountries
)

export const searchCountry = createAsyncThunk(
	'country/FILTER_COUNTRIES',
	(name) => fetchCountriesByName(name)
)

const countrySlice = createSlice({
	name: "country",
	initialState,
	extraReducers: (builder) => builder
		.addCase(setCountries.fulfilled, (state, action) => {
			state.countries = action.payload;
			state.loading = false;
		})
		.addCase(setCountries.pending, ({ loading }) => {
			loading = true;
		})
		.addCase(searchCountry.fulfilled, (state, action) => {
			state.filter_countries = action.payload;
			state.loading = false;
		})
		.addCase(searchCountry.pending, ({ loading }) => {
			loading = true;
		})
});

export default countrySlice.reducer;