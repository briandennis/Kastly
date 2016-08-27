import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const Nav = (props) => {

  let loginButton, avatar;
  if (props.loggedIn) {
    // set login button
    loginButton = (
      <span className="nav-item">
        <a className="button is-light" href="/logout">
          Log Out
        </a>
      </span>
    );

    // add profile button
    avatar = (
      <div className="nav-item">
        <Link to={`/profile/${props.user.id}`}>
          <img className="navAvatar" src={props.user.image} />
        </Link>
      </div>
    );
  } else {
    loginButton = (
      <span className="nav-item">
        <a className="button is-primary" href="/login/twitter">
          <span style={{marginRight: '10px'}} className="icon">
            <i className="fa fa-twitter"></i>
          </span>Log in
        </a>
      </span>
    );

    avatar = (
      <div></div>
    );
  }

  return (
    <div className="nav">
      <div className="nav-left">
        <div className="nav-item is-brand">
          <Link to="/">
            <h1 className="navTitle">Kastly</h1>
          </Link>
        </div>
      </div>
      <div className="nav-right">
        {avatar}
        {loginButton}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log('Mappin dat state');
  return {
    loggedIn: !!state.user.user,
    user: state.user.user
  };
}

export default connect(mapStateToProps)(Nav);
