import React from 'react';
import { connect } from 'react-redux';

import Episode from './episode';

const EpisodeList = (props) => {

  function updateEpisodes (index, action) {
    let episodes = props.episodes;
    switch (action) {
      case 'delete':
        episodes.splice(index, 1);
        props.updatePlaylist(episodes);
        break;
      case 'up':
        if (index !== 0) {
          let episode = episodes.splice(index, 1);
          let before = episodes.slice(0, index - 1);
          let after = episodes.slice(index - 1);
          episodes = [...before, ...episode, ...after];
          props.updatePlaylist(episodes);
        }
        break;
      case 'down':
        if (index < episodes.length - 1) {
          let episode = episodes.splice(index, 1);
          let before = episodes.slice(0, index + 1);
          let after = episodes.slice(index + 1);
          episodes = [...before, ...episode, ...after];
          props.updatePlaylist(episodes);
        }
    }
  }

  let owner = false;
  if (props.type === 'playlist' && props.owner === true) {
    owner = true;
  }

  const episodes = props.episodes
    .map( (episode, index) => {
      return <Episode key={index}
                      index={index}
                      type={props.type}
                      episode={episode}
                      playlists={props.playlists}
                      loggedIn={props.loggedIn}
                      owner={owner}
                      update={updateEpisodes}/>
    })

  return (
    <div className="episodesContainer">
      <table className="table">
        <tbody>
          {episodes}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: !!state.user.user,
    playlists: state.playlist.playlists
  };
};

export default connect(mapStateToProps)(EpisodeList);
