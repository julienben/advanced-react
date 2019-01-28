import React from 'react';
import TweetBox from '../TweetBox';

const Home = () => <h2>Home</h2>;

export default [
  {
    path: '/',
    exact: true,
    name: 'Home',
    component: Home,
  },
  {
    path: '/tweet-box/',
    name: 'Tweet Box',
    component: TweetBox,
  },
];
