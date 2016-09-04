import React from 'react';

class Login extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      showModal: false
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  navigate () {
    if (props.loggedIn) {
      window.location.assign(`/logout?redirect=${encodeURIComponent(window.location.pathname)}`);
    } else {
      window.location.assign(`/login/twitter?redirect=${encodeURIComponent(window.location.pathname)}`);
    }
  }

  render () {
    return (
      <button className={
              props.loggedIn
              ? `button ${props.logOutType}`
              : 'button loginButton' }
              onClick={navigate} >
        {
          props.loggedIn
          ? (
            Log Out
          )
          : (
            (
              <span>
                <span style={{marginRight: '10px'}} className="icon">
                  <i className="fa fa-twitter"></i>
                </span>Log in`
              </span>
            )
          )
        }
      </button>
    );
  }
}

export default Login
