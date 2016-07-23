import React from 'react';

function Podcast (props) {

  const handler = () => props.callback(props.cast.id);

  return (
    <div className="column" onClick={handler}>
      <div className="card">
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
      id: curr.id,
      name: curr.title,
      image: curr.logo,
      url: curr.feed,
    };

    return <Podcast key={cast.key} cast={cast} callback={props.callback} />;
  });

  return (
    <div id="playlistContainer" className="columns is-multiline">
      {playlists}
    </div>
  );
}

PlaylistsContainer.propTypes = { playlists: React.PropTypes.array };
