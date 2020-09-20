import React from 'react';
import {
  Router as BrowserRouter,
  Redirect,
  Switch,
  Route,
} from 'react-router-dom';

import history from './utils/history';

import * as routes from './constants/app.routes';

import { Homepage } from './pages/home';
import { Errorpage } from './pages/error';
import { StoryComments } from './pages/StoryComments'

const Router = () => (
  <BrowserRouter history={history}>
    <Switch>
      <Route exact path={routes.HOME} component={Homepage} />
      <Route exact path="comments/:id" component={StoryComments} />
      <Route path={routes.ERROR} component={Errorpage} />
      <Redirect to={`${routes.ERROR}?type=404`} />
    </Switch>
  </BrowserRouter>
);

export default Router;
