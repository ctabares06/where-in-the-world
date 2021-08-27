import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import CountriesPage from './CountriesPage';
import Country from './Country';

class App extends Component {
	render() {
		return (
			<>
				<Header />
				<Switch>
					<Route exact component={CountriesPage} path="/" />
					<Route component={Country} path="/country/:countryId" />
				</Switch>
			</>
		)
	}
}

export default App;