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
              ? 'fa fa-star-o'
              : 'fa fa-star'
            } />
      </span>
    </div>
    <div>
      {props.count}
    </div>
    </div>
  );
}

export default Like;
