import React, { Component } from 'react';
import { withRouter } from 'react-router';

class BackButton extends Component {
  handleClick = () => {
  	const { history } = this.props;
  	history.goBack();
  }

  render() {
  	return (
  		<button onClick={this.handleClick} >Go back</button>
  	)
  }
}

export default withRouter(BackButton);