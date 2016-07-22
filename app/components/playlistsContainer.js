import React from 'react';

function Playlist (props) {
  return (
    <div className="tile">
      <div className="card">
        <div className="card-image">
          <figure className="image is-1by1">
            <img src={props.image}/>
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            <a href={props.url}><h2>{props.name}</h2></a>
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

    return <Playlist key={cast.key} name={cast.name}
                      image={cast.image}
                      url={cast.feed} />;
  });

  return (
    <div id="playlistContainer">
      {playlists}
    </div>
  );
}

PlaylistsContainer.propTypes = { playlists: React.PropTypes.array };
