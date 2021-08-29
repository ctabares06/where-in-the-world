import React, { Component } from 'react';
import styled from 'styled-components';
import Countries from './Countries';
import SearchCountry from './SearchCountry';

const PageStyles = styled.div`
	display: grid;	
	grid-template-columns: 1fr;
	grid-template-rows: [filters-start] 20% [filters-end countries-start] auto [countries-end];
	row-gap: 50px;
	align-items: center;
`

class CountriesPage extends Component {
	render() {
		return (
			<PageStyles>
				<SearchCountry />
				<Countries />
			</PageStyles>
		)
	}
}

export default CountriesPage;
