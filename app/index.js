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
      .catch( () => {
        this.setState({ casts: [], error: true });
      });
  }

  render() {
    console.log("rendering!");
    return (
      <div id="appContainer" className="columns is-multiline">
        <div id="title" className="column is-12">
          <h1 className='title is-1'>Podcast Search</h1>
        </div>
        <div className="column">
          <div className="columns">
            <SearchBox searchHandler={this.search} default={'Playlist Name'} />
          </div>
        </div>
        <div className="column">
          <PlaylistsContainer casts={this.state.casts} />
          {this.state.loading ? <Spinner /> : ''}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('app'));
