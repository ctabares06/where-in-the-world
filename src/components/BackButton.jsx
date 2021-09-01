import React, { Component } from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { withShadow } from '../styles';

const ButtonStyles = styled.button`
	cursor: pointer;
	width: 125px;
	font-size: 1em;
	background-color: ${ ({ theme }) => theme.ebg };
	border-radius: 5px;
	border: none;
	color: ${ ({ theme }) => theme.text };
	padding: .5em 2em;
	display: flex;
	align-items: center;
	${ withShadow }
	& span {
		margin-left: .5em;
	}
`

class BackButton extends Component {
  handleClick = () => {
  	const { history } = this.props;
  	history.goBack();
  }

  render() {
  	return (
  		<ButtonStyles onClick={this.handleClick}>
  			<FontAwesomeIcon icon={faArrowLeft} />
  			<span>Back</span>
  		</ButtonStyles>
  	)
  }
}

export default withRouter(BackButton);