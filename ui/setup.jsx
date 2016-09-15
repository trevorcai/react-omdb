import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import { watchForSearch, watchForLoadSingle } from './sagas';

window.React = React;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
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
