import React from 'react';

function Playlist (props) {
  return (
    <div>
      <img src={props.image} height="50"/>
      <a href={props.url}><h2>{props.name}</h2></a>
      <p> Tracks: {props.count} </p>
    </div>
  );
}

export default function PlaylistsContainer(props) {
  const playlists = props.playlists.map((curr, index) => {
    const playlist =  {
      key: index,
      name: curr.name,
      image: curr.images[0].url,
      trackCount: curr.tracks.total,
      url: curr.href,
    };

    return <Playlist key={playlist.key} name={playlist.name}
                      image={playlist.image}
                      count={playlist.trackCount}
                      url={playlist.count} />;
  });

  console.log('IN playlist container');

  return (
    <div>
      {playlists}
    </div>
  );
}

PlaylistsContainer.propTypes = { playlists: React.PropTypes.array };
