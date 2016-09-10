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

  render() {
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
            {
              this.state.searched && this.state.casts.length === 0 && !this.state.loading
              ? (
                <div className="no-results">
                  <h4 className="title is-4">
                    Sorry, couldn't find anything. Try again!
                  </h4>
                </div>
              )
              : ''
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Discover;
