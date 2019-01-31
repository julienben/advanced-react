import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from 'components/Navbar';
import routes from './routes';

const NotFoundPage = () => <h2>404 Page Not Found</h2>;

const App = () => (
  <Router>
    <>
      <Navbar />
      <div className="container">
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}

          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </>
  </Router>
);

export default App;
