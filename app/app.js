import React from 'react';

import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import * as Actions from './actions';
import Discover from './pages/discover';
import Home from './pages/home'

class App extends React.Component {

  componentWillMount() {
    // set user
    Actions.fetchingUser();

    axios.get('/api/user')
      .then( (response) => {
        alert(response);
      }).catch( (err) => {
        aler(err);
      });
  }

  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Home}></Route>
        <Route path="/discover" component={Discover}></Route>
      </Router>
    );
  }
}

export default App;
