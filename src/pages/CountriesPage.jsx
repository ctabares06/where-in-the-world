import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountryCard from './CountryCard';
import { 
	Select,
	FlexContainer,
	Search 
} from '../components';
import { PageStyles } from '../styles';
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
					<Search 
						handleChange={this.searchCountry} 
						input={countryName}
						placeHolder="Search for a country..." 
					/>
					<Select>
						<option value="value">option</option>
					</Select>
				</div>
				<FlexContainer>
					{ countries.map((country, index) => <CountryCard country={country} key={index} />) }
				</FlexContainer>
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
