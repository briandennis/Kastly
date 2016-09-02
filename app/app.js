import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setUser, fetchingUser, setPlaylists, fetchingPlaylists } from './actions';
import { UserService, PlaylistService } from './providers/api.service';

import Nav from './components/nav';
import Footer from './components/footer';

class App extends React.Component {

  componentWillMount() {
    // TODO Extract to api provider
    // set user
    this.props.fetchingUser();
    axios.get('/api/user')
      .then( (response) => {
        this.props.setUser(true, response.data);
        // set playlists
        if (response.data !== null) {
          this.props.fetchingPlaylists();
          axios.get(`/api/playlist`)
            .then( (response) => {
              this.props.setPlaylists(true, response.data);
            })
            .catch( (err) => {
              this.props.setPlaylists(false, null, err);
            })
        }
      }).catch( (err) => {
        this.props.setUser(false, null, err);
      });

    /*this.props.fetchingUser();
    let user = null;
    UserService.get()
      .then( (user) => {
        this.props.setUser(true, response.data);
        user = response.data;
        return PlaylistService.get();
      })
      .then( (playlists) => {
        if (user) {
          const userPlaylists = playlists.filter( (playlist => {
            return playlist.authorId === user._id;
          }));
          this.props.setPlaylists(true, userPlaylists);
        } else {
          this.props.setPlaylists(true, []);
        }
      })
      .catch( (err) => {
        this.props.setUser(false, null, err);
        this.props.setPlaylists(false, null);
      }); */
  }

  render() {
    return (
      <div>
        <Nav />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setUser,
    fetchingUser,
    setPlaylists,
    fetchingPlaylists
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(App);
