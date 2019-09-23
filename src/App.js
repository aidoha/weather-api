import React from 'react';
import axios from 'axios';
import { Block, FlexBox, Text } from './style/common';
//Components
import CityCard from './Components/CityCard';
import CitySelection from './Components/CitySelection';
import CitySearch from './Components/CitySearch';
import Button from './Components/Button';
import Loader from './Components/Loader';

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
			.catch(err => console.log('Opps something went wrong', err));
	};

	onChangeHandler = e => {
		const { value } = e.target;
		this.setState({ value });
		this.getWeatherData(value);
	};

	onSearchHandler = e => {
		const { value } = e.target;
		this.setState({ value });
	};

	onBtnHandler = () => {
		this.getWeatherData(this.state.value);
	};

	render() {
		const { loading, weatherData } = this.state;
		return (
			<Block minWidth="300px" maxWidth="300px" margin="auto">
				<FlexBox jc="center">
					<Block>
						<Text marginBottom="10px" color="#cccccc">
							Choose the city
						</Text>
						<CitySelection onChangeHandler={this.onChangeHandler} />
					</Block>
				</FlexBox>
				<FlexBox jc="space-between" marginTop="20px">
					<CitySearch onSearchHandler={this.onSearchHandler} />
					<Button onClick={this.onBtnHandler}>Search</Button>
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
