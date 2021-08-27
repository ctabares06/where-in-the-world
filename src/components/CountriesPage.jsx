import React, { Component } from 'react';
import Countries from './Countries';
import SearchCountry from './SearchCountry';

class CountriesPage extends Component {
	render() {
		return (
			<>
				<SearchCountry />
				<Countries />
			</>
		)
	}
}

export default CountriesPage;
