import React, {lazy, Suspense} from 'react';
import {Route, useRouteMatch, Switch} from 'react-router-dom';
import Loader from '../../components/utility/loader';

const NotFoundComponent = lazy(() => import('@iso/custom/AllChart'));

const routes = [
  // {
  //   path: '',
  //   component: NotFoundComponent,
  //   exact: true
  // },
  {
    path: 'clock',
    component: lazy(() => import('../Clock')),
    exact: true,
    initProps: {
      fullTime: false
    }
  }
];

export default function AppRouter() {
  const {url} = useRouteMatch();
  return (
    <Suspense fallback={<Loader/>}>
      <Switch>
        {routes.map((route, idx) => (
          <Route exact={route.exact} key={idx} path={`${url}/${route.path}`}>
            <route.component {...route.initProps}/>
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
