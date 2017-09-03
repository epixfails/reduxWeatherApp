import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { Route, Router } from 'react-router';
import styled from 'styled-components';
import Weather from './Weather';
import FullContact from './FullContact';

const NavWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-bottom: 1px #CAC8C8 solid;
`;
const FullInfo = styled.div`
  width: 40%;
  padding: 10px 20px;
`;
const NavLink = styled(Link)`
  width: 50%;
  display: block;
  padding: 10px;
  color: #FF8C32;
  text-align: center;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  &:hover{
    background: #FF8C32;
    color: #fff;
  }
  &:focus{
  }
`;

const RightPanel = () => (
  <BrowserRouter>
    <FullInfo>
      <NavWrap>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/weather">Weather</NavLink>
      </NavWrap>
      <div>
        <Route path="/contact" component={FullContact} />
        <Route path="/weather" component={Weather} />
      </div>
    </FullInfo>
  </BrowserRouter>
);

export default RightPanel;
