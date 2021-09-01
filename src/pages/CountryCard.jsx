import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { Card } from '../components'

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

const CountryCard = ({ country, match : { path } }) => {
	const { flag, name, population, region, capital, alpha3Code } = country;

	return (
		<Card>
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
		</Card>
	)
}

export default withRouter(CountryCard);