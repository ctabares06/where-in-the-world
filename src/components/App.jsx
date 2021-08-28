import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components'; 
import Header from './Header';
import CountriesPage from './CountriesPage';
import Country from './Country';
import { GlobalStyles, lightTheme } from "../styles";

const AppStyles = styled.div`
	padding: 100px 2% 0px 2%;
	max-width: 1440px;
	margin: 0 auto;
`

class App extends Component {
	render() {
		return (
			<ThemeProvider theme={lightTheme}>
				<AppStyles>
					<GlobalStyles />
					<Header />
					<Switch>
						<Route exact component={CountriesPage} path="/" />
						<Route component={Country} path="/country/:countryId" />
					</Switch>
				</AppStyles>
			</ThemeProvider>
		)
	}
}

export default App;