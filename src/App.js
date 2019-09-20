import React from 'react';
import axios from 'axios';
import { Block } from './style/common';
//Components
import CityCard from './Components/CityCard';

const API_URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = 'a09c142a9d5d5b66939a5ddbb82bfb4c';

class App extends React.Component {
	state = {
		weatherData: [],
		isLoading: true,
	};

	componentDidMount() {
		axios
			.get(`${API_URL}Almaty&appid=${API_KEY}`)
			.then(res => {
				const weatherData = res.data;
				this.setState({ weatherData, isLoading: false });
			})
			.catch(err => console.error('OPPS something went wrong!', err));
	}
	render() {
		const { weatherData, isLoading } = this.state;
		return <Block>{!isLoading ? <CityCard data={weatherData} /> : <Block>loading...</Block>}</Block>;
	}
}

export default App;
