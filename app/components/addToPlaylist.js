import React from 'react';

const AddToPlaylist = (props) => {

  /*const options = props.playlists.map( (playlist) => {

    let formattedTitle = playlist.title;
    if (playlist.title > 50) {
      formattedTitle = playlist.title.slice(0, 50);
    }

    return <option> {formattedTitle} </option>;
  }); */

  const options = '';

  return (
    <span className="select">
      <select>
        <option>Add to playlist...</option>
        {options}
      </select>
    </span>
  );
}

export default AddToPlaylist;
