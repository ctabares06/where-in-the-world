import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchCountry } from '../actions/countrySlice';

class SearchCountry extends Component {
	constructor(props) {
		super(props);
		this.state = {
			countryName : '',
		}
	}

	handleInput = ({ target: { value } }) => {
		const { searchCountry } = this.props;
		const { countryName } = this.state;

		this.setState({ countryName: value });
		searchCountry(countryName)
	}

	render() {
		const { countryName } = this.state;
		return (
			<div>
				<input type="text" onKeyUp={this.handleInput} value={countryName} />
			</div>
		)
	}
}

const dispatchMapToProps = {
	searchCountry,
}

export default connect(null, dispatchMapToProps)(SearchCountry);