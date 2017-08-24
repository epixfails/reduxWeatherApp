import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import './styled/styles';
import contactReducer from './reducers/reducers';
import registerServiceWorker from './registerServiceWorker';

const initialState = {
  counter: 0,
  contacts: [],
  filterValue: '',
};

const store = createStore(contactReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
