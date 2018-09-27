import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../src/Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import Property from './Components/Property/Property';

export default (
  <Switch>
    <Route exact path="/" component={Dashboard}/>
    <Route path="/home" component={Home} />
    <Route path="/Property/:id" component={Property}/>
  </Switch>
);