import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import BackButton from './BackButton';
import CountryItem from './CountryItem';
import { PageStyles } from '../styles';
import CountryLink from './CountryLink';
import { currentCountry } from '../actions/countrySlice'

const CountryStyle = styled.div`
	display: flex;
`

const CountryContent = styled.div`
	flex-grow: 1;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	padding: 2.5% 5%;
	& div {
		flex-basis: 50%;
		line-height: 1.6;
	}
	& span {
		font-weight: 600;
	}
	& .full-width {
		flex-basis: 100%;
	}
	& .full-width:first-child {
		margin-bottom: auto;
	}
	& .full-width:last-child {
		margin-top: auto;
	}
	& .borders {
		display: inline-flex;
		flex-wrap: wrap;
	}
`

const Img = styled.img`
	display: block;
	max-width: 700px;
	height: auto;
`

class Country extends Component {
	state = {
		country : {
			currencies : [],
			topLevelDomain : [],
			languages: [],
			borders: [],
		}
	}

	componentDidMount() {
		const { countryList, match } = this.props;
		const { params : { countryId } } = match;

		console.log(countryList);

		this.setState({ country : countryList });
	}

	componentDidUpdate(prevProps) {
		const { match : { params : { countryId : prevCountryId }}} = prevProps;
		const { countryList, match } = this.props;
		const { params : { countryId } } = match;
		if (prevCountryId !== countryId) {
			this.setState({ country : countryList });
		}
	}

	render() {
		const { country } = this.state;
		const { countryList } = this.props;
		return (
			<PageStyles>
				<BackButton />
				<CountryStyle>
					<Img src={country.flag} alt="" />
					<CountryContent>
						<h1 className="full-width">{country.name}</h1>
						<CountryItem name="Native Name" value={country.nativeName} />
						<CountryItem name="Population" value={country.population} />
						<CountryItem name="Region" value={country.region} />
						<CountryItem name="Sub Region" value={country.subregion} />
						<CountryItem name="Capital" value={country.capital} />
						<CountryItem name="Top Level Domain" value={country.topLevelDomain.join(' ')} />
						<CountryItem name="Currencies" value={country.currencies.map(currency => currency.code).join(' ')} />
						<CountryItem name="Languages" value={country.languages.map(currency => currency.name).join(' ')} />
						<div className="full-width">
							<span>Border Countries: </span>
							{/* <div className="borders">
								{ country.borders.map(id => {
									const { name, alpha3Code } = countryList(id);
									return <CountryLink id={alpha3Code} name={name} />
								}) }
							</div> */}
						</div>
					</CountryContent>
				</CountryStyle>
			</PageStyles>
		)
	}
}

const mapStateToProps = (state, props) => ({
	countryList: currentCountry(state, props)[0],
});

export default connect(mapStateToProps, null)(Country);