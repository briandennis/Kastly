import React from 'react';

function Likes (props) {

  return (
    <div className="like">
    <div>
      <span className="icon like"
            onClick={
              props.loggedIn
              ? props.toggle
              : ''
            }>
        <i className={
              props.loggedIn && !props.liked
              ? 'fa fa-star liked'
              : 'fa fa-star liked'
            } />
      </span>
    </div>
    <div className="likeText">
      {props.liked ? 'true' : 'false'}
    </div>
    </div>
  );
}

export default Likes;
