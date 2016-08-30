import React from 'react';
import { PlaylistService } from './../providers/api.service';

class Playlists extends React.Component {
  constructor () {
    super();

    this.state = {
      playlists: [];
    }
  }

  componentWillMount () {
    PlaylistService.get()
      .then( (playlists) => {
        this.setState({ playlists });
      })
      .catch(console.error);
  }

  render () {
    const playlists = this.state.playlists.map( (playlist, index) => {
      return <p key={index}> {playlist.name} </p>;
    });

    return (
      <h1> Playlist Page </h1>
      <div>
        {playlists}
      </div>
    )
  }
}
