import React from 'react';
import { Link } from 'react-router';

function MediaItem (props) {

  const handler = () => props.callback(props.item.id);

  return (
    <div className="column" onClick={handler}>
      <div className="card">
        <div className="card-image">
          <figure className="image is-1by1">
            <img src={props.item.image}/>
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            <Link to={`/podcast/${props.item.id}`}>
              <h2 className="title is-3">{props.item.name}</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MediaItem;
