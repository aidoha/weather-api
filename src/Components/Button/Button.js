import React from 'react';
import { Wrap } from './style';

const Button = props => {
	return <Wrap onClick={props.onClick}>{props.children}</Wrap>;
};

export default Button;
