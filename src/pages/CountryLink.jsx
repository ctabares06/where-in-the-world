import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { withShadow } from '../styles';

const ButtonStyles = styled.button`
	cursor: pointer;
	font-size: .8em;
	background-color: ${ ({ theme }) => theme.ebg };
	border-radius: 5px;
	border: none;
	color: ${ ({ theme }) => theme.title };
	padding: .5em 2em;
  text-align: center;
  margin: .5em .5em;
	${ withShadow }
	& span {
		margin-left: .5em;
	}
`

const StyledLink = styled(Link)`
	text-decoration: none;
	color: inherit;
`

const CountryLink = ({ id, name }) => {
	return (
  	<ButtonStyles>
			<StyledLink to={"/country/".concat(id)} >
  			{ name }
			</StyledLink>
  	</ButtonStyles>
	)
}

export default CountryLink;