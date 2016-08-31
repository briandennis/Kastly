import React from 'react';
import { Link } from 'react-router';
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
    PlaylistService.update(this.state.playlist._id, {
      content,
      comments,
      liked
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

  toggleLiked () {
    console.log('in toggle func...');
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
      <div className="columns">
        <div className="column is-12">
          Bummer, couldn't find this playlist.
        </div>
      </div>
    );
    if (this.state.playlist) {
      // check ownership
      let owner = false;
      if (this.props.user && this.state.author._id ===  this.props.user.id) {
        owner = true;
      };

      // get playlist length
      let length = this.state.playlist.content.length;

      // check if user liked the playlist
      let liked = true;
      if (this.props.user) {
        liked = this.state.playlist.likes.indexOf(this.props.user._id) !== -1;
      }

      playlistPage = (
        <div className="media-page">
          <section className="heading centerChildren">
            <div className="columns headingContainer">
              <div className="column is-half logoContainer">
                <PlaylistImage size="Large" episodes={this.state.playlist.content} />
              </div>
              <div className="column is-half titleContainer centerChildren">
                <h2> {this.state.playlist.title}</h2>
                <p className="description"> {this.state.playlist.description} </p>
                <p className="author">
                  By
                  <Link className="authorName" to={`/profile/${this.state.author._id}`}>
                    {this.state.author.name}
                  </Link>
                </p>
                <div className="likesContainer">
                  <Likes loggedIn={!!this.props.user}
                      count={this.state.playlist.likes.length}
                      liked={liked}
                      toggle={this.toggleLiked}/>
                </div>
              </div>
            </div>
          </section>
          {
            owner && length === 0
            ? (
              <div className="empty-playlist">
                <div>
                  <h5 className="title is-5">
                    Looks like there aren't any episodes here. Go and <Link to={'/discover'}>add some</Link> for goodness sake!
                  </h5>
                </div>
              </div>
            )
            : (
              <section className="episodes">
                <EpisodeList type="playlist"
                             playlistId={this.state.playlist._id}
                             episodes={this.state.playlist.content}
                             updatePlaylist={this.updatePlaylist}
                             owner={owner}/>
              </section>
            )
          }
          {
            (!!this.props.user || this.state.playlist.comments.length > 0) && length
            ? (
              <section className="column is-full commentSection">
                <h3 className="title is-3 commentsTitle"> Comments </h3>
                <CommentsContainer playlist={this.state.playlist}
                                   submitComment={this.addComment}
                                   loggedIn={!!this.props.user}/>
              </section>
            )
            : ''
          }
        </div>
      );
    }

    return (
      <div className="app-container">
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
