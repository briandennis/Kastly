import React from 'react';
import { PlaylistService } from './../providers/api.service';

import MediaItemsContainer from './../components/mediaItemsContainer';
import Spinner from 'react-spinner';

class Playlists extends React.Component {
  constructor () {
    super();

    this.state = {
      playlists: []
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

    let body = <Spinner />;

    return (
      <div>
        <h1> Playlist Page </h1>
        <div>
          <MediaItemsContainer type="playlist" items={this.state.playlists} />
        </div>
      </div>
    )
  }
}

export default Playlists;
