import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PlaylistService } from './../providers/api.service';
import { setPlaylists, fetchingPlaylists } from './../actions';

import EpisodeList from './../components/episodeList';
import PlaylistImage from './../components/playlistImage.js';
import CommentsContainer from './../components/commentsContainer';

class Playlist extends React.Component {

  constructor () {
    super();

    this.state = {
      playlist: null,
      author: null,
      playlistNotFound: false
    };

    this.updatePlaylist = this.updatePlaylist.bind(this);
    this.addComment = this.addComment.bind(this);
  }

  componentWillMount () {
    PlaylistService.get(this.props.params.playlistId)
      .then( (response) => {
        if (response) {
          this.setState({
            playlist: response.playlist,
            author: response.author
          }, () => {
          });
        } else {
          this.setState({
            playlistNotFound: true
          });
        }
      })
      .catch( (error) => console.log(error));
  }

  updatePlaylist (content, comments) {
    PlaylistService.update(this.state.playlist._id, {
      content,
      comments
    })
      .then( (updatedPlaylist) => {
        this.setState({
          playlist: updatedPlaylist
        });
      })
      .then( () => {
        this.props.fetchingPlaylists();
        axios.get(`/api/user/${this.props.user._id}/playlist`)
          .then( (response) => {
            this.props.setPlaylists(true, response.data);
          })
          .catch( (err) => {
            this.props.setPlaylists(false, null, err);
          })
      })
      .catch(console.error);
  }

  addComment (commentText) {
    console.log('it worked!');
    const newComment = {
      user: this.props.user,
      text: commentText,
      timestamp: (new Date()).getTime()
    };

    console.log(newComment);

    this.updatePlaylist(this, null, this.state.playlist.comments.push(newComment));
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
            <div>
              <PlaylistImage size="Large" episodes={this.state.playlist.content} />
            </div>
          </div>
          <div className="column is-full">
            <EpisodeList type="playlist"
                         playlistId={this.state.playlist._id}
                         episodes={this.state.playlist.content}
                         updatePlaylist={this.updatePlaylist}
                         owner={owner}/>
          </div>
          <div className="column is-full">
            <CommentsContainer playlist={this.state.playlist}
                               submitComment={this.addComment}
                               loggedIn={!!this.props.user}/>
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setPlaylists,
    fetchingPlaylists
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
