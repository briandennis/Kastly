import React from 'react'

import { connect } from 'react-redux'

import Spinner from 'react-spinkit';

class Profile extends React.Component {

  constructor() {
    super()

    this.state = {
      user: null
    };
  }

  componentWillMount () {

    console.log(this.props.sessionUser);

    if (this.props.sessionUser) {
      console.log('Session user id: ' + this.props.sessionUser.id);
      console.log('Wanted user id: ' + this.props.params.userId);
    }

    if( this.props.sessionUser
        && this.props.params.userId == this.props.sessionUser.id) {
      console.log('Same user!');
    } else {
      console.log('Not same user!');
    }
  }

  render () {
    let page = (
      <div className="columns">
        <div className="centerChildren" className="column is-12">
          <Spinner spinnerName="three-bounce" />
        </div>
      </div>
    )

    if (this.state.user) {
      page = (
        <div>
          <div className="title">
            <img src={this.state.user.image} />
            <h1>{this.state.user.name}</h1>
          </div>
        </div>
      );
    }

    return page;
  }
}

const mapStateToProps = function (state) {
  console.log('MapStateToProps!');
  return {
    sessionUser: state.user.user
  };
};

export default connect(mapStateToProps)(Profile)
