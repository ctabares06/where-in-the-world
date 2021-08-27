import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import CountriesPage from './CountriesPage';

class App extends Component {
	render() {
		return (
			<>
				<Header />
				<Switch>
					<Route exact component={CountriesPage} path="/" />
				</Switch>
			</>
		)
	}
}

export default App;