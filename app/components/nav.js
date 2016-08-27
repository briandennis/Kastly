import React from 'react';
import { connect } from 'react-redux';

const Nav = (props) => {

  let loginButton;
  if (props.loggedIn) {
    loginButton = (
      <span className="nav-item">
        <a className="button is-light" href="/logout">
          Log Out
        </a>
      </span>
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
  }

  return (
    <div className="nav">
      <div className="nav-left">
        <div className="nav-item is-brand">
          <h1 className="navTitle">Kastly</h1>
        </div>
      </div>
      <div className="nav-right">
        {loginButton}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log('Mappin dat state');
  return {
    loggedIn: !!state.user.user
  };
}

export default connect(mapStateToProps)(Nav);
