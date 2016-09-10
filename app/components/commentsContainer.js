import React from 'react';
import { PlaylistService } from './../providers/api.service';

import Comment from './comment';
import CreateComment from './createComment';

function CommentsContainer (props) {

  const comments = props.playlist.comments.reverse().map( (comment, index) => {
    return <Comment key={index} comment={comment} />;
  });

  return (
    <div id="comments-container" className="playlistContainer">
      <div className="columns is-multiline">
        {comments}
      </div>
      {
        props.loggedIn
        ? (
          <div className="columns">
            <CreateComment submitComment={props.submitComment}/>
          </div>
        )
        : ''
      }
    </div>
  );
}

export default CommentsContainer
