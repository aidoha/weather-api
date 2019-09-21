import React from 'react';
import axios from 'axios';
import { Block, FlexBox } from './style/common';
//Components
import CityCard from './Components/CityCard';
import Loader from './Components/Loader';

const API_URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = 'a09c142a9d5d5b66939a5ddbb82bfb4c';

class App extends React.Component {
	state = {
		weatherData: [],
		isLoading: true,
	};

	componentDidMount() {
		axios
			.get(`${API_URL}London&appid=${API_KEY}`)
			.then(res => {
				const weatherData = res.data;
				this.setState({ weatherData, isLoading: false });
			})
			.catch(err => console.error('OPPS something went wrong!', err));
	}
	render() {
		const { weatherData, isLoading } = this.state;
		return (
			<Block>
				{!isLoading ? (
					<FlexBox jc="center">
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
