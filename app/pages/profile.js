import React from 'react'

import { connect } from 'react-redux'

import MediaItemsContainer from './../components/mediaItemsContainer';
import Spinner from 'react-spinkit';

class Profile extends React.Component {

  constructor() {
    super()

    this.state = {
      user: null,
      playlists: [],
      bummer: false
    };

    this.setUser = this.setUser.bind(this);
  }

  setUser (props) {
    if( props.sessionUser
        && props.params.userId == props.sessionUser.id) {
      this.setState({
        user: props.sessionUser,
        playlists: props.playlists
      })
    } else {
      console.log('Not same user!');

    }
  }

  componentWillMount () {
    this.setUser(this.props);
  }

  componentWillReceiveProps (newProps) {
    this.setUser(newProps);
  }

  render () {
    let page = (
      <div className="columns">
        <div className="centerChildren" className="column is-12">
          <Spinner spinnerName="three-bounce" />
        </div>
      </div>
    )

    if (this.state.user) {
      page = (
        <div>
          <div className="title">
            <img src={this.state.user.image} />
            <h1>{this.state.user.name}</h1>
          </div>
          <div>
            <MediaItemsContainer type="playlist" items={this.state.playlists} />
          </div>
        </div>
      );
    }

    return page;
  }
}

const mapStateToProps = function (state) {
  return {
    sessionUser: state.user.user,
    playlists: state.playlist.playlists
  };
};

export default connect(mapStateToProps)(Profile)
