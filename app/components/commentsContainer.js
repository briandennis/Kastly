import React from 'react';
import { PlaylistService } from './../providers/api.service';

function CommentsContainer (props) {

  const comments = props.comments.map( (comment, index) => {

  })

  return (
    <div className="playlistContainer">
      <p>Hello, world!</p>
      <p> {props.playlist.content.length} </p>
    </div>
  );
}

export default CommentsContainer
