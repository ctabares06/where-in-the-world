import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Countries from './Countries';
import SearchCountry from './SearchCountry';
import Country from './Country';

class CountriesPage extends Component {
	render() {
		const { match : { path } } = this.props;
		return (
			<>
				<SearchCountry />
				<Countries />
				<Switch>
					<Route path={`/country/:countryId`} render={
						(props) => <Country {...props} />
					} />
				</Switch>
			</>
		)
	}
}

export default CountriesPage;
