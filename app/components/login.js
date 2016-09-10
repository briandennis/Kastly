import React from 'react';

function Login (props) {

  function navigate () {
    if (props.loggedIn) {
      window.location.assign(`/logout?redirect=${encodeURIComponent(window.location.pathname)}`);
    } else {
      window.location.assign(`/login/twitter?redirect=${encodeURIComponent(window.location.pathname)}`);
    }
  }

  return (
    <button className={
            props.loggedIn
            ? `button ${props.logOutType}`
            : 'button loginButton' }
            onClick={navigate} >
      {
        props.loggedIn
        ? (
          <span> Log out </span>
        )
        : (
          (
            <span>
              <span style={{marginRight: '10px'}} className="icon">
                <i className="fa fa-twitter"></i>
              </span>Log in
            </span>
          )
        )
      }
    </button>
  )
}

export default Login
