import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountryCard from './CountryCard';
import { 
	Select,
	FlexContainer,
	Search 
} from '../components';
import { 
	selectFilteredCountries, 
	setCountries,
	setCountriesByRegion,
	selectCountries
} from '../actions/countrySlice';
import { PageStyles } from '../styles';

class CountriesPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			countries: props.countriesList,
			countryName: '',
			options: [
				{ value: '', text: "All" },
				{ value: 'Africa', text: 'Africa' },
				{ value: 'Americas', text: 'Americas' },
				{ value: 'Asia', text: 'Asia' },
				{ value: 'Europe', text: 'Europe' },
				{ value: 'Oceania', text: 'Oceania' },
			]
		}
	}

	componentDidMount() {
		this.props.setCountries()
			.then(() => {
				this.setState({ countries: this.props.countriesList });
			});
	}

	countryByRegion = (region) => {
		this.props.setCountriesByRegion(region)
			.then(() => {
				this.setState({
					countries: this.props.countriesList,
				});
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
		const { countries, countryName, options } = this.state;
		return (
			<PageStyles>
				<div className="filters">
					<Search 
						handleChange={this.searchCountry} 
						input={countryName}
						placeHolder="Search for a country..." 
					/>
					<Select 
						options={options} 
						change={this.countryByRegion}
					>
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
	setCountriesByRegion,
};

export default connect(mapStateToProps, mapDispatchToProps)(CountriesPage);
