import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { withShadow } from '../styles';

const Country = styled.div`
	border-radius: 5px;
	width: 280px;
	background-color: hsl(0, 0%, 100%);
	margin-bottom: 50px;
	color: ${({ theme }) => theme.title};
	& a {
		color: inherit;
	}
`

const CountryContent = styled.div`
	margin: 1.5em 1em 2em 1em; 
	& h3 {
		margin-bottom: 1em;
	}
	& span {
		font-weight: 600;
	}
	& p {
		margin-bottom: .5em;
	}

`

const Img = styled.img`
	display: block;
	width: 100%;
	height: 150px;
	object-fit: cover;
	border-radius: 5px 5px 0 0;
`

const CountryShadow = withShadow(Country);

const CountryCard = ({ props, match : { path } }) => {
	const { flag, name, population, region, capital, alpha3Code } = props;

	return (
		<CountryShadow>
			<Link to={path.concat("country/").concat(alpha3Code)}>
				<div>
					<Img className="country-image" src={flag} alt={name} />
				</div>
				<CountryContent>
					<h3>{name}</h3>
					<p>
						<span>Population:</span>
						{population}
					</p>
					<p>
						<span>Region:</span>
						{region}
					</p>
					<p>
						<span>Capital:</span>
						{capital ? capital : "No registra"}
					</p>
				</CountryContent>
			</Link>
		</CountryShadow>
	)
}

export default withRouter(CountryCard);