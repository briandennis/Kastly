import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setUser, fetchingUser, setPlaylists, fetchingPlaylists } from './actions';

import Nav from './components/nav';

class App extends React.Component {

  componentWillMount() {
    // TODO Extract to api provider
    // set user
    this.props.fetchingUser();
    axios.get('/api/user')
      .then( (response) => {
        this.props.setUser(true, response.data);
        // set playlists
        this.props.fetchingPlaylists();
        axios.get(`/api/user/${response.data._id}/playlists`)
          .then( (response) => {
            this.props.setPlaylists(true, response.data);
          })
          .catch( (err) => {
            this.props.setPlaylists(false, null, err);
          })
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
