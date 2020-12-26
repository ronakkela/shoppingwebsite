import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';


import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';

import Router from './Router';
import configureStore from './store';

// import App from './App';
// import Signup from './Signup';
// import Products from './Products';

const store = configureStore();


ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
