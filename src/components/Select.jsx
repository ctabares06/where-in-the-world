import React, { Component } from 'react'
import styled from 'styled-components'
import { withShadow } from '../styles'

const SelectStyles = styled.div`
  font-size: inherit;
  position: relative;
  border-radius: 5px;
  background-color: ${ ({ theme }) => theme.ebg };
  border: none;
  width: 200px;
  padding: 1rem 1.5rem;
  ${ withShadow }
`

class Select extends Component {
  state = {
  	options: [],
  	current: {
  		value: "",
  		text: "", 
  	}
  }

  componentDidMount() {
  	if (this.props?.default && this.props.default === true) {
  		this.setState({ options: [
  			{ 
  				value: "",
  				text: "-- Choose and option --"
  			}, 
  			...this.props.options
  		]
  		})
  	} else {
  		this.setState({ options: this.props.options});
  	}
  }

  render(){
  	const { options, current } = this.state;
  	return (
  		<SelectStyles>
  			<input type="hidden" value={current.value} />
  			<option value="">- Select an option -</option>
  		</SelectStyles>
  	)
  }
}

export default Select;