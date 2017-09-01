import React, { Component } from 'react';
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
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
`;


class WeatherError extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: props.city,
      newCity: '',
    };
    this.handleChangeContact = this.handleChangeContact.bind(this);
    this.handleNewCityName = this.handleNewCityName.bind(this);
  }
  handleNewCityName(event) {
    this.setState({
      newCity: event.target.value,
    })
  }
  handleChangeContact() {
    this.props.localNewCity(this.state.newCity)
  }
  render() {
    return (
      <div>
        <Title>Sorry, we got no info about this city</Title>
        <p>You can change the city now</p>
        <Input onChange={this.handleNewCityName}placeholder={this.state.city} />
        <InputSubmit onClick={this.handleChangeContact}>Confirm</InputSubmit>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const city = state.contacts.currentContact.city;
  return { city };
};

const mapDispatchToProps = (dispatch) => {
  return {
    localNewCity: (city) => {
      dispatch(newCityName(city));
      dispatch(setWeather(city));
    },
  };
};

WeatherError.propTypes = {
  localNewCity: PropTypes.func.isRequired,
  city: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherError);
