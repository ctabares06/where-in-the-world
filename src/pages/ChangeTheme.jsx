import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectTheme, switchTheme } from '../actions/themeSlice'

class ChangeTheme extends Component {

  switchTheme = () => {
  	const { switchTheme } = this.props;
  	switchTheme();
  }

  render() {
  	const { theme } = this.props;

  	return (
  		<button onClick={this.switchTheme}>
        theme { theme }
  		</button>
  	)
  }
}

const mapStateToProps = (state) => ({
	theme: selectTheme(state),
})

const mapDispatchToProps = {
	switchTheme,
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeTheme);

