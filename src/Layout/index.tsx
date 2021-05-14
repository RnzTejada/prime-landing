import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  RouteProps,
  Switch,
} from 'react-router-dom';
import ErrorBoundary from '../components/ErrorBoundary';
import TopNav from '../components/TopNav';
import { routes } from '../utils/routes';

function App() {
  return (
    <>
      <ErrorBoundary>
        <Router>
          <TopNav />
          <Switch>
            {routes.map((route) => {
              const Component = route.component;
              const Key = route.key;

              return (
                <RouteProgress
                  key={Key}
                  path={route.path}
                  exact={route.exact}
                  render={(props) => <Component {...props} />}
                />
              );
            })}
          </Switch>
        </Router>
      </ErrorBoundary>
    </>
  );
}

function RouteProgress(props: RouteProps) {
  return <Route {...props} />;
}

export default App;
