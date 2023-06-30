import React, {lazy, Suspense} from 'react';
import {Route, useRouteMatch, Switch} from 'react-router-dom';
import Loader from '../../components/utility/loader';

const NotFoundComponent = lazy(() => import("@iso/custom/PageNotFound"));

interface routesProps {
  path: string;
  component: React.LazyExoticComponent<React.FC<any>>;
  exact?: boolean;
  initProps?: any;
}

const routes: routesProps[] = [
  {
    path: '',
    component: lazy(() => import('@iso/custom/AllChart')),
    exact: true
  },
  {
    path: 'clock',
    component: lazy(() => import('@iso/custom/Clock')),
    exact: true,
    initProps: {
      fullTime: true
    }
  },
  {
    path: 'blank',
    component: lazy(() => import('@iso/custom/BlankPage')),
    exact: true,
    initProps: {
      fullTime: true
    }
  }
];

const AppRouter = () => {
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
};

export default AppRouter;
