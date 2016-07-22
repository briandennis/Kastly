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

    console.log('Constructing!');

    this.state = {
      casts: [],
      loading: false,
      error: false,
    };

    this.search = this.search.bind(this);
  }

  search(query) {
    console.log('called...');
    this.setState({ loading: true });
    Api.search(query)
      .then( (casts) => {
        console.log('State updated!');
        this.setState({ casts });
      })
  }

  render() {
    console.log("rendering!");
    return (
      <div>
        <h1>Playlist Search</h1>
        <SearchBox searchHandler={this.search} default={'Playlist Name'} />
        <PlaylistsContainer casts={this.state.casts} />
        {this.state.loading ? <Spinner /> : ''}
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('app'));
