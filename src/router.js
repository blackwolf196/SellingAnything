import React, { lazy, Suspense } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import Loader from './components/utility/loader';
const RouteLayout = () => {
  const DashboardPublic = lazy(() => import('@custom/Dashboard/Dashboard'));

  const PublicRoute = ({ children, ...rest }) => {
    return <Route {...rest} render={() => children} />;
  };

  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <Router>
          <Switch>
            <Route key={''} path={'/'} exact>
              <DashboardPublic />
            </Route>
            <PublicRoute path={'/trang-chu'}>
              <DashboardPublic />
            </PublicRoute>
          </Switch>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
};

export default RouteLayout;
