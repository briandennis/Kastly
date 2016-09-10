import React from 'react';
import { Link } from 'react-router';

function MediaItem (props) {

  return (
    <div className="mediaItem column">
      <div className="card">
        <Link to={props.item.link}>
          <div className="card-image">
            {props.item.image}
          </div>
        </Link>
        <div className="card-content">
          <div className="content">
            <Link to={props.item.link}>
              <h5 className="title is-5">{props.item.name}</h5>
            </Link>
            <div className="cardInfo">
              {props.item.size ? `${props.item.size} ${props.item.size === 1 ? 'episode' : 'episodes'}` : ''}
              {
                props.item.likes
                ? (
                  <span className="like-indicator">
                    <i className="card-star fa fa-star"></i>
                    {props.item.likes}
                  </span>
                )
                : ''
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MediaItem;
