import React from 'react';

import MediaItem from './mediaItem';

function MediaItemsContainer(props) {
  const playlists = props.casts.map((curr, index) => {
    const cast =  {
      key: index,
      id: curr.id,
      name: curr.title,
      image: curr.logo,
      url: curr.feed,
    };

    return <MediaItem key={cast.key} cast={cast} callback={props.callback} />;
  });

  return (
    <div id="playlistContainer" className="columns is-multiline">
      {playlists}
    </div>
  );
}

MediaItemsContainer.propTypes = { playlists: React.PropTypes.array };

export default MediaItemsContainer;
