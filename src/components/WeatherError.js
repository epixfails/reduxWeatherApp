import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { newCityName, setWeather } from '../actions/actions';

const Title = styled.h2`
  font-size: 24px;
`;
const InputSubmit = styled.button`
  width:100%;
  background-color:#fff;
  border: 1px #FF8C32 solid;
  padding: 8px;
  font-size: 18px;
  &:hover {
    background: #FF8C32;
    color: #fff;
  }
`;
const Input = styled.input`
  width:100%;
  overflow: hidden;
  line-height:24px;
  font-size: 16px;
  margin: 5px 0;
  padding-left:10px;
  box-sizing: border-box;
`;

const WeatherError = ({ city, localNewCity }) => (
  <div>
    <Title>Sorry, we got no info about this city</Title>
    <p>You can change the city now</p>
    <Input
      innerRef={input => this.newCity = input}
      placeholder={city}
    />
    <InputSubmit onClick={() => localNewCity(this.newCity.value)}>
      Confirm
    </InputSubmit>
  </div>
);

const mapStateToProps = state => state.contactsList.currentContact;
const mapDispatchToProps = dispatch => (
  {
    localNewCity: (city) => {
      dispatch(newCityName(city));
      dispatch(setWeather(city));
    },
  }
);
WeatherError.propTypes = {
  localNewCity: PropTypes.func.isRequired,
  city: PropTypes.string,
};
WeatherError.defaultProps = {
  city: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherError);
