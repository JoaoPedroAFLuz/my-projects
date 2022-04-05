import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { NotFound } from './pages/NotFound';

export function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route component={NotFound} />
    </Switch>
  );
}
