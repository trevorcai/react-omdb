import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import Immutable from 'immutable';
import reducer from './reducer';
import { watchForSearch, watchForLoadSingle } from './sagas';

let store;
window.React = React;

const sagaMiddleware = createSagaMiddleware();
const persistedState = localStorage.getItem('reduxState');
if (persistedState) {
  const parsedState = JSON.parse(persistedState);
  if (parsedState.movies) {
    parsedState.movies = new Immutable.List(parsedState.movies);
  }
  const immutableState = new Immutable.Map(parsedState);

  store = createStore(reducer, immutableState, applyMiddleware(sagaMiddleware));
} else {
  store = createStore(reducer, applyMiddleware(sagaMiddleware));
}

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});
sagaMiddleware.run(watchForSearch);
sagaMiddleware.run(watchForLoadSingle);

const setup = {};
setup.render = function render(router) {
  ReactDOM.render(
    <Provider store={store}>{router}</Provider>,
    document.getElementById('root')
  );
};

export default setup;
