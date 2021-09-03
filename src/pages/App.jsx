import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components'; 
import Header from '../components/Header';
import CountriesPage from './CountriesPage';
import Country from './Country';
import { GlobalStyles, lightTheme, darkTheme } from "../styles";
import { selectTheme } from '../actions/themeSlice';
import { connect } from 'react-redux';

const AppStyles = styled.div`
	padding: 100px 2% 0px 2%;
	max-width: 1390px;
	margin: 0 auto;
`

class App extends Component {
	render() {
		const { theme } = this.props;
		const currentTheme = theme === 'light' ? lightTheme : darkTheme;
		return (
			<ThemeProvider theme={currentTheme}>
				<AppStyles>
					<GlobalStyles />
					<Header />
					<Switch>
						<Route exact component={CountriesPage} path="/" />
						<Route exact component={Country} path="/country/:countryId" />
					</Switch>
				</AppStyles>
			</ThemeProvider>
		)
	}
}

const mapStateToProps = (state) => ({
	theme: selectTheme(state)
});

export default connect(mapStateToProps, null)(App);