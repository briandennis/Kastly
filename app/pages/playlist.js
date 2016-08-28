import React from 'react';

import { playlistService } from './../providers/api.service';

class Playlist extends React.Component {

  constructor () {
    super();

    this.state = {
      playlist: null,
      playlistNotFound: false
    };
  }

  componentWillMount () {
    playlistService.get(this.props.params.playlistId)
      .then( (response) => {
        if (response.data) {
          this.setState({
            playlist: response.data
          });
        } else {
          this.setState({
            playlistNotFound: true
          });
        }
      })
      .catch( (error) => console.log(error));
  }

  render () {
    let playlistPage = <div></div>;
    if (this.state.playlist) {
      playlistPage = (
        <div>
          {this.state.playlist.title}
        </div>
      );
    }

    return (
      <div>
        {playlistPage}
      </div>
    );
  }
}

export default Playlist
