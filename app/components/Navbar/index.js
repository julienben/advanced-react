import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
    <div className="container">
      <Link className="navbar-brand" to="/">
        App Name
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/tweet-box/">
            Tweet Box
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);
