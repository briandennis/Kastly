import React from 'react';
import { Link } from 'react-router';

function Comment (props) {
  return (
    <div className="comment">
      <div className="commentHeading">
        <div>
          <img src={props.user.image} />
        </div>
        <p>
          <Link to={`/profile/${props.user.id}`}>
            {props.user.name}
          </Link>
        </p>
        <p>
          {props.timestamp}
        </p>
      </div>
      <div className="commentBody">
        {props.comment.text}
      </div>
    </div>
  );
}

export default Comment
