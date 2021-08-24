import React, { Component } from "react";
import moduleName from '../app'
import { connect } from "react-redux"

class CountriesPage extends Component {
  constructor() {
    super();

  }
  render() {
    return <div></div>;
  }
}

const mapStateToProps = state => state.countries;

const mapDispatchToProps = dispatch => ({
  fetchAll : () => dispatch({ type: "FETCH_ALL" }),
})

export default connect(mapStateToProps, mapDispatchToProps)(CountriesPage);
