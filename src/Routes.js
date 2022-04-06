import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Project } from './pages/Project';
import { NotFound } from './pages/NotFound';

export function Routes() {
  const location = useLocation();
  const transition = useTransition(location, {
    from: { opacity: 0, transform: 'translateY(50px)', position: 'absolute' },
    enter: { opacity: 1, transform: 'translateY(0)', position: 'absolute' },
    leave: { opacity: 0, transform: 'translateY(50px)', position: 'absolute' },
  });

  return transition((props, item) => (
    <animated.div style={props}>
      <Switch location={item}>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route path="/projects/:id" component={Project} />
        <Route component={NotFound} />
      </Switch>
    </animated.div>
  ));
}
