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
	color: ${ ({ theme }) => theme.text };
	padding: .5em 2em;
  text-align: center;
  margin: .5em .5em;
	& span {
		margin-left: .5em;
	}
  & a {
    text-decoration: none;
  }
`

const ButtonShadow = withShadow(ButtonStyles); 

const CountryLink = ({ id, name }) => {
	return (
  	<ButtonShadow>
			<Link to={"/country/".concat(id)} >
  			{ name }
			</Link>
  	</ButtonShadow>
	)
}

export default CountryLink;