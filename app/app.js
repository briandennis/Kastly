import React from 'react';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { connect } from 'react-redux';

import { setUser } from './actions';

import Discover from './pages/discover';
import Home from './pages/home';
import Podcast from './pages/podcast';
import Profile from './pages/profile';

class App extends React.Component {

  componentWillMount() {
    // set user
    Actions.fetchingUser();

    axios.get('/api/user')
      .then( (response) => {
        this.props.setUser(true, response.data);
      }).catch( (err) => {
        this.props.setUser(false, null, err);
      });
  }

  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Home}></Route>
        <Route path="/podcast/:castId" component={Podcast}></Route>
        <Route path="/discover" component={Discover}></Route>
        <Route path="/profile/:userId" component={Profile}></Route>
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUser (success, user) {
      dispatch(setUser(success, user));
    }
  }
};

export default connect(null, mapDispatchToProps)(App);
