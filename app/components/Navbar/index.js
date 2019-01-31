import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import routes from 'containers/App/routes';

export default () => (
  <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
    <div className="container">
      <Link className="navbar-brand" to="/">
        App Name
      </Link>
      <ul className="navbar-nav">
        {routes.map((route, index) => (
          <li key={index} className="nav-item">
            <NavLink exact={route.exact} className="nav-link" to={route.path}>
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);
