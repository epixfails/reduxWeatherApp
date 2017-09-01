import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import App from './components/App';
import reducer from './reducers/index';
import registerServiceWorker from './registerServiceWorker';
import mySaga from './api/saga';

const persistedState = localStorage.getItem('weatherAppState') ? JSON.parse(localStorage.getItem('weatherAppState')) : {};
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
              reducer,
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
