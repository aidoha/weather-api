import React from 'react';
import { Select } from './style';

const CitySelection = ({ onChangeHandler }) => {
	return (
		<Select onChange={e => onChangeHandler(e)}>
			<option value="Almaty" defaultValue>
				Almaty
			</option>
			<option value="London">London</option>
			<option value="New York">New York</option>
			<option value="Moscow">Moscow</option>
			<option value="Tokyo">Tokyo</option>
		</Select>
	);
};

export default CitySelection;
