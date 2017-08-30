import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import App from './components/App';
import './components/styles';
import contactReducer from './reducers/reducers';
import registerServiceWorker from './registerServiceWorker';
import mySaga from './utilities/saga';

const initialState = {
  counter: 0,
  contacts: [
    {
      name: 'Vasya',
      phone: '+7495-111-11-77',
      city: 'Moscow',
      email: 'mail@ya.ya',
    },
    {
      name: 'Manya',
      phone: '+7911-111-11-77',
      city: 'Saratov',
      email: 'write.here@someone.com',
    },
  ],
  currentContact: {},
  filterValue: '',
  cityWeather: 'Samara',
  cityForecast: {},
  api: {
    isFetching: 'initial',
    errorFetch: '',
  },
};

const persistedState = localStorage.getItem('weatherAppState') ? JSON.parse(localStorage.getItem('weatherAppState')) : initialState;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
              contactReducer,
              persistedState,
              composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
store.subscribe(() => {
  localStorage.setItem('weatherAppState', JSON.stringify(store.getState()))
});
sagaMiddleware.run(mySaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
