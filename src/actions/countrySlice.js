import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit';

const fetchCountries = () => fetch('https://restcountries.eu/rest/v2/all')
	.then(res => {
		if (res.ok) {
			return res.json();
		}
		throw new Error('Error calling the api');
	})

const fetchCountriesByRegion = (name) => fetch(`https://restcountries.eu/rest/v2/region/${name}`)
	.then(res => {
		if (res.ok) {
			return res.json()
		}
		throw new Error('Error calling the api')
	})

const initialState = {
	countries: [],
	current_country : {
		currencies : [],
		topLevelDomain : [],
		languages: [],
		borders: [],
	},
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

export const setCountriesByRegion = createAsyncThunk(
	'country/FETCH_BY_REGION',
	(name) => {
		if (name === '') {
			return fetchCountries();
		} else {
			return fetchCountriesByRegion(name);
		}
	}
)

const countrySlice = createSlice({
	name: "country",
	initialState,
	reducers: {
		setCurrent(state, { payload }) {
			state.current_country = state.countries.filter(({ alpha3Code }) => alpha3Code === payload)[0];
		},
	},
	extraReducers: (builder) => builder
		.addCase(setCountries.fulfilled, (state, action) => {
			state.countries = action.payload;
			state.loading = false;
		})
		.addCase(setCountries.pending, (state) => {
			state.loading = true;
		})
		.addCase(setCountriesByRegion.fulfilled, (state, action) => {
			state.countries = action.payload;
			state.loading = false;
		})
		.addCase(setCountriesByRegion.pending, (state) => {
			state.loading = true;
		})
});

export const selectCountries = (state) => state.country.countries;
export const selectCurrentCountry = ({ country : { current_country } }) => current_country;

export const selectCountryByAlpha = createSelector(
	selectCountries,
	countries => code => countries.filter(({ alpha3Code }) => alpha3Code === code)[0],
)

export const selectFilteredCountries = createSelector(
	selectCountries,
	countries => search => {
		if (search !== "") {
			return countries.filter(({ name }) => name.toLowerCase().includes(search.toLowerCase()));
		} else {
			return countries;
		}
	}
)

export const { setCurrent } = countrySlice.actions;

export default countrySlice.reducer;