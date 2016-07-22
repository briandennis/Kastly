import React from 'react';

function Playlist (props) {
  return (
    <div>
      <img src={props.image} height="100"/>
      <a href={props.url}><h2>{props.name}</h2></a>
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
    <div>
      {playlists}
    </div>
  );
}

PlaylistsContainer.propTypes = { playlists: React.PropTypes.array };
