import React from 'react'

const Nav = (props) => {

  let loginButton;
  if (props.loggedIn) {
    loginButton = (
      <a className="button is-light" href="/logout">
        Log Out
      </a>
    );
  } else {
    loginButton = (
      <a className="button is-primary" href="/login/twitter">
        <span style={{marginRight: '10px'}} className="icon">
          <i className="fa fa-twitter"></i>
        </span>Log in
      </a>
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

export default Nav;
