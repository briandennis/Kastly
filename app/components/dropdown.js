import React from 'react';
import { Link } from 'react-router';

class Dropdown extends React.Component {

  constructor () {
    super();

    this.state = {
      show: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle () {
    console.log('Toggle!');
    this.setState({
      show: !this.state.show
    });
  }

  render() {

    const contentStyle = this.state.show ? {} : { display: 'none' };

    return (
      <div>
        <div className="dropdown-icon">
          <i onClick={this.toggle} className="fa fa-bars"></i>
        </div>
        <div className="dropdown-content box" style={contentStyle}>
          <ul>
            <li>
              <Link to="/discover">Podcasts</Link>
            </li>
            <li>
              <Link to="/playlists">Playlists</Link>
            </li>
            <li>
              <Link to="/">Create Podcast</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Dropdown;
