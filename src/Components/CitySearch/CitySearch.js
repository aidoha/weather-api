import React from 'react';
import { Input } from './style';

const CitySearch = ({ onSearchHandler }) => {
	return <Input type="text" onChange={onSearchHandler} placeholder="Enter city name" />;
};

export default CitySearch;
