import React from 'react';
import styled from 'styled-components'

const Country = styled.div`
	border-radius: 5px;
	width: 250px;
	justify-self: center;
	background-color: hsl(0, 0%, 100%);
`

const Img = styled.img`
	display: block;
	width: 100%;
	height: 150px;
	object-fit: cover;
	border-radius: 5px 5px 0 0;
`

const CountryContent = styled.div`
	padding: 1em;
`

const CountryCard = ({ props }) => {
	const { flag, name, population, region, capital } = props;

	return (
		<Country>
			<div>
				<Img className="country-image" src={flag} alt={name} />
			</div>
			<CountryContent>
				<h4>{name}</h4>
				<p>population: {population}</p>
				<p>region: {region}</p>
				<p>capital: {capital ? capital : "No registra"}</p>
			</CountryContent>
		</Country>
	)
}

export default CountryCard;