import React, { Component } from 'react';
import { connect } from 'react-redux';

class Country extends Component {
	state = {
		country : {}
	}

	componentDidMount() {
		const { countryList, match } = this.props;
		const { params : { countryId } } = match;

		this.setState({ country : countryList(countryId) });
	}

	render() {
		return (
			<div>Hola mundo</div>
		)
	}
}

const mapStateToProps = ({ country }) => ({
	countryList: (id) => country.countries.filter(country => country.alpha3Code === id)[0],
});

export default connect(mapStateToProps, null)(Country);