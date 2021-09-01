import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { withShadow } from '../styles';


// TODO: Refactor CSS
const SearchStyle = styled.div`
	background-color: ${({ theme }) => theme.ebg};
	color: ${({ theme }) => theme.text};
	border-radius: 5px;
	width: 35%;
	padding: 1em 1.5em;
	display: flex;
	align-items: center;
	${ withShadow }
	& input {	
		display: block;
		width: 100%;
		background-color: inherit;
		border-radius: 5px;	
		outline: none;
		border: none;	
		font-size: inherit;
		padding-left: 1em;
	}
	& input:focus {
		color: inherit;
	}
`

class Search extends Component {
	render() {
		const { handleChange, input, placeHolder } = this.props;
		return (
			<SearchStyle>
				<FontAwesomeIcon icon={faSearch} />
				<input type="text" onChange={handleChange} value={input} placeholder={placeHolder} />
			</SearchStyle>
		)
	}
}

export default Search;