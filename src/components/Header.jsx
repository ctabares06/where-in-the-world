import React from "react";
import styled from "styled-components";

const HeaderStyles = styled.div`
	box-sizing: border-box;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	padding: 1.5rem 5%;
	background-color: ${props => props.theme.ebg};
	box-shadow: 0px 4px 5px 1px #acacac;

	& h1 {
		color: ${props => props.theme.title};
		font-size: 1.5rem;
	}
`

const Header = () => {
	return (
		<HeaderStyles>
			<h1>Where in the World?</h1>
		</HeaderStyles>
	);
};

export default Header;
