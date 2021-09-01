import React from 'react';

const CountryItem = ({ name, value }) => {
	return <div>
		<span>{name}: </span>
		{value}
	</div>
}

export default CountryItem;