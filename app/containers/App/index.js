import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import TweetBox from '../TweetBox';

const Home = () => <h2>Home</h2>;

const App = () => (
  <Router
  // TODO: What's this?
  // forceRefresh
  >
    <>
      <Navbar />
      <div className="container">
        <Route path="/" exact component={Home} />
        <Route path="/tweet-box/" component={TweetBox} />
      </div>
    </>
  </Router>
);

export default App;
