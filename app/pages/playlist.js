import React from 'react';

import { playlistService } from './../providers/api.service';

class Playlist extends React.Component {

  constructor () {
    super();

    this.state = {
      playlist: null
    };
  }

  componentWillMount () {
    playlistService.get(this.props.params.playlistId)
      .then( (playlist) => {
        this.setState({
          playlist
        });
      })
      .catch( (error) => console.log(error));
  }

  render () {
    return (
      <div>
        {this.state.playlist}
      </div>
    );
  }
}

export default Playlist
