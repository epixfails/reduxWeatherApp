import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import WeatherError from './WeatherError';
import sky from '../img/sky.svg';

const Title = styled.h2`
  font-size: 24px;
`;
const Country = styled.span`
  float: right;
  color: #525252;
`;
const MainInfo = styled.div`
  display: flex;
  flex-direction: row;
`;
const MainInfoTemperature = styled.p`
  margin: 5px 10px;
  font-size: 36px;
  font-weight: 700;
  color: #31a251;
`;
const Image = styled.img`
  margin-right: 20px;
  width: 60px;
  height: 60px;
`;
const ImageWrap = styled.div`
  width: 100%;
  text-align: center;
  padding: 50px 0;
`;
const ImageUndef = styled.img`
  width: 150px;
`;


const Weather = props => (
  <div>
    {!props.currentContact.name && (
    <div>
      <Title>Weather in the cities your contacts from</Title>
      <ImageWrap>
        <ImageUndef src={sky} />
      </ImageWrap>
    </div>
    )}
    {props.fetchState === 'fetchDone' && props.errorFetch === '' && props.currentContact.name && (
      <div>
        <Title>Weather in {props.weather.name}
          <Country>{props.weather.country}</Country>
        </Title>
        <MainInfo>
          <Image src={`http://openweathermap.org/img/w/${props.weather.weather[0].icon}.png`} alt="weather" />
          <MainInfoTemperature>
            {Math.floor((props.weather.main.temp - 273) * 100) / 100} °С
          </MainInfoTemperature>
        </MainInfo>
        <p>Temperature:
          {Math.floor((props.weather.main.temp - 273) * 100) / 100} °С
        </p>
        <p>
          {props.weather.weather[0].main}
        </p>
        <p>Humidity:
          {props.weather.main.humidity} %
        </p>
        <p>Wind:
          {props.weather.wind.speed} m/s
        </p>
      </div>
      )
    }
    { props.errorFetch === 'city not found' && props.currentContact.name && <WeatherError /> }
  </div>
);


Weather.propTypes = {
  city: PropTypes.string,
  fetchState: PropTypes.string,
  errorFetch: PropTypes.string,
};

const mapStateToProps = (state) => {
  const currentContact = state.contacts.currentContact;
  const city = state.weather.cityWeather;
  const weather = state.weather.cityForecast;
  const fetchState = state.apiState.isFetching;
  const errorFetch = state.apiState.errorFetch;
  return ({
    city,
    weather,
    fetchState,
    errorFetch,
    currentContact,
  });
};

export default connect(mapStateToProps)(Weather);
