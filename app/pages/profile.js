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
      console.log('Not same user!');
      // get user
      UserService.get(props.params.userId)
        .then( (user) => {
          console.log('got the user!');
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
