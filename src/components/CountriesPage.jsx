import React, { Component } from 'react';
import Countries from './Countries';
import SearchCountry from './SearchCountry';
import { PageStyles } from '../styles';
import { connect } from 'react-redux';
import { selectFilteredCountries, setCountries } from '../actions/countrySlice';

class CountriesPage extends Component {
	state = {
		countries: [],
	}

	componentDidMount() {
		const { filteredCountries } = this.props;
		setCountries();
		this.setState({ countries: filteredCountries("") })
	}

	searchCountry = ({ target: { value } }) => {
		const { filteredCountries } = this.props;
		this.setState({ countries: filteredCountries(value) })		
	}

	render() {
		const { countries } = this.state;
		return (
			<PageStyles>
				<div className="filters">
					<SearchCountry handleChange={this.searchCountry} />
				</div>
				<Countries countries={countries} />
			</PageStyles>
		)
	}
}

const mapStateToProps = (state) => ({
	filteredCountries: selectFilteredCountries(state),
})

const mapDispatchToProps = {
	setCountries,
};

export default connect(mapStateToProps, mapDispatchToProps)(CountriesPage);
