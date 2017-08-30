import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WeatherError from './WeatherError';
import { WeatherWrap, WeatherMain, WeatherMainInfo, WeatherMainInfoTemperature, WeatherCountry, WeatherCityTitle, WeatherImgWrap, ImageWeather, WeatherInfo, WeatherImage } from './weatherStyle';
import sky from '../img/sky.svg';

const Weather = props => (
  <WeatherWrap>
  {props.fetchState === 'initial' && (
    <WeatherMain>
      <WeatherCityTitle>Weather in the cities your contacts from</WeatherCityTitle>
      <WeatherImgWrap>
        <ImageWeather src={sky} />
      </WeatherImgWrap>
    </WeatherMain>
    )}
    {props.fetchState === 'fetchDone' && (
      props.fetchError === '' && (
        <WeatherMain>
          <WeatherCityTitle>Weather in {props.weather.name}
            <WeatherCountry></WeatherCountry>
          </WeatherCityTitle>
          <WeatherMainInfo>
            <WeatherImage src={`http://openweathermap.org/img/w/${props.weather.weather[0].icon}.png`} alt="weather" />
            <WeatherMainInfoTemperature>
              {Math.floor((props.weather.main.temp - 273) * 100) / 100} °С
            </WeatherMainInfoTemperature>
          </WeatherMainInfo>
          <WeatherInfo>Temperature:
            {Math.floor((props.weather.main.temp - 273) * 100) / 100} °С
          </WeatherInfo>
          <WeatherInfo>
            {props.weather.weather[0].description}
          </WeatherInfo>
          <WeatherInfo>Humidity:
            {props.weather.main.humidity} %
          </WeatherInfo>
          <WeatherInfo>Wind:
            {props.weather.wind.speed} m/s
          </WeatherInfo>
        </WeatherMain>
      )
    )}
    {props.fetchError === 'city not found' && (
      <WeatherError />
    )}
  </WeatherWrap>
);


Weather.PropTypes = {
  city: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
  humidity: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  const cityWeather = state.cityWeather;
  const isFetching = state.api.isFetching;
  const cityForecast = state.cityForecast;
  const error = state.api.errorFetch;
  return ({
    city: cityWeather,
    weather: cityForecast,
    fetchState: isFetching,
    fetchError: error,
  });
};

export default connect(mapStateToProps)(Weather);
