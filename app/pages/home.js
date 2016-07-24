import React from 'react';
import { Link } from 'react-router';

import Login from './../components/login';

class Home extends React.Component {

  render () {

    return (
      <div>
        <h1 className="title is-1"> Kastly </h1>
        <button className="button"><Link to="/discover">Go To Discover</Link></button>
        <Login />
      </div>
    );

  }
}

export default Home
