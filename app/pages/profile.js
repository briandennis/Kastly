import React from 'react'
import { connect } from 'react-redux'
import { PlaylistService, UserService } from './../providers/api.service';


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
      });
    } else if (props.params.userId) {
      // get user
      UserService.get(props.params.userId)
        .then( (user) => {
          this.setState({ user });
        })
        .catch( (error) => {
          console.error(error);
          this.setState({ bummer: true });
        });

      // get users playlists
      PlaylistService.get()
        .then( (playlists) => {
          return playlists.filter( (playlist) => {
            return playlist.authorId === props.params.userId;
          })
        })
        .then( (userPlaylists) => {
          this.setState({ playlists: userPlaylists });
        })
        .catch(console.error);

    } else {
      this.setState({ bummer: true });
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
        <div className="columns is-multiline">
          <div className="column center is-full">
            <img className="profileImage" src={this.state.user.image} />
          </div>
          <div className="column center is-full">
            <h1 className="title is-2 profileTitle">{this.state.user.name}</h1>
          </div>
          <div className="column center is-full">
          <div className="column center is-full">
            <a href={`https://twitter.com/${this.state.user.username}`}>
              <div className="twitterContainer">
                <div>
                  <span className="icon">
                    <i className="fa fa-twitter"></i>
                  </span>
                </div>
                <p className="twitterName">{this.state.user.username}</p>
              </div>
            </a>
          </div>
          </div>
          <div>
            <MediaItemsContainer all={true} type="playlist" items={this.state.playlists} />
          </div>
        </div>
      );
    }

    return (
      <div className="app-container profile-page">
        {page}
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    sessionUser: state.user.user,
    playlists: state.playlist.playlists
  };
};

export default connect(mapStateToProps)(Profile)
