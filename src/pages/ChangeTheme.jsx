import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon as lightMoon } from '@fortawesome/free-regular-svg-icons';
import { faMoon as darkMoon } from '@fortawesome/free-solid-svg-icons';
import { selectTheme, switchTheme } from '../actions/themeSlice'

class ChangeTheme extends Component {
  switchTheme = () => {
  	const { switchTheme } = this.props;
  	switchTheme();
  }

  render() {
  	const { theme } = this.props;
  	const icon = theme === 'light' ? darkMoon : lightMoon;
  	return (
  		<ChangeThemeStyles onClick={this.switchTheme}>
  			<FontAwesomeIcon icon={icon} />
  			<span className="text">Dark Text</span>
  		</ChangeThemeStyles>
  	)
  }
}

const mapStateToProps = (state) => ({
	theme: selectTheme(state),
})

const mapDispatchToProps = {
	switchTheme,
}

const ChangeThemeStyles = styled.div`
	border: none;
	cursor: pointer;
	color: ${ ({ theme }) => theme.title };
	background-color: ${ ({ theme }) => theme.ebg };
	& .text {
		font-weight: 600;
		margin-left: .5rem;
	}
`

export default connect(mapStateToProps, mapDispatchToProps)(ChangeTheme);

