import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import App from './app';
import Discover from './pages/discover';
import Home from './pages/home';
import Podcast from './pages/podcast';
import Profile from './pages/profile';

const entryNode = document.getElementById('app');

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="podcast/:castId" component={Podcast}></Route>
        <Route path="discover" component={Discover}></Route>
        <Route path="profile/:userId" component={Profile}></Route>
        <Route path="playlist/:playlistId" component={Playlist}></Route>
      </Route>
    </Router>
  </Provider>,
  entryNode);
