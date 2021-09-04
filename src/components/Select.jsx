import React, { Component, createRef } from 'react'
import styled from 'styled-components'
import { withShadow } from '../styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

class Select extends Component {
	state = {
		dropBox: createRef(),
		options: [],
		current: {
			value: "",
			text: "", 
		}
	}

	toggleDropBox = () => {
		const { dropBox : { current : dropBox } } = this.state;
		if (dropBox.classList.contains('shown')) {
			dropBox.classList.remove('shown');
		} else {
			dropBox.classList.add('shown');
		}
	}

	handleBlur = () => {
		const { dropBox : { current : dropBox } } = this.state;
		if (dropBox.classList.contains('shown')) {
			dropBox.classList.remove('shown');
		}
	}

	sendSelected = () => {
		const { change } = this.props;
		const { current } = this.state;

		change(current.value);
	}

	optionClickHandler = (value) => {
		if(value?.disable) {
			return;
		}

		this.setCurrentValue(value)
			.then(() => this.sendSelected());
	}

	setCurrentValue = (value) => 
		new Promise((resolve) => {
			this.setState({
				current: value
			});
			resolve();
		});

	hideWithClick = () => {

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
  	const { options, current, dropBox } = this.state;
  	return (
  		<SelectStyles tabIndex="1" onClick={this.toggleDropBox} onBlur={this.handleBlur}>
				{ current.text }
				<Icon icon={faSortDown} />
  			<DropBox ref={dropBox}>
					{
						options.map((option, index) => (
							<Option 
								onClick={ () =>	this.optionClickHandler(option) }
								className={ option?.disabled === true ? "disabled" : "" }
								key={index}
							>
								{ option.text }
							</Option>
						))
					}
  			</DropBox>
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
	display: none;
	border-radius: 5px;
	position: absolute;
	background-color: inherit;
	color: inherit;
	z-index: 1;
	top: 70px;
	left: 0;
	right: 0;
	${withShadow}

	&.shown {
		display: block;
	}
`

const Option = styled.div`
	text-align: center;
	cursor: inherit;
	padding: 1rem 0;
	:hover {
		background-color: ${ ({ theme }) => theme.bg };
	}
	:first-child {
		border-radius: 5px 5px 0 0;
	}
	:last-child {
		border-radius: 0 0 5px 5px;
	}
	.disabled {
		color: ${ ({ theme }) => theme.text }
	}
`
	
export default Select;