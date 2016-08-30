import React from 'react';
import ReactDOM from 'react-dom';
import Api from './../apiService.js';

import SearchBox from './../components/search';
import MediaItem from './../components/mediaItem';
import Spinner from 'react-spinner';

require('./../index.scss');

class Discover extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      casts: [],
      loading: false,
      error: false,
    };

    this.search = this.search.bind(this);
    this.getCasts = this.getCasts.bind(this);
  }

  search(query) {
    this.setState({ loading: true });
    Api.search(query)
      .then( (casts) => {
        this.setState({ casts });
      })
      .catch( () => {
        this.setState({ casts: [], error: true });
      });
  }

  getCasts(id) {
    console.log(id);
    let casts = this.state.casts.filter( (cast) => (cast.id == id) );
    console.log(casts);
    if (casts.length) {
      Api.getPodcast(casts[0].feed)
      .then( (data) => {
        console.log(data);
      })
      .catch( (error) => {
        console.log('error');
      });
    }
  }

  render() {
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
          <MediaItem callback={this.getCasts} casts={this.state.casts} />
          {this.state.loading ? <Spinner /> : ''}
        </div>
      </div>
    );
  }
}

export default Discover;
