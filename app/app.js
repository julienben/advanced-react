import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './utils/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import TweetBox from './containers/TweetBox';

ReactDOM.render(
  <Provider store={configureStore()}>
    <TweetBox />
  </Provider>,
  document.getElementById('app'),
);
