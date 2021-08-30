import React, { Component } from 'react';
import Countries from './Countries';
import SearchCountry from './SearchCountry';
import { PageStyles } from '../styles';

class CountriesPage extends Component {
	render() {
		return (
			<PageStyles>
				<div className="filters">
					<SearchCountry />
				</div>
				<Countries />
			</PageStyles>
		)
	}
}

export default CountriesPage;
