import React from 'react';
import { Link } from 'react-router';

import Login from './login';

class Dropdown extends React.Component {

  constructor () {
    super();

    this.state = {
      show: false
    };

    this.toggle = this.toggle.bind(this);
    this.createClicked = this.createClicked.bind(this);
    this.navigate = this.navigate.bind(this);
  }

  navigate (route) {
    this.toggle();
    this.props.navigate(route);
  }

  toggle () {
    this.setState({
      show: !this.state.show
    });
  }

  createClicked() {
    this.setState({
      show: false
    });

    this.props.toggle();
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
              <a onClick={this.navigate.bind(null, '/discover')}>Podcasts</a>
            </li>
            <li>
              <a onClick={this.navigate.bind(null, '/playlists')}>Playlists</a>
            </li>
            <li>
              <Login loggedIn={this.props.loggedIn} logOutType="is-primary" />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Dropdown;
