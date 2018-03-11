import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppliedRoute from "./components/AppliedRoute";

import Home from './containers/Home';
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import NotFound from './containers/NotFound';

/**
 * Switch: renders first matching route that is defined within it
 * exact: ensure it matches the / route, because / will also match any route that
 * starts with a /
 */
export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    <AppliedRoute path="/signup" exact component={Signup} props={childProps} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>
