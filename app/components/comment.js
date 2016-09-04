import React from 'react';
import { Link } from 'react-router';

function Comment (props) {
  return (
    <div className="comment column is-full">
      <div className="columns">
      <div className="column is-half">
        <div className="box comment">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={props.comment.user.image} alt="Commentor Avatar" />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p className="commentorName">
                  <Link to={`/profile/${props.comment.user._id}`}>
                    {props.comment.user.name}
                  </Link>
                  <span className="time">{moment(props.comment.timestamp).fromNow()}</span>
                </p>
                <div className="commentBody">
                  {props.comment.text}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
      </div>
    </div>

  );
}

export default Comment
