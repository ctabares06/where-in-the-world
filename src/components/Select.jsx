import React, { Component } from 'react'
import styled from 'styled-components'
import { withShadow } from '../styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

class Select extends Component {
  state = {
  	show: false,
  	options: [],
  	current: {
  		value: "",
  		text: "", 
  	}
  }

	toggleDropBox = () => {
		this.setState(({ show }) => ({
			show: !show
		}));
	}

	setCurrentValue = (value) => () => {
		if(value?.disable) {
			return true;
		}

		this.setState({
			current: value
		});
	}
 
	componentDidMount() {
  	if (this.props?.default && this.props.default === true) {
  		this.setState({ options: [
  			{ 
  				value: "",
  				text: "- Choose and option -",
					disable: true,
  			}, 
  			...this.props.options
  		]
  		})
  	} else {
  		this.setState({ options: this.props.options});
  	}
		this.setState(({ options }) => ({
			current: options[0]
		}));
	}

	render(){
  	const { options, show, current } = this.state;
  	return (
  		<SelectStyles onClick={this.toggleDropBox}>
				{ current.text }
				<Icon icon={faSortDown} />
  			{ show && <DropBox>
					{
						options.map((option, index) => (
							<Option 
								onClick={	this.setCurrentValue(option) }
								className={ option?.disabled === true ? "disabled" : "" }
								key={index}
							>
								{ option.text }
							</Option>
						))
					}
  			</DropBox> }
  		</SelectStyles>
  	)
	}
}

const SelectStyles = styled.div`
	cursor: pointer;
	font-size: inherit;
	position: relative;
	border-radius: 5px;
	background-color: ${ ({ theme }) => theme.ebg };
	color: ${ ({ theme }) => theme.title };  
	border: none;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 225px;
	padding: 1rem 1.5rem;
	${ withShadow }
`

const Icon = styled(FontAwesomeIcon)`
	margin-bottom: .5rem;
`

const DropBox = styled.div`
	border-radius: 5px;
	position: absolute;
	background-color: inherit;
	color: inherit;
	top: 70px;
	left: 0;
	right: 0;
	${withShadow}
`

const Option = styled.div`
	text-align: center;
	cursor: inherit;
	margin: .5rem 0;
	& :hover {
		background-color: pink;
	}
	& .disabled {
		color: ${ ({ theme }) => theme.text }
	}
`
	
export default Select;