import React, { Component } from "react";
import { fetchAllCountries } from "../actions/countrySlice";
import { connect } from "react-redux";

class CountriesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
    }
  }
  componentDidMount() {
    const { fetchAllCountries } = this.props;
    fetchAllCountries();
  }

  render() {
    return <div></div>;
  }
}

const mapStateToProps = (state) => ({
  countryList: state.country.countries,
  loading: state.country.loading,
});

const mapDispatchToProps = {
  fetchAllCountries,
};

export default connect(mapStateToProps, mapDispatchToProps)(CountriesPage);
