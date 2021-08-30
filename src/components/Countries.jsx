import React, { Component } from "react";
import styled from "styled-components";
import { setCountries } from "../actions/countrySlice";
import CountryCard from "./CountryCard";
import { connect } from "react-redux";

const CountryContainer = styled.div`
  display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
	align-items: stretch;
	margin-bottom: 5%;
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
