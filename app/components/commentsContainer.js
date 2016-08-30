import React from 'react';
import { PlaylistService } from './../providers/api.service';

import Comment from './comment';
import CreateComment from './createComment';

function CommentsContainer (props) {

  const comments = props.comments.map( (comment, index) => {
    return <Comment key={index} comment={comment} />;
  });

  return (
    <div className="playlistContainer">
      <p>Hello, world!</p>
      <div>
        {comments}
      </div>
      <div>
        <CreateComment />
      </div>
    </div>
  );
}

export default CommentsContainer
