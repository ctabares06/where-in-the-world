import React, { Component } from "react";
import { fetchAllCountries } from '../actions/countrySlice';
import { connect } from "react-redux"

class CountriesPage extends Component {
 
  componentDidMount(){
    const { fetchAll } = this.props;
    fetchAll();
  }

  render() {
    return <div></div>;
  }
}

const mapStateToProps = state =>({ 
  countryList: state.country.countries,
  loading: state.country.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchAll: () => dispatch(fetchAllCountries().then(console.log)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CountriesPage);
