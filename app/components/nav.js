import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setPlaylists, fetchingPlaylists } from './../actions';
import { Link } from 'react-router';
import { PlaylistService } from './../providers/api.service';


import PlaylistEditor from './playlistEditor';
import Dropdown from './dropdown';
import Login from './login';

class Nav extends React.Component {

  constructor () {
    super();

    this.state = {
      showModal: false,
      showDropdown: false,
    }

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.addPlaylist = this.addPlaylist.bind(this);
  }

  showModal () {
    this.setState({
      showModal: true
    });
  }

  hideModal () {
    console.log('hiding!');
    this.setState({
      showModal: false
    });
  }

  addPlaylist (playlist) {
    if (playlist === null) {
      this.setState({
        showModal: false
      });
    } else {
      PlaylistService.create(playlist)
        .then( (createdPlaylist) => {
          // set playlists
          this.props.fetchingPlaylists();
          axios.get(`/api/user/${this.props.user.id}/playlist`)
            .then( (response) => {
              this.props.setPlaylists(true, response.data);
            })
            .catch( (err) => {
              this.props.setPlaylists(false, null, err);
            });
        })
        .catch( (error) => {
          alert('Failed to add playlist. Please try again.');
        });
      this.setState({
        showModal: false
      });
    }
  }

  render () {
    let loginButton, avatar, playlistButton, userId;
    if (this.props.loggedIn) {

      // set user id to pass to mobile menu
      userId = this.props.user.id;

      // add profile button
      avatar = (
        <div className="nav-item">
          <Link id="avatarIcon" to={`/profile/${this.props.user.id}`}>
            <span className="icon navIcon">
              <i className="fa fa-user" />
            </span>
          </Link>
        </div>
      );

      // add new playlist button
      playlistButton = (
        <span className="nav-item">
          <a id="newPlaylistIcon"
              className="icon"
              onClick={this.showModal}>
            <i className="fa fa-plus" />
          </a>
        </span>
      );

    } else {

      let empty = (
        <div></div>
      );

      avatar = playlistButton = empty;
    }

    let modal = <span></span>;
    if (this.state.showModal) {
      modal = <PlaylistEditor type="Create" handler={this.addPlaylist} />;
    }

    return (
      <div className="nav-container">
        <nav className="nav has-shadow">
          <div className="nav-left">
            <div className="nav-item is-brand nav-item-underline">
              <Link to="/">
                <h1 className="navTitle">Kastly</h1>
              </Link>
            </div>
          </div>

          <span className="burger-container">
            <div className="dropdown-menu">
              <Dropdown loggedIn={this.props.loggedIn} userId={userId} toggle={this.showModal} />
            </div>
          </span>

          <div className="nav-right nav-menu">
            <Link className="nav-item nav-item-underline" to={'/playlists'}>
              Playlists
            </Link>
            <Link className="nav-item nav-item-underline" to={'/discover'}>
              Podcasts
            </Link>
            {playlistButton}
            {avatar}
            <Login loggedIn={this.props.loggedIn} logOutType="is-light" />
          </div>
        </nav>
        {modal}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: !!state.user.user,
    user: state.user.user
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setPlaylists,
    fetchingPlaylists
  }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(Nav);
