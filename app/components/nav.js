import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setPlaylists, fetchingPlaylists } from './../actions';
import { Link } from 'react-router';
import { PlaylistService } from './../providers/api.service';


import PlaylistEditor from './playlistEditor.js';

class Nav extends React.Component {

  constructor () {
    super();

    this.state = {
      showModal: false
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
    let loginButton, avatar, playlistButton;
    if (this.props.loggedIn) {
      // set login button
      loginButton = (
        <span className="nav-item">
          <a className="button is-light" href="/logout">
            Log Out
          </a>
        </span>
      );

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
      loginButton = (
        <span className="nav-item">
          <a className="button loginButton"
             href={`/login/twitter?redirect=${encodeURIComponent(window.location.pathname)}`}>
            <span style={{marginRight: '10px'}} className="icon">
              <i className="fa fa-twitter"></i>
            </span>Log in
          </a>
        </span>
      );

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

          <span className="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
            <div className="box nav-dropdown">
              <li> Playlists </li>
              <li> Podcasts </li>
              <li> New Playlist </li>
              <li> Profile  </li>
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
            {loginButton}
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
