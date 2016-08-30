import React from 'react';
import { PlaylistService } from './../providers/api.service';

class Playlists extends React.Component {
  constructor () {
    super();

    this.state = {
      playlists: [];
    }
  }

  componentWillMount () {
    PlaylistService.get()
      .then( (playlists) => {
        this.setState({ playlists });
      })
      .catch(console.error);
  }

  render () {
    
  }
}
