import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import Weather from './Weather';
import { FullInfo, FullInfoNavWrap, NavLink, LayoutRouter } from './fullContactStyle';
import FullContact from './FullContact';

const RightPanel = () => (
  <BrowserRouter>
    <FullInfo>
      <FullInfoNavWrap>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/weather">Weather</NavLink>
      </FullInfoNavWrap>
      <LayoutRouter>
        <Route path="/contact" component={FullContact} />
        <Route path="/weather" component={Weather} />
      </LayoutRouter>
    </FullInfo>
  </BrowserRouter>
);

export default RightPanel;
