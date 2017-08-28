import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { WeatherWrap, WeatherMain, WeatherDetail, WeatherMainInfo, WeatherMainInfoTemperature, WeatherCountry, WeatherCityTitle, WeatherImgWrap, ImageWeather } from './weatherStyle';
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
      <div>
        <WeatherMain>
          <WeatherCityTitle>Weather in {props.weather.name}<WeatherCountry></WeatherCountry></WeatherCityTitle>
          <WeatherMainInfo>
            <WeatherMainInfoTemperature>{props.weather.main.temp}</WeatherMainInfoTemperature>
          </WeatherMainInfo>
          <p>Temperature:</p>
          <p>Humidity: </p>
          <p>Wind: </p>
        </WeatherMain>
      </div>
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
  return ({
    city: cityWeather,
    weather: cityForecast,
    fetchState: isFetching,
  });
};

export default connect(mapStateToProps)(Weather);
