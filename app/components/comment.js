import React from 'react';
import { Link } from 'react-router';

function Comment (props) {
  return (
    <div className="comment">
      <div className="commentHeading">
        <div>
          <img src={props.comment.user.image} />
        </div>
        <p>
          <Link to={`/profile/${props.user.id}`}>
            {props.comment.user.name}
          </Link>
        </p>
        <p>
          {props.comment.timestamp}
        </p>
      </div>
      <div className="commentBody">
        {props.comment.text}
      </div>
    </div>
  );
}

export default Comment
