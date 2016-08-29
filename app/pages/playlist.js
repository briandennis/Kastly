import React from 'react';
import { PlaylistService } from './../providers/api.service';

import EpisodeList from './../components/episodeList';

class Playlist extends React.Component {

  constructor () {
    super();

    this.state = {
      playlist: null,
      playlistNotFound: false
    };
  }

  componentWillMount () {
    PlaylistService.get(this.props.params.playlistId)
      .then( (response) => {
        if (response.data) {
          this.setState({
            playlist: response.data.playlist,
            author: response.data.author
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
    let playlistPage = (
      <div className="emptyPageContainer">
        <div className="columns">
          <div className="column is-12">
            Bummer, couldn't find this playlist.
          </div>
        </div>
      </div>
    );
    if (this.state.playlist) {
      playlistPage = (
        <div className="columns is-multiline">
          <div className="column is-full">
            <h1>This is where the heading will go!</h1>
          </div>
          <div className="column is-full">
            <EpisodeList type="playlist"
                         episodes={this.state.playlist.content} />
          </div>
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
