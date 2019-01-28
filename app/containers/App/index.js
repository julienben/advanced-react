import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TweetBox from '../TweetBox';

const Home = () => <h2>Home</h2>;

const App = () => (
  <Router
  // forceRefresh
  >
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tweet-box/">Tweet Box</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Home} />
      <Route path="/tweet-box/" component={TweetBox} />
    </div>
  </Router>
);

export default App;
