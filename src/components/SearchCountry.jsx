import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { searchCountry } from '../actions/countrySlice';
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

const ShadowSearch = withShadow(SearchStyle);

class SearchCountry extends Component {
	constructor(props) {
		super(props);
		this.state = {
			countryName : '',
		}
	}

	handleInput = ({ target: { value } }) => {
		const { searchCountry } = this.props;

		this.setState(() => ({ countryName: value }));
		searchCountry(value)
	}

	render() {
		const { countryName } = this.state;
		return (
			<ShadowSearch>
				<FontAwesomeIcon icon={faSearch} />
				<input type="text" onChange={this.handleInput} value={countryName} placeholder="Search for a country..." />
			</ShadowSearch>
		)
	}
}

const dispatchMapToProps = {
	searchCountry,
}

export default connect(null, dispatchMapToProps)(SearchCountry);