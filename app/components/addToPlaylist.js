import React from 'react';

const AddToPlaylist = (props) => {

  function addToPlaylist(playlistId) {
    console.log(playlistId.value);
  }

  const options = props.playlists.map( (playlist, index) => {

    let formattedTitle = playlist.title;
    if (playlist.title > 50) {
      formattedTitle = playlist.title.slice(0, 50);
    }

    return <option value={playlist._id} key={index}> {formattedTitle} </option>;
  });

  return (
    <span className="select">
      <select onChange={addToPlaylist}>
        <option>Add to playlist...</option>
        {options}
      </select>
    </span>
  );
}

export default AddToPlaylist;
