import React from 'react';
import ReactDOM from 'react-dom';

import SearchBox from './components/search';

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <SearchBox fun={'Playlist Name'} />
      </div>
    );
  }
}

ReactDOM.render(<HelloWorld />, document.getElementById('app'));
