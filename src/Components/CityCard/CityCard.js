import React from 'react';
import { Block, FlexBox, Text } from '../../style/common';
import { Image } from './style';

const CityCard = ({ data }) => {
	const { name, sys, weather, main, wind } = data;
	const { icon, description } = weather[0];
	const { temp, pressure, humidity } = main;
	const temperature = (temp - 273.15).toFixed(0);
	return (
		<Block radius="5px" width="300px" boxShadow="10px -2px 20px 2px rgba(0,0,0,.3)">
			<FlexBox
				jc="space-between"
				ai="center"
				padding="10px"
				radius="6px 6px 0px 0px"
				bg="linear-gradient(to top left,#feb020,#ffd05c)"
			>
				<Block>
					<Text weight="bold" size="18px">
						{name}, {sys.country}
					</Text>
					<Text size="12px">{description}</Text>
				</Block>
				<Image>
					<img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={description} />
				</Image>
			</FlexBox>
			<FlexBox jc="space-between" padding="10px" ai="center">
				<Block width="50%">
					<Text weight="600" size="50px" letterSpace="-3px">
						{temperature}°C
					</Text>
				</Block>
				<Block width="50%">
					<Text weight="600" size="14px" borderBottom="1px solid #7adddd">
						Details
					</Text>
					<Block marginTop="10px">
						<FlexBox jc="space-between" ai="center" marginTop="5px">
							<Text size="12px">Feels like</Text>
							<Text size="12px" weight="bold">
								{temperature}°C
							</Text>
						</FlexBox>
						<FlexBox jc="space-between" ai="center" marginTop="5px">
							<Text size="12px">Wind</Text>
							<Text size="12px" weight="bold">
								{wind.speed} m/s
							</Text>
						</FlexBox>
						<FlexBox jc="space-between" ai="center" marginTop="5px">
							<Text size="12px">Humidity</Text>
							<Text size="12px" weight="bold">
								{humidity} %
							</Text>
						</FlexBox>
						<FlexBox jc="space-between" ai="center" marginTop="5px">
							<Text size="12px">Pressure</Text>
							<Text size="12px" weight="bold">
								{pressure} hPa
							</Text>
						</FlexBox>
					</Block>
				</Block>
			</FlexBox>
		</Block>
	);
};

export default CityCard;
