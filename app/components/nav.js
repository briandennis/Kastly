import React from 'react';
import { connect } from 'react-redux';
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
      console.log('adding playlist...');
      PlaylistService.create(playlist)
        .then( (createdPlaylist) => {
          console.log('Successfully added playlist!');
        })
        .catch( (error) => {
          console.log('Failed ' + error);
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
          <a className="button is-primary" href="/login/twitter">
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
      <div>
        <div className="nav">
          <div className="nav-left">
            <div className="nav-item is-brand">
              <Link to="/">
                <h1 className="navTitle">Kastly</h1>
              </Link>
            </div>
          </div>
          <div className="nav-right">
            {playlistButton}
            {avatar}
            {loginButton}
          </div>
        </div>
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

export default connect(mapStateToProps)(Nav);
