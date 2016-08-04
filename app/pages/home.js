import React from 'react';
import { Link } from 'react-router';

import Login from './../components/login';

class Home extends React.Component {

  render () {

    return (
      <div className="homeTitleContainer">
        <h1 className="title is-1"> Welcome to Kastly </h1>
      </div>
    );

  }
}

export default Home
