import React from 'react';
import { connect } from 'react-redux';
import { setUser, fetchingUser, setPlaylists, fetchingPlaylists } from './actions';

import Nav from './components/nav';

class App extends React.Component {

  componentWillMount() {
    // set user
    this.props.fetchingUser();

    axios.get('/api/user')
      .then( (response) => {
        this.props.setUser(true, response.data);
      }).catch( (err) => {
        this.props.setUser(false, null, err);
      });
  }

  render() {
    return (
      <div>
        <Nav />
        {this.props.children}
      </div>
    );
  }
}

/*const mapDispatchToProps = (dispatch) => {
  return {
    setUser (success, user) {
      dispatch(Actions.setUser(success, user));
    },

    fetchingUser () {
      dispatch(Actions.fetchingUser())
    }
  }
}; */

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setUser,
    fetchingUser,
    setPlaylists,
    fetchingPlaylists
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(App);
