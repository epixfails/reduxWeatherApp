import React from 'react';
import ReactDOM from 'react-dom';
import './styled/styles.js';
import App from './components/App.js';
import { Provider } from 'react-redux';
import store from './components/App.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
