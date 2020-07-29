import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store/store';
import './style/bootstrap.min.css';
import './style/App.css';
import 'font-awesome/css/font-awesome.min.css';
import App from './App'

ReactDOM.render(
  <Provider store={store}>
   <App />
  </Provider>,
  document.getElementById('root')
 );