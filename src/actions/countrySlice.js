import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit';

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
		.addCase(setCountries.pending, (state) => {
			state.loading = true;
		})
		.addCase(searchCountry.fulfilled, (state, action) => {
			state.filter_countries = action.payload;
			state.loading = false;
		})
		.addCase(searchCountry.pending, (state) => {
			state.loading = true;
		})
		.addCase(searchCountry.rejected, (state) => {
			state.filter_countries = [];
		})
});

const selectCountries = (state) => state.country.countries;
const selectCurrentCountry = ({ country : { countries } }, props) => ({...countries.filter(({ alpha3Code }) => alpha3Code === props.key)});
const selectBorders = ({ country : { countries }}) => countries.borders;

export const currentCountry = createSelector(
	selectCurrentCountry,
	country => country
)

// export const selectByAlpha = createSelector(
// 	selectCountries,
// 	countries => select,
// )

export default countrySlice.reducer;