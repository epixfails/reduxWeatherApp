import React, { Component } from 'react';
import styled from 'styled-components';
import { getCurrentWeather } from '../api/apirequest';

const Title = styled.p`
  font-weight: 700;
  margin: 5px;
  color: #FF8C32;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px;
  margin: 10px 20px 0 0;
  border-bottom: 1px #FF8C32 solid;
`;
const Info = styled.p`
  margin: 5px;
  margin-right: 40px;
`;
const Button = styled.button`
  background: #fff;
  border: 1px #FF8C32 solid;
  display: block;
  font-weight: 700;
  padding: 5px 20px;
  &:hover {
    background: #FF8C32;
    color: #fff;
  }
`;
const InfoWrap = styled.div`
  display: flex;
  flex-direction: row;
`;


class CurrentPosition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: {},
      fetchState: null,
    };
  }
  componentDidMount() {
    this.handleRenewPosition();
  }
  handleRenewPosition() {
    const weather = getCurrentWeather();
    weather.then(data =>
      this.setState({
        weather: data,
      }),
    );
  }

  render() {
    const weather = { ...this.state.weather };
    return (
      <Wrap>
        <Title>Around you</Title>
        {weather.name && (
          <InfoWrap>
            <Info position>
              You are here: {weather.name}
            </Info>
            <Info>
              Temp: {Math.floor((weather.main.temp - 273) * 100) / 100} °С
            </Info>
            <Info>
              {weather.weather[0].description}
            </Info>
            <Info>
              Humidity: {weather.main.humidity} %
            </Info>
            <Info>
              Wind: {weather.wind.speed} m/s
            </Info>
          </InfoWrap>
        )}
        {!weather.name && (
          <Info>Allow this App get your geo and view info here</Info>
        )}
        <Button onClick={this.handleRenewPosition}>Renew</Button>
      </Wrap>
    );
  }
}

export default CurrentPosition;
