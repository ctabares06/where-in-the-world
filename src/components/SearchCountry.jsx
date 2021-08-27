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

		this.setState(() => ({ countryName: value }));
		searchCountry(value)
	}

	render() {
		const { countryName } = this.state;
		return (
			<div>
				<input type="text" onChange={this.handleInput} value={countryName} />
			</div>
		)
	}
}

const dispatchMapToProps = {
	searchCountry,
}

export default connect(null, dispatchMapToProps)(SearchCountry);