import React, {lazy, Suspense} from 'react';
import {Route, useRouteMatch, Switch} from 'react-router-dom';
import Loader from '../../components/utility/loader';

const routes = [
  {
    path: '',
    component: lazy(() => import('../Clock')),
    exact: true,
  },
  {
    path: 'clock',
    component: lazy(() => import('../Clock')),
    exact: true,
  }
];

const NotFoundComponent = lazy(() => import('@iso/custom/AllChart'));

export default function AppRouter() {
  const {url} = useRouteMatch();
  return (
    <Suspense fallback={<Loader/>}>
      <Switch>
        {routes.map((route, idx) => (
          <Route exact={route.exact} key={idx} path={`${url}/${route.path}`}>
            <route.component/>
          </Route>
        ))}
        {/*Not found route*/}
        <Route path={"*"}>
          <NotFoundComponent/>
        </Route>
      </Switch>
    </Suspense>
  );
}
