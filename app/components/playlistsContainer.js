import React from 'react';

function Podcast (props) {
  return (
    <div className="tile column">
      <div className="card" onClick={props.callback(props.cast.key)}>
        <div className="card-image">
          <figure className="image is-1by1">
            <img src={props.cast.image}/>
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            <a href={props.cast.url}>
              <h2 className="title is-3">{props.cast.name}</h2>  
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PlaylistsContainer(props) {
  const playlists = props.casts.map((curr, index) => {
    const cast =  {
      key: index,
      name: curr.title,
      image: curr.logo,
      url: curr.feed,
    };

    return <Podcast cast={cast} callback={this.props.callback} />;
  });

  return (
    <div id="playlistContainer" className="columns is-multiline">
      {playlists}
    </div>
  );
}

PlaylistsContainer.propTypes = { playlists: React.PropTypes.array };
