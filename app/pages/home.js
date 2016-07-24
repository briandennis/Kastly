import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component {

  render () {

    return (
      <div>
        <h1 className="title is-1"> Kastly </h1>
        <button className="button"><Link to="/discover">Go To Discover</Link></button>
      </div>
    );

  }
}

export default Home
