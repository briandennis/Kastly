import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PlaylistService } from './../providers/api.service';
import { setPlaylists, fetchingPlaylists } from './../actions';

import EpisodeList from './../components/episodeList';
import PlaylistImage from './../components/playlistImage';
import CommentsContainer from './../components/commentsContainer';
import Likes from './../components/likes';

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
    this.toggleLiked = this.toggleLiked.bind(this);
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

  updatePlaylist (content, comments, liked) {
    console.log('sending!');
    PlaylistService.update(this.state.playlist._id, {
      content,
      comments,
      liked
    })
      .then( (updatedPlaylist) => {
        console.log('recieved!');
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

  toggleLiked () {
    let likes = this.state.playlist.liked;
    let index = likes.indexOf(this.props.user._id);
    if (index === -1) {
      likes.push(this.props.user._id);
    } else {
      likes.splice(index, 1);
    }

    this.updatePlaylist(null, null, likes);
  }

  addComment (commentText) {
    const newComment = {
      user: this.props.user,
      text: commentText,
      timestamp: (new Date()).getTime()
    };

    const updatedComments = this.state.playlist.comments;
    updatedComments.push(newComment);

    this.updatePlaylist(null, updatedComments);
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

      // check if user liked the playlist
      let liked = true;
      if (this.props.user) {
        console.log('trying...');
        liked = this.state.playlist.likes.indexOf(this.props.user._id) !== -1;
      }

      playlistPage = (
        <div className="columns is-multiline">
          <div className="column is-full">
            <h1>This is where the heading will go!</h1>
            <Likes loggedIn={!!this.props.user}
                  count={this.state.playlist.likes.count}
                  liked={liked}
                  toggle={this.toggleLiked}/>
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
