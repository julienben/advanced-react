import React from 'react';
import TweetBox from 'containers/TweetBox/Loadable';
import RepoLister from 'containers/RepoLister/Loadable';
import SelectDemo from 'containers/SelectDemo/';

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
  {
    path: '/select-demo/',
    name: 'Select Demo',
    component: SelectDemo,
  },
];
