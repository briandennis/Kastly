import React from 'react';
import ReactDOM from 'react-dom';

import SearchBox from './components/search';

require('./index.scss');

class Root extends React.Component {

  search(query) {
    console.log(`From Root ${query}`);
  }

  render() {
    return (
      <div>
        <h1>Playlist Search</h1>
      <SearchBox searchHandler={this.search} default={'Playlist Name'} />
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('app'));
