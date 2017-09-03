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

const Weather = ({ currentContact, isFetching, errorFetch, cityForecast }) => (
  <div>
    {!currentContact.name &&
    <div>
      <Title>Weather in the cities your contacts from</Title>
      <ImageWrap>
        <ImageUndef src={sky} />
      </ImageWrap>
    </div>
    }
    {isFetching === 'fetchDone' && errorFetch === '' && currentContact.name &&
      <div>
        <Title>Weather in {cityForecast.name}
          <Country>{cityForecast.sys.country}</Country>
        </Title>
        <MainInfo>
          <Image src={`http://openweathermap.org/img/w/${cityForecast.weather[0].icon}.png`} alt="weather" />
          <MainInfoTemperature>
            {Math.floor((cityForecast.main.temp - 273) * 100) / 100} °С
          </MainInfoTemperature>
        </MainInfo>
        <p>Temperature:
          {Math.floor((cityForecast.main.temp - 273) * 100) / 100} °С
        </p>
        <p>
          {cityForecast.weather[0].main}
        </p>
        <p>Humidity:
          {cityForecast.main.humidity} %
        </p>
        <p>Wind:
          {cityForecast.wind.speed} m/s
        </p>
      </div>
    }
    { errorFetch === 'city not found' && currentContact.name && <WeatherError /> }
  </div>
);

Weather.propTypes = {
  isFetching: PropTypes.string,
  errorFetch: PropTypes.string,
};
Weather.defaultProps = {
  currentContact: {},
  cityForecast: {},
};
const mapStateToProps = (state) => {
  const { currentContact } = state.contactsList;
  const { cityForecast } = state.weather;
  const { isFetching, errorFetch } = state.apiState;
  return { cityForecast, isFetching, errorFetch, currentContact };
};

export default connect(mapStateToProps)(Weather);
