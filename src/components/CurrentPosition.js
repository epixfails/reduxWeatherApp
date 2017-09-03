import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
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
const Rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const Loader = styled.div`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin: 0 25px;
  border: 4px solid rgba(255, 140, 50, 0.2);
  border-top-color: #FF8C32;
  animation: ${Rotate360} 2s linear infinite;
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
    this.handleRenewPosition = this.handleRenewPosition.bind(this);
  }
  componentDidMount() {
    this.handleRenewPosition();
  }
  handleRenewPosition() {
    this.setState({
      fetchState: 'fetching',
    });
    const weatherRequest = getCurrentWeather();
    weatherRequest.then(data =>
      this.setState({
        weather: data,
        fetchState: '',
      }),
    );
  }
  render() {
    const { name, main, wind, weather } = this.state.weather;
    return (
      <Wrap>
        <Title>Around you</Title>
        {name &&
          <InfoWrap>
            <Info position>
              You are here: {name}
            </Info>
            <Info>
              Temp: {Math.floor((main.temp - 273) * 100) / 100} °С
            </Info>
            <Info>
              {weather[0].description}
            </Info>
            <Info>
              Humidity: {main.humidity} %
            </Info>
            <Info>
              Wind: {wind.speed} m/s
            </Info>
          </InfoWrap>
        }
        {!name &&
          <Info>Allow this App get your geo and view info here</Info>
        }
        {this.state.fetchState === 'fetching' &&
          <Loader />
        }
        {this.state.fetchState === '' &&
          <Button onClick={this.handleRenewPosition}>Renew</Button>
        }
      </Wrap>
    );
  }
}

export default CurrentPosition;
