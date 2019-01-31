import React from 'react';
import TweetBox from '../TweetBox/Loadable';
import RepoLister from '../RepoLister/Loadable';

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
  {
    path: '/repo-lister/',
    name: 'Repo Lister',
    component: RepoLister,
  },
];
