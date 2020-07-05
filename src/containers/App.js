import React, { Component } from 'react';
import './App.css';
import FormInput from '../components/formInput/formInput';
import Forecast from '../components/forecast/forecast';
import Axios from 'axios';
import $ from 'jquery';

const api_key = "7c00a7b9a8aa9a55034f59a4ceaabbed";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: '',
      city: '',
      country: '',
      humidity: '',
      pressure: '',
      sunrise: '',
      sunset: '',
      id: '',
      list: [],
      main: '',
      hourly: [],
      daily: [],
      error: '',
      load: false
    }
    
    this.getWeather = this.getWeather.bind(this);
    this.getWeather2 = this.getWeather2.bind(this);
  }

  // Fetch Latitute and Longitute from city name
  getWeather(e) {
    e.preventDefault();
    const city = e.target.elements[0].value;
    if (city === '') {
      console.log('City should not be empty');
    } else {
      Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`).then(res => {
        const coord = res.data.coord;
        const country = res.data.sys.country;
        this.getWeather2(coord.lat, coord.lon, city, country)
      }).catch(res => {
        this.setState({
          error: 'Please enter valid city name',
          load: false
        });
        $('.App').removeClass('weatherOpen');
      });
    }

  }

  // Fetch daily/hourly data by using Lat and Long 
  getWeather2(lat, lon, city, country) {
    Axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&%20exclude=hourly,daily&appid=${api_key}&units=metric`).then(res => {
      const responseData = res.data;
      this.setState({
        temperature: responseData.current.temp,
        city: city,
        country: country,
        humidity: responseData.current.humidity,
        pressure: responseData.current.pressure,
        sunrise: responseData.current.sunrise,
        sunset: responseData.current.sunset,
        description: responseData.current.weather[0].description,
        id: responseData.current.weather[0].id,
        hourly: responseData.hourly,
        daily: responseData.daily,
        error: '',
        load: true
      });
      $('.App').addClass('weatherOpen');
    }).catch(res => {
      this.setState({
        error: 'Please Enter valid City name',
        load: false
      });
      $('.App').removeClass('weatherOpen');
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          {/* Form */}
          <FormInput formsubmit={this.getWeather} errorMsg={this.state.error}></FormInput>
          
          {/* Forcast Result */}
          {this.state.load ? <Forecast forecastData={this.state}></Forecast> : null}
        </div>
      </div>
    );
  }
}

export default App;