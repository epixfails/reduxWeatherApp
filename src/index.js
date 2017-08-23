import React from 'react';
import ReactDOM from 'react-dom';
import './styled/styles.js';
import App from './components/App.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { contactReducer } from './reducers/reducers.js';
import registerServiceWorker from './registerServiceWorker';


let store = createStore(contactReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
