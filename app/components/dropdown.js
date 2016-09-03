import React from 'react';
import { Link } from 'react-router';

class Dropdown extends React.Component {

  constructor () {
    super();

    this.state = {
      show: false
    };

    this.toggle = this.toggle.bind(this);
    this.createClicked= this.createClicked.bind(this);
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
              <Link to="/discover">Podcasts</Link>
            </li>
            <li>
              <Link to="/playlists">Playlists</Link>
            </li>
            {
              this.props.loggedIn
              ? (
                <ul>
                  <li>
                    <i onClick={this.createClicked} className="fa fa-plus" />
                  </li>
                  <li>
                    <Link to={`/profile/${this.props.userId}`}>
                      <i onClick={this.createClicked} className="fa fa-user" />
                    </Link>
                  </li>
                  <li>
                    <a className="button is-primary" href="/logout">
                      Log Out
                    </a>
                  </li>
                </ul>
              )
              : (
                <li>
                  <a className="button loginButton"
                     href={`/login/twitter?redirect=${encodeURIComponent(window.location.pathname)}`}>
                    <span style={{marginRight: '10px'}} className="icon">
                      <i className="fa fa-twitter"></i>
                    </span>Log in
                  </a>
                </li>
              )
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default Dropdown;
