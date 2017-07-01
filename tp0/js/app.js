import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './stores/app-store';
import Router from 'react-router';
import routes from './routing/routes';
import history from './routing/history';

const domElement =  document.getElementById('main');
const reactElement = (
  <Provider store = { store }>
    <Router history = { history } routes = { routes } />
  </Provider>
);
ReactDom.render(reactElement, domElement);
