import React, { Component } from "react";
import styled from "styled-components";
import { setCountries } from "../actions/countrySlice";
import CountryCard from "./CountryCard";
import { connect } from "react-redux";

const CountryContainer = styled.div`
  display: grid;
	max-width: 1440px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
	row-gap: 50px;
	margin: 0 auto;
`;

class Countries extends Component {
	componentDidMount() {
		const { setCountries } = this.props;
		setCountries();
	}

	printCountries = () => {
		const { countryList, filteredCountries } = this.props;	
		return filteredCountries.length === 0 ? countryList : filteredCountries;
	}

	render() {
		return (
			<>
				<CountryContainer>
					{this.printCountries().map((country) => (
						<CountryCard props={country} key={country.alpha3Code} />
					))}
				</CountryContainer>
			</>
		);
	}
}

const mapStateToProps = ({ country }) => ({
	countryList: country.countries,
	filteredCountries: country.filter_countries,
	loading: country.loading,
});

const mapDispatchToProps = {
	setCountries,
};

export default connect(mapStateToProps, mapDispatchToProps)(Countries);