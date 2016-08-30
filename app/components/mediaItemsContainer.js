import React from 'react';

import MediaItem from './mediaItem';
import PlaylistImage from './playlistImage';

function MediaItemsContainer(props) {

  let mediaItems;
  switch (props.type) {
    case 'podcast':
      mediaItems = mapPodcastsToMediaItems(props.items);
      break;
    case 'playlist':
      mediaItems = mapPlaylistsToMediaItems(props.items);
  }

  function mapPlaylistsToMediaItems (playlists) {
    return playlists.map( (curr, index) => {
      const item = {
        key: index,
        id: curr._id,
        name: curr.title,
        image: <PlaylistImage size="Large" episodes={curr.content} />,
        url: `/playlist/${curr._id}`
      };

      return <MediaItem key={item.key} item={item} />;
    });
  }

  function mapPodcastsToMediaItems (podcasts) {
    return podcasts.map( (curr, index) => {
      const item =  {
        key: index,
        id: curr.id,
        name: curr.title,
        image: <img src={curr.logo} />,
        url: curr.feed,
      };

      return <MediaItem key={item.key} item={item} />;
    });
  }

  return (
    <div id="playlistContainer" className="columns is-multiline">
      {mediaItems}
    </div>
  );
}

MediaItemsContainer.propTypes = { playlists: React.PropTypes.array };

export default MediaItemsContainer;
