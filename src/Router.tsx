import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import history from 'src/utils/history';
import Callback from 'src/components/Callback';
import Dashboard from 'src/components/Dashboard';
import * as routes from 'src/constants/routes';

const Router = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path={routes.DASHBOARD} component={Dashboard} />
      <Route path={routes.CALLBACK} component={Callback} />
    </Switch>
  </ConnectedRouter>
);

export default Router;
