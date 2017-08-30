import React, { Component } from 'react';
import { CurrentPositionWrap, CurrentPositionTitle, CurrentPositionInfo, CurrentPositionBtn, CurrentPositionInfoWrap } from './currentPositionStyle';

class CurrentPosition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: {},
      fetchState: null,
    };
    this.handleRenewPosition = this.handleRenewPosition.bind(this);
    this.handleRenewPosition();
  }

  handleRenewPosition() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        fetch(`
          http://api.openweathermap.org/data/2.5/weather?lat=${
            position.coords.latitude}&lon=${position.coords.longitude
            }&APPID=5e429eedeec5221805a8a1e0186eb3e3
          `)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            this.setState({
              weather: data,
            });
            console.log(this.state)
            return data;
          })
          .catch((error) => {
            console.log('fuuuuck')
            this.setState({
              fetchState: error,
            });
          });
      },
    );
  }

  render() {
    return (
      <CurrentPositionWrap>
        <CurrentPositionTitle>Around you</CurrentPositionTitle>
        {this.state.weather.name && (
          <CurrentPositionInfoWrap>
            <CurrentPositionInfo position>
              You are here: {this.state.weather.name}
            </CurrentPositionInfo>
            <CurrentPositionInfo>
              Temp: {Math.floor((this.state.weather.main.temp - 273) * 100) / 100} °С
            </CurrentPositionInfo>
            <CurrentPositionInfo>
              {this.state.weather.weather[0].description}
            </CurrentPositionInfo>
            <CurrentPositionInfo>
              Humidity: {this.state.weather.main.humidity} %
            </CurrentPositionInfo>
            <CurrentPositionInfo>
              Wind: {this.state.weather.wind.speed} m/s
            </CurrentPositionInfo>
          </CurrentPositionInfoWrap>
        )}
        {!this.state.weather.name && (
          <CurrentPositionInfo>Allow this App get your geo and view info here</CurrentPositionInfo>
        )}
        <CurrentPositionBtn onClick={this.handleRenewPosition}>Renew</CurrentPositionBtn>
      </CurrentPositionWrap>
    );
  }
}

export default CurrentPosition;
