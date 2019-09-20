import React from 'react';
import { Block, FlexBox, Text } from '../../style/common';
import { Image } from './style';

const CityCard = ({ data }) => {
  const { name, sys, weather } = data;
  const { icon, description } = weather[0]
	return (
		<Block radius="5px" width="300px">
			<FlexBox
				jc="space-between"
				ai="center"
				padding="10px"
				radius="6px 6px 0px 0px"
				bg="linear-gradient(to top left,#feb020,#ffd05c);"
			>
				<Block>
					<Text weight="bold" size="18px">
						{name}, {sys.country}
					</Text>
					<Text size="12px">{description}</Text>
				</Block>
				<Image>
					<img
						src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
						alt={description}
					/>
				</Image>
			</FlexBox>
			<FlexBox jc="space-between" padding="10px">
				<Block width="50%">
					<Text weight="600" size="55px" letterSpace="-3px">
						17°C
					</Text>
				</Block>
				<Block width="50%">
          <Text weight="600" size="14px">Details</Text>
          <Block>
            
          </Block>
        </Block>
			</FlexBox>
		</Block>
	);
};

export default CityCard;
