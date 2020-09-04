import React from 'react';
import {
  Router as BrowserRouter,
  Redirect,
  Switch,
  Route,
} from 'react-router-dom';

import history from './utils/history';

import * as routes from './constants/routes';

import { Homepage } from './pages/home';
import { Errorpage } from './pages/error';

const Router = () => (
  <BrowserRouter history={history}>
    <Switch>
      <Route exact path={routes.HOME} component={Homepage} />
      <Route path={routes.ERROR} component={Errorpage} />
      <Redirect to={`${routes.ERROR}?type=404`} />
    </Switch>
  </BrowserRouter>
);

export default Router;
