import React, { Component } from 'react';
import Countries from './Countries';
import SearchCountry from './SearchCountry';
import { PageStyles } from '../styles';
import { connect } from 'react-redux';
import { 
	selectFilteredCountries, 
	setCountries,
	selectCountries
} from '../actions/countrySlice';

class CountriesPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			countries: props.countriesList,
			countryName: "",
		}
	}

	componentDidMount() {
		this.props.setCountries()
			.then(() => {
				this.setState({ countries: this.props.countriesList });
			});
	}

	searchCountry = ({ target: { value } }) => {
		const { filteredCountries } = this.props;
		this.setState({ 
			countryName: value, 
			countries: filteredCountries(value) 
		})		
	}

	render() {
		const { countries, countryName } = this.state;
		return (
			<PageStyles>
				<div className="filters">
					<SearchCountry handleChange={this.searchCountry} input={countryName} />
				</div>
				<Countries countries={countries} />
			</PageStyles>
		)
	}
}

const mapStateToProps = (state) => ({
	filteredCountries: selectFilteredCountries(state),
	countriesList: selectCountries(state), 
})

const mapDispatchToProps = {
	setCountries,
};

export default connect(mapStateToProps, mapDispatchToProps)(CountriesPage);
