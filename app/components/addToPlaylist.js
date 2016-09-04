import React from 'react';

import { PlaylistService } from './../providers/api.service';

const AddToPlaylist = (props) => {

  function addToPlaylist(e) {
    const playlistId = e.target.value;
    PlaylistService.addEpisode(playlistId, props.episode)
      .catch(console.log);
  }

  const options = props.playlists.map( (playlist, index) => {

    let formattedTitle = playlist.title;
    if (playlist.title > 50) {
      formattedTitle = playlist.title.slice(0, 50);
    }

    return <option value={playlist._id} key={index}> {formattedTitle} </option>;
  });

  let component = '';
  if (props.loggedIn) {
    component = (
      <span className="select add-to-playlist">
        <select onChange={addToPlaylist} value={'default'}>
          <option value="default">Add to playlist...</option>
          {options}
        </select>
      </span>
    );
  }

  return (
    <div>
      {component}
    </div>
  );
}

export default AddToPlaylist;
