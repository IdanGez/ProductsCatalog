import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import {connect, useDispatch} from 'react-redux';

import {sortByGender} from '../store/item.action.js';

// const options = [
//     'HIM', 'HER', 'BOTH'
// ];

const options = [
	{value: 3, label: 'HIM'},
	{value: 4, label: 'HER'},
	{value: 1, label: 'BOTH'},
];
const defaultOption = 'Gender';
export function _GenderFilter({priceRange}) {
	const dispatch = useDispatch();

	const handleChange = (event) => {
		const gender = event;
		dispatch(sortByGender(gender, priceRange));
	};

	return (
		<div>
			<Dropdown
				className='gender-filter'
				options={options}
				onChange={handleChange}
				value={defaultOption}
				placeholder='GENDER'
			/>
		</div>
	);
}

function mapStateToProps({itemModule}) {
	return {
		gender: itemModule.gender,
		priceRange: itemModule.priceRange,
	};
}
const mapDispatchToProps = {
	sortByGender,
};

export const GenderFilter = connect(mapStateToProps, mapDispatchToProps)(_GenderFilter);
