import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import Login from './../components/login';

const home = (props) => {

  const message = props.user
                  ? <p> You are logged in as {props.user.name} </p>
                  : '';

  return (
    <div className="homeTitleContainer">
      <h1 className="title is-1"> Welcome to Kastly </h1>
      {message}
    </div>
  );
};

const mapStateToProps = function (state) {
  return {
    user: state.user.user
  };
};

export default connect(mapStateToProps)(home);
