import React from 'react';
import axios from 'axios';
import { Block, FlexBox, Text } from './style/common';
//Components
import CityCard from './Components/CityCard';
import Loader from './Components/Loader';
import CitySelection from './Components/CitySelection/CitySelection';

const API_KEY = 'a09c142a9d5d5b66939a5ddbb82bfb4c';

class App extends React.Component {
	state = {
		weatherData: null,
		loading: true,
		value: 'Almaty',
	};

	componentDidMount() {
		this.getWeatherData(this.state.value);
	}

	getWeatherData = value => {
		axios
			.get(`http://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${API_KEY}`)
			.then(res => {
				const weatherData = res.data;
				this.setState({ weatherData, loading: false });
			})
			.catch(err => console.log('err', err));
	};

	onChangeHandler = e => {
		const { value } = e.target;
		this.setState({ value });
		this.getWeatherData(value);
	};

	render() {
		const { loading, weatherData } = this.state;
		return (
			<Block>
				<FlexBox jc="center">
					<Block>
						<Text marginBottom="10px" color="#cccccc">Choose the city</Text>
						<CitySelection onChangeHandler={this.onChangeHandler} />
					</Block>
				</FlexBox>
				{!loading ? (
					<FlexBox jc="center" marginTop="30px">
						<CityCard data={weatherData} />
					</FlexBox>
				) : (
					<Loader />
				)}
			</Block>
		);
	}
}

export default App;
