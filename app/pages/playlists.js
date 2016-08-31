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
      <div className="columns app-container is-multiline">
        <div className=" headingColumn column center is-12">
          <h1 className='title is-1'>Browse Playlists</h1>
        </div>
        <div className="column center is-12">
          <p className="page-description">Check out a variety of playlists created by the community</p>
        </div>
        <div>
          <MediaItemsContainer all={false} type="playlist" items={this.state.playlists} />
        </div>
      </div>
    )
  }
}

export default Playlists;
