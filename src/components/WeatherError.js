import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { WeatherMain, WeatherInfo, WeatherCityTitle } from './weatherStyle';
import { Input, InputSubmit } from './styles';
import { newCityName, setWeather } from '../actions/actions';

class WeatherError extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: props.contact,
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
  handleChangeContact(event) {
    this.props.localNewCity(this.state.newCity)
  }
  render() {
    return (
      <WeatherMain>
        <WeatherCityTitle>Sorry, we got no info about this city</WeatherCityTitle>
        <WeatherInfo>You can change the city now</WeatherInfo>
        <Input onChange={this.handleNewCityName}placeholder={this.state.contact.city} />
        <InputSubmit onClick={this.handleChangeContact}>Confirm</InputSubmit>
      </WeatherMain>
    );
  }
}

const mapStateToProps = (state) => {
  const currentContact = state.currentContact;
  return {
    contact: currentContact,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    localNewCity: (city) => {
      dispatch(newCityName(city));
      dispatch(setWeather(city));
    },
  };
};

WeatherError.PropTypes = {
  city: PropTypes.string.isRequired,
  contact: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherError);
