import styled from 'styled-components';
import { withShadow } from '../styles';

const Card = styled.div`
	border-radius: 5px;
	width: 250px;
	background-color: hsl(0, 0%, 100%);
	margin: 0 2.5%;
	margin-bottom: 50px;
	color: ${({ theme }) => theme.title};
	${ withShadow }
	& a {
		color: inherit;
	}
	& :last-child {
		margin-right: 0px;
	}
`

export default Card;