import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { WeatherMain, WeatherInfo, WeatherCityTitle } from './weatherStyle';
import { Input, InputSubmit } from './styles';

class WeatherError extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: props.contact,
    };
  }
  render() {
    return (
      <WeatherMain>
        <WeatherCityTitle>Sorry, we got no info about this city</WeatherCityTitle>
        <WeatherInfo>You can change the city now</WeatherInfo>
        <Input placeholder={this.state.contact.city} />
        <InputSubmit>Confirm</InputSubmit>
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

WeatherError.PropTypes = {
  city: PropTypes.string.isRequired,
  contact: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(WeatherError);
