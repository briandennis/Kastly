import React from 'react';
import ReactDOM from 'react-dom';
import Api from './../apiService.js';

import SearchBox from './../components/search';
import MediaItemsContainer from './../components/mediaItemsContainer';
import Loading from './../components/loading';

require('./../index.scss');

class Discover extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      casts: [],
      loading: false,
      error: false,
      searched: false,
    };

    this.search = this.search.bind(this);
    this.getCasts = this.getCasts.bind(this);
  }

  search(query) {
    this.setState({ loading: true });
    Api.search(query)
      .then( (casts) => {
        this.setState({ casts, loading: false, searched: true });
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
    console.log('Loading: ' + this.state.loading);
    return (
      <div className="app-container">
        <div className="columns is-multiline">
          <div className="column center is-12">
            <h1 className='title is-1'>Podcast Search</h1>
          </div>
          <div className="column center is-12">
            <p className="page-description">Search an immense library of podcasts.</p>
          </div>
          <div className="column center">
            <div className="columns">
              <SearchBox searchHandler={this.search} default={'Podcast title'} />
            </div>
          </div>
          <div className="column">
            <MediaItemsContainer type="podcast" items={this.state.casts} />
            {this.state.loading ? <Loading /> : ''}
          </div>
        </div>
      </div>
    );
  }
}

export default Discover;
