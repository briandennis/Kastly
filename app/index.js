import React from 'react';
import ReactDOM from 'react-dom';
import Api from './apiService.js';

import SearchBox from './components/search';
import PlaylistsContainer from './components/playlistsContainer';
import Spinner from 'react-spinner';

require('./index.scss');

class Root extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      playlists: [],
      loading: false,
    };

    this.search = this.search.bind(this);
  }

  search(query) {
    this.setState({ loading: true });
    Api.search(query)
      .then((response) => {
        if (!response.error) {
          console.log('got here!');
          console.log(response);
          this.setState({ playlists: response.data.playlists.items, loading: false});
        }
      });
  }

  render() {
    console.log("rendering!");
    return (
      <div>
        <h1>Playlist Search</h1>
        <SearchBox searchHandler={this.search} default={'Playlist Name'} />
        <PlaylistsContainer playlists={this.state.playlists} />
        {this.state.loading ? <Spinner /> : ''}
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('app'));
