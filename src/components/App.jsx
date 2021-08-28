import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'; 
import Header from './Header';
import CountriesPage from './CountriesPage';
import Country from './Country';
import { GlobalStyles, lightTheme } from "../styles";

class App extends Component {
	render() {
		return (
			<ThemeProvider theme={lightTheme}>
				<GlobalStyles />
				<Header />
				<Switch>
					<Route exact component={CountriesPage} path="/" />
					<Route component={Country} path="/country/:countryId" />
				</Switch>
			</ThemeProvider>
		)
	}
}

export default App;