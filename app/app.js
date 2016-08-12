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
        console.log(response);
        Actions.setUser(true, response.data);
      }).catch( (err) => {
        Actions.setUser(false, null, err);
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
