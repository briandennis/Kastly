import React from 'react';
import { connect } from 'react-redux';
import { PlaylistService } from './../providers/api.service';

import EpisodeList from './../components/episodeList';

class Playlist extends React.Component {

  constructor () {
    super();

    this.state = {
      playlist: null,
      author: null,
      playlistNotFound: false
    };

    this.updatePlaylist = this.updatePlaylist.bind(this);
  }

  componentWillMount () {
    PlaylistService.get(this.props.params.playlistId)
      .then( (response) => {
        if (response) {
          this.setState({
            playlist: response.playlist,
            author: response.author
          });
        } else {
          this.setState({
            playlistNotFound: true
          });
        }
      })
      .catch( (error) => console.log(error));
  }

  updatePlaylist (episodes) {
    PlaylistService.update(this.state.playlist._id, {
      content: episodes
    })
      .then( (updatedPlaylist) => {
        this.setState({
          playlist: updatedPlaylist
        });
      })
      .catch(console.error);
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
      // check ownership
      let owner = false;
      if (this.props.user && this.state.author._id ===  this.props.user.id) {
        owner = true;
      };

      playlistPage = (
        <div className="columns is-multiline">
          <div className="column is-full">
            <h1>This is where the heading will go!</h1>
          </div>
          <div className="column is-full">
            <EpisodeList type="playlist"
                         playlistId={this.state.playlist._id}
                         episodes={this.state.playlist.content}
                         updatePlaylist={this.updatePlaylist}
                         owner={owner}/>
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

const mapStateToProps = (state) => {
  return {
    user: state.user.user
  };
}

export default connect(mapStateToProps)(Playlist);
