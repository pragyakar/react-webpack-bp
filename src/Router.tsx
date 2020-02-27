import * as React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import * as routes from './constants/routes';
import Callback from './components/Callback';
import Dashboard from './components/Dashboard';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path={routes.DASHBOARD} component={Dashboard} />
      <Route path={routes.CALLBACK} component={Callback} />
    </Switch>
  </BrowserRouter>
);

export default Router;
