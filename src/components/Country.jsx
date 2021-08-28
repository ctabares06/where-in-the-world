import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import BackButton from './BackButton';

const CountryStyle = styled.div`
	display: flex;
	justify-content: center;
	flex-basis: 50%;
`

const Img = styled.img`
	display: block;
	max-width: 500px;
	height: auto;
`

class Country extends Component {
	state = {
		country : {
			currencies : [],
			topLevelDomain : [],
			languages: [],
		}
	}

	componentDidMount() {
		const { countryList, match } = this.props;
		const { params : { countryId } } = match;

		this.setState({ country : countryList(countryId) });
	}

	render() {
		const { country } = this.state;
	
		return (
			<>
				<BackButton />
				<CountryStyle>
					<Img src={country.flag} alt="" />
					<div>
						<h3>{country.name}</h3>
						<div>Native Name: {country.nativeName}</div>
						<div>Population: {country.population}</div>
						<div>Region: {country.region}</div>
						<div>Sub Region: {country.subregion}</div>
						<div>Capital: {country.capital}</div>
						<div>Top Level Domain {country.topLevelDomain.join(' ')}</div>
						<div>Currencies: {country.currencies.map(currency => currency.code).join(' ')}</div>
						<div>languages: {country.languages.map(currency => currency.name).join(' ')}</div>
						<div>BorderCountries: { country.map }</div>
					</div>
				</CountryStyle>
			</>
		)
	}
}

const mapStateToProps = ({ country }) => ({
	countryList: (id) => country.countries.filter(country => country.alpha3Code === id)[0],
});

export default connect(mapStateToProps, null)(Country);