import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';

// eslint-disable-next-line no-undef
window.React = React;

const store = createStore(reducer);
const setup = {};

setup.render = function render(Component) {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
// eslint-disable-next-line no-undef
  document.getElementById('root'));
};

export default setup;
