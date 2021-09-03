import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ChangeTheme from '../pages/ChangeTheme';

const HeaderStyles = styled.div`
	box-sizing: border-box;
	position: fixed;
	z-index: 2;
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
const BasePath = styled(Link)`
	cursor: pointer;
`

const Header = () => {
	return (
		<HeaderStyles>
			<BasePath to="/">
				<h1>Where in the World?</h1>
			</BasePath>
			<ChangeTheme />
		</HeaderStyles>
	);
};

export default Header;
