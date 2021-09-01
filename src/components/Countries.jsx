import React, { Component } from "react";
import styled from "styled-components";
import CountryCard from "./CountryCard";

const CountryContainer = styled.div`
  display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
	align-items: stretch;
	margin-bottom: 5%;
`;

class Countries extends Component {

	render() {
		const { countries } = this.props;	
		return (
			<>
				<CountryContainer>
					{countries.map((country) => (
						<CountryCard 
							props={country} 
							key={country.alpha3Code}
							id={country.alpha3Code}
						/>
					))}
				</CountryContainer>
			</>
		);
	}
}

export default Countries;
