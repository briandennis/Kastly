import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Discover from './pages/discover';
import Home from './pages/home'

const app = document.getElementById('app');


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Home}></Route>
    <Route path="/discover" component={Discover}></Route>
  </Router>,
  app);
